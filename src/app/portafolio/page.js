"use client";
import React, {useState, useEffect} from 'react'
import parse from 'html-react-parser';
import { useRouter, useSearchParams } from 'next/navigation';
import './portafolio.css';

export default function Page(){

   
    const [iconLoading, setIconLoading]         = useState(true);
    const [postsPortafolio,setPostsPortafolio]  = useState([]);
    let [page, setpage]                         = useState(null);// pagina actual
    let [pagePrev, setPagePrev]                 = useState(""); // paginacion anterior
    let [pageNext, setPageNext]                 = useState(""); // Paginacion siguiente
    let [post, setPost]                         = useState(0); //post actual vista
    const [menuPortafolio, setMenuPortafolio]   = useState("display-menu-none");
    const router = useRouter();
    const searchParams = useSearchParams();
    const API_KEY           = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
    const BLOG_ID           = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
   
    const fetchGetPosts = async (pagein=null) =>{
        const params = new URLSearchParams({
            maxResults: 10,
            key: API_KEY
        });
       
      let url                 = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?${params.toString()}`;
        // Solo añadimos el token si existe (no será null en la 2da petición)
        if (pagein) {
            params.append('pageToken', pagein);
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
    
    const changePostview = (e) =>{
        let entrada = e.target.id.split("-")[1];
        //setPost(numeroEntrada);
        router.push(`/portafolio?page=${entrada}`, undefined, { shallow: true });
    }

    const openMenu = () =>{
        console.log(menuPortafolio);
        if(menuPortafolio === "display-menu-none"){
            setMenuPortafolio("display-menu-flex");
        }else{
            setMenuPortafolio("display-menu-none");
        }   
    }
    
    useEffect(()=>{
      
        fetchGetPosts();
    },[]);

    return(
        <div className="portafolio">
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
           <div className="portafolio-content">


                <img className="icono-lista-portafolio" width="50px" src="/icon/portafolio-list-icon.svg" onClick={()=> openMenu()}/>

                <div className={`portafolio-menu ${menuPortafolio}` } id="menu-mobile">
                       
                        <div className="portafolio-menu-title">
                            <div>
                                <h3>Indice de Proyectos</h3>
                                <p>Proyectos en esta página</p>
                            </div>
                            <div>
                                <img alt="Logo dwba" src="/image/logo_DWBA_sin_fondo.webp" />
                            </div>
                        </div>

                        {(postsPortafolio.length > 0)? 
                        <ul>
                            
                            {
                                postsPortafolio.map( (post,i) => {
                                    return <li id={post.id+"-"+i} key={post.id} onClick={(e)=>changePostview(e)}> {post.title} </li>
                                })
                            }
                        </ul>
                        : null }

                        <div className="paginacion-content">
                            <button onClick={()=>fetchGetPosts(pagePrev)}>Página Anterior</button>
                            <span>{(page)? page : 0}</span>
                            <button onClick={()=>fetchGetPosts(pageNext)}>Siguiente Página</button>
                        </div>
                </div>

                <div className="portafolio-main">
                      {
                        (postsPortafolio.length > 0)? 
                            <div key={postsPortafolio[parseInt(searchParams.get('page'))].id} className="content-post">
                                {postsPortafolio[parseInt(searchParams.get('page'))].updated}
                                {parse(postsPortafolio[parseInt(searchParams.get('page'))].content)}
                            </div>
                        : null
                      }
                   
                </div>
           </div>

          
        </div>
        

    )
}
