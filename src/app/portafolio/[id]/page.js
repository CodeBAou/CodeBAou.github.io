import React from 'react'
import './portafolio-post.css';

// Usamos exactamente los nombres que tienes en GitHub Secrets
const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
const SERVER  = process.env.NEXT_PUBLIC_SERVER;


export const dynamicParams = false;

export const generateStaticParams = async () => {
    try {
        // Añadimos un timeout o verificamos que las variables existan
        if (!API_KEY || !BLOG_ID) {
            console.warn("⚠️ Variables de entorno faltantes en el Build.");
            return [{ id: '404' }]; // Retornamos un ID falso para salvar el build
        }

        const res = await fetch(  
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/?key=${API_KEY}`,
            {
                method: 'GET',
                headers: {
                    'Referer': `${SERVER}`,
                }
            }
        );

        const data = await res.json();

        // 🛡️ SEGURIDAD: Si data.items no existe, devolvemos array vacío para no romper el build
        if (!data || !data.items) {
            console.warn("⚠️ No se encontraron posts o la API falló. Saltando generación estática.");
            return [];
        }

        return data.items.map((post) => ({
            id: post.id.toString()
        }));

    } catch (error) {
        console.error("❌ Error en generateStaticParams:", error);
        return [];
    }
}

export default async function Post({ params }) {
    // En Next.js 15+, params es una Promise
    const { id } = await params;

    const res = await fetch(  
        `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`,
        {
            method: 'GET',
            next: { revalidate: 3600 }, // Revalidación a nivel de fetch
            headers: {
                'Referer': `${SERVER}`,
            }
        }
    );

    const data = await res.json();

    // 🛡️ Manejo de error si el post específico no carga
    if (!data || data.error || !data.content) {
        return (
            <div className="portafolio-page-post">
                <p>El contenido no está disponible en este momento.</p>
                <a href="/portafolio">Volver al portafolio</a>
            </div>
        );
    }

    return (
        <div className="portafolio-page-post">
            <article
                className="post-content" 
                dangerouslySetInnerHTML={{ __html: data.content }}
            />

            <div className="servicios-content">
                <div className="callAction">     
                    <a href="/diseño-web-orense"> Diseño web</a>
                </div>
                <div className="callAction">     
                    <a href="/"> Más servicios</a>
                </div>
                <div className="callAction">     
                    <a href="/portafolio"> Portafolio</a>
                </div>
                <div className="callAction">   
                    <a href="/#contacto"> Contactar</a>
                </div>
            </div>
            <img width="365px" src="/image/logo_DWBA_sin_fondo.png" alt="Logo" />
        </div>
    );
}