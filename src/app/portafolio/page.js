// app/portafolio/page.tsx
import { Suspense } from 'react';
import parse from 'html-react-parser';
import './portafolio.css'

async function GetPost() {

    // Estas variables se leen durante el 'npm run build'
    const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
    const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
    const SERVER  = process.env.NEXT_PUBLIC_SERVER;

    // 1. Fetch directo (sin useEffect)
    const res = await fetch(  
        `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/?key=${API_KEY}`,
        {
            method: 'GET',
            headers: {
            'Referer': `${SERVER}`, // Pon aquí lo que tengas en Google Cloud
            }
        }
    );
    
    const data = await res.json();
    
    // Si no hay items, evitamos errores
    const posts = data.items || [];

    //Se obtiene el src y alt de la primera imagen y se guardan el las nuevas propiedades postImage, postAlt.
    const postsMod =  posts.map( post => {

            let postmod     = post;
            const expImg    = /src="([^"]+)"/; // () grupo de captura , se coge la url solo con match[1]
            const expAlt    = /alt="([^"]+)"/;
            const src       = post.content.match(expImg);
            const src_value = src ? src[1] : "";
            const alt       = post.content.match(expAlt);
            const alt_value = alt ? alt[1] : "";
            
            return {
                ...post,
                postImage: src_value,
                postAlt: alt_value
            }
     })

    return (
            <nav>
                {postsMod.map((post) => (
                    <div key={post.id} className="tarjeta-post">
                        <img className="tarjeta-image" src={`${post.postImage}`} alt={`${post.postAlt}`}/>
                        <div className="tarjeta-texto">
                            <h2>{post.title}</h2>
                            {/* Aquí construyes tu enlace dinámico */}
                            <a href={`/portafolio/${post.id}`}>Ver proyecto</a>
                        </div>    
                    </div>
            ))}
            </nav>
       
    );
}

export default function Page() {
    return (
        <main className="portafolio">
            <h1>Proyectos y Notas de desarrollador.</h1>
            <Suspense fallback={<p>Cargando proyectos desde Blogger...</p>}>
                <GetPost />
            </Suspense>
        </main>
    );
}