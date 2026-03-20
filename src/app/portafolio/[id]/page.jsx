
import React from 'react'
import './portafolio-post.css';


    const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
    const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
    const SERVER  = process.env.NEXT_PUBLIC_SERVER;

export async function generateStaticParams() {


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

    return data.items.map((post)=>({
        id:post.id
    }))
  

   
  
 
}


export default async function Post({params}){
    
    const {id} = await params;

    // 1. Fetch directo (sin useEffect)
    const res =  await fetch(  
        `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`,
        {
            method: 'GET',
            headers: {
            'Referer': `${SERVER}`, // Pon aquí lo que tengas en Google Cloud
            }
        }
    );

    const data = await res.json();

    console.log(data);

    return(
           <div className="portafolio-page-post">
                <article
                        className="post-content" 
                        dangerouslySetInnerHTML={{ __html: data.content }}
                >
                </article>

                <div className="servicios-content">
                    <div className="callAction">     
                        <a href="/diseño-web"> Diseño web</a>
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
                <img width="365px" src="/image/logo_DWBA_sin_fondo.png"/>
            </div>
      
    )
}