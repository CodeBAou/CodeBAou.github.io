"use client";
import React, {useState, useEffect} from 'react'

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
export default function Image({data}){
    return(
        <picture className={data.className}>
   
            <source 
                media={`(max-width: ${data.mobile.media}px)`}
                srcSet={data.mobile.src}
            />

             <source
                media={`(max-width: ${data.tablet.media}px)`}
                srcSet={data.tablet.src}
            />
        
            <img 
                src={data.src} 
                alt={data.alt} 
                loading={data.load} 
            />
        </picture>
    )
} 