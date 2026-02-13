import React from 'react'
import Image3DHoverEffect from '@/componentes/Image3DHoverEffect/Image3DHoverEffect'
import './content_section_description.css';

export default function Content_section_description({
    titulo, 
    descripcion,
    nombreEnlace,
    enlace,
    ancla,
    Image_Content_Description
    }){
    return(
        <div id={ancla} className="description">
            <h2 >{titulo}</h2>
            <div className="content-text">
                {
                    descripcion.map((texto,index) =>{
                        return <p key={index}>{texto}</p>
                    })
                }
                {console.log(Image_Content_Description )}
                {   
                    Image_Content_Description 
                    && Image_Content_Description.src 
                    && Image_Content_Description.Width 
                    && Image_Content_Description.Height
                    ?<Image3DHoverEffect src={Image_Content_Description.src} Width={Image_Content_Description.Width} Height={Image_Content_Description.Height}/>
                    :  null
                }
               
            </div>  
            <div>
                <a  className="enlace-entrar" href={enlace}> Detalles {nombreEnlace}</a>
            </div>   
        </div>
    )
}