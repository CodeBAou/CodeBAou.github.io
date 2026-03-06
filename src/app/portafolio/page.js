"use client";
import React, {useState, useEffect} from 'react'
import parse from 'html-react-parser';
import './portafolio.css';

export default function Page(){

    const [iconLoading, setIconLoading]         = useState(true);
    const [postsPortafolio,setPostsPortafolio]  = useState([]);
    let [page, setpage]                         = useState(null);// pagina actual
    let [pagePrev, setPagePrev]                 = useState(""); // paginacion anterior
    let [pageNext, setPageNext]                 = useState(""); // Paginacion siguiente

    const API_KEY           = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
    const BLOG_ID           = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
    const params = new URLSearchParams({
        maxResults: 10,
        key: API_KEY
    });
    let url                 = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?${params.toString()}`;
   
    const fetchGetPosts = async (pagein=null) =>{

     
        // Solo añadimos el token si existe (no será null en la 2da petición)
        if (pagein) {
            params.append('pageToken', pagenin);
        }

        try {
            const respuesta = await fetch(url);
            
            if (!respuesta.ok) {
                throw new Error(`Error: ${respuesta.status}`);
            }

            const datos = await respuesta.json();
          
            // Los posts están dentro de datos.items
            const posts      = datos.items;
            const portafolio = posts.filter( post => post.labels.includes('portafolio')); //Filtro etiqueta portafolio
            setPostsPortafolio(portafolio);
            console.log("Mis entradas:", portafolio);
            setIconLoading(false);
            
        } catch (error) {
            console.error("Algo salió mal:", error);
        }
    }
    
    useEffect(()=>{
        fetchGetPosts();
    },[]);

    return(
        <div className="portafolio-list-content">
            <h1>Últimos Proyectos de Diseño Web y Marketing Digital:</h1>
            <h2>Los útimos trabajos realizados.</h2>
          
            {
                (iconLoading == true)?
                    <div className="loading-content">
                        <img src="/image/logo_DWBA_sin_fondo.webp" className="loadingicon" alt="cargando entradas..."/> 
                        <p>cargando...</p>
                    </div>
                : null
            }
            {
                postsPortafolio.map((post)=>{
                    return (
                        <div key={post.id} className="content-post">
                            {post.updated}
                            {parse(post.content)}
                        </div>
                    )
                })
            }

            <div className="paginacion-content">
               <button onCLick={()=>fetchGetPosts(pagePrev)}>Anterior</button>
               <button onClick={()=>fetchGetPosts(pageNext)}>Siguiente</button>
            </div>
        </div>
        

    )
}
