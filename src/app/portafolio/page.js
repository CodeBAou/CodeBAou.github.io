"use client";
import React, {useState, useEffect} from 'react'
import parse from 'html-react-parser';
import { useRouter, useSearchParams } from 'next/navigation';
import './portafolio.css';

export default function Page(){

    const [iconLoading, setIconLoading]           = useState(true);
    const [postsPortafolio,setPostsPortafolio]    = useState([]);//todos las entradas
    const [pageTokenActual, setPageTokenActual]   = useState("0");// token pagina actual
    const [pagePrev, setPagePrev]                 = useState(null); // Token para la pagina anterior
    const [pageNext, setPageNext]                 = useState(null); // Token para la pagina siguiente
    const [MenuPost, menuPost]                    = useState();
    const [menuPortafolio, setMenuPortafolio]     = useState("display-menu-none");//Estilo open/close menu de entradas
    const router       = useRouter();
    const searchParams = useSearchParams();
    const API_KEY      = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
    const BLOG_ID      = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
   
    /** Construye y devuelve la url para la peticion api, la primera peticion page token es null 
    * El pagetoken puede ser el token anterior o el token siguiente
    */
    const buildApiUrl = (pagetoken=null) =>{

        let params = null;

        if(pagetoken==null) {
            
            params = new URLSearchParams({
                maxResults: 20,
                key: API_KEY,
            });

        }else{
            params = new URLSearchParams({
                maxResults:20,
                key:API_KEY,
                pageToken:pagetoken
            });
        }

        return  `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?${params.toString()}`
    }

    //Realiza una peticion de la pagina indicada por token, sin pageToken realiza una peticion sin el parametro de paginacion
    const fetchGetPosts = async (pageToken=null) =>{
        
        let url = null;

        if(searchParams.get('post') && pageToken == null){

            let params = new URLSearchParams({
                maxResults: 20,
                key: API_KEY,
            });

            url =  `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${searchParams.get('post')}?${params.toString()}`;
        
        }else{
            url = buildApiUrl(pageToken);
        }
            try {
                let respuesta = await fetch(url);
                if (!respuesta.ok) { throw new Error(`Error: ${respuesta.status}`); }
                    
                const datos = await respuesta.json();

                //Guardar tokens de paginacion, Nextpagetoken, PrevPageToken ...
                if(datos.nextPageToken) setPageNext(datos.nextPageToken);
                if(datos.prevPageToken) setPagePrev(datos.prevPageToken);

                //Obtención de la lista de post ...
                let posts      = null;
                let portafolio = null;

                if(!datos.items){
                    posts = [datos];
                    
                }else{
                     posts = datos.items;
                }

                portafolio = posts.filter( post => post.labels?.includes('portafolio')); //Filtro etiqueta portafolio
                router.push(`/portafolio?post=${portafolio[0].id}`, undefined, { shallow: true });
                
                //Guardamos la lista de posts
                setPostsPortafolio(portafolio);

                if(portafolio.length == 1)  reloadMenuPosts();
                   
                //Actualizamos la URL de la pagina
                if(pageToken != null)  setPageTokenActual(pageToken);        
                
                //Se quita el icono "cargando..." 
                setIconLoading(false);
                
            } catch (error) {
                console.error("Algo salió mal:", error);
            }
    }
    
    //Solo cambia el id de la entrada en la url 
    const changeURLEntrada = (e) =>{
        let entrada = e.target.id;
        router.push(`/portafolio?post=${entrada}`, undefined, { shallow: true });
    }

    //Devuelve el post actual a partir de la url de la web
    const getPostObj = () =>{
        let id_entrada  = searchParams.get('post');
        let post_Actual = postsPortafolio.filter( post => post.id == id_entrada);
       
        return post_Actual[0];
    }

    const openMenu = () =>{
       
        if(menuPortafolio === "display-menu-none"){
            setMenuPortafolio("display-menu-flex");
        }else{
            setMenuPortafolio("display-menu-none");
        }   
    }

    //Cuando se hace mediante enlace solo se busca el post por id, realizamos esta peticion para cargar el menu de posts
    const reloadMenuPosts = async() => {

        let  url = buildApiUrl();
        try {

            let respuesta = await fetch(url);
            if (!respuesta.ok) { throw new Error(`Error: ${respuesta.status}`); }   
            const datos = await respuesta.json();
          
            //Guardar tokens de paginacion, Nextpagetoken, PrevPageToken ...
            if(datos.nextPageToken) setPageNext(datos.nextPageToken);
            if(datos.prevPageToken) setPagePrev(datos.prevPageToken);

            //Obtención de la lista de post ...
            let posts      = datos.items;
            let portafolio = posts.filter( post => post.labels?.includes('portafolio')); //Filtro etiqueta portafolio
            setPostsPortafolio(portafolio);
           
            
        } catch (error) {
            console.error("Algo salió mal:", error);
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
             {
                (iconLoading == false && searchParams.get('post')) ?
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
                                postsPortafolio.map( (post) => {
                                    return <li id={post.id} key={post.id} onClick={(e)=>changeURLEntrada(e)}> { (post.title)?post.title : "-"} </li>
                                })
                            }
                        </ul>
                        : null }

                        <div className="paginacion-content">
                            <button onClick={()=>fetchGetPosts(pagePrev)}>Página Anterior</button>
                            <span>PAGINAS</span>
                            <button onClick={()=>fetchGetPosts(pageNext)}>Siguiente Página</button>
                        </div>
                </div>

                <div className="portafolio-main">
                      {
                        (postsPortafolio.length > 0)? 
                            <div key={ getPostObj().id } className="content-post">
                                <span>UPDATED:</span> {getPostObj().updated}
                                { (getPostObj().content)? parse(getPostObj().content) : null}
                            </div>
                        : null
                      }
                   
                </div>
           </div>
               : null
             }     
        </div>
    )
}
