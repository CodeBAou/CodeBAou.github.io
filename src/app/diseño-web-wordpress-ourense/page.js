"use client";
import React, {useEffect} from 'react'
import { useRouter } from 'next/navigation';
import './diseñowebwordpress.css';

/**
* JSON {media: Number (px responsive) ,  src: String }
* @param mobile JSON { media ,src } IMAGEN DIMENSION MOBILE
* @param tablet JSON{ media=(width <= 765px) , src } IMAGEN DIMENSION TABLET
* @param src string src  IMAGEN DIMENSION ESCRITORIO
* @param className  String    
* @param alt String 
* @param load  String para el atribito loading (lazy = carga cuando este cerca de salir en pantalla,  eager = carga inmediatamente, conviene al principio de la pagina)
* @returns
*/
export default function Page(){

    const router   = useRouter();
    const nuevaUrl = '/desarrollo-web-wordpress-ourense';

    useEffect(() => {
        // Se ejecuta automáticamente tan pronto como el componente se carga
        router.replace(nuevaUrl);
    }, [router]);

    return(
        <>
            <head>
                <meta http-equiv="refresh" content={`0;url=${nuevaUrl}`} />
                <link rel="canonical" href={`https://dwba.es${nuevaUrl}`} />
            </head>
       
            <div className="diseñowebwordpress-page">
                <p>Redirigiendo a la nueva página...</p>
            </div>
        </>
    )
}