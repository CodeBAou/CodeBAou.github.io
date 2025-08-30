import React from 'react'
import './content_section_description.css'

export default function Content_section_description({titulo, descripcion,nombreEnlace,enlace,ancla}){
    return(
        <div id={ancla} className="description">
            <h2 >{titulo}</h2>
            <div className="content-text">
                {
                    descripcion.map((texto,index) =>{
                        return <p key={index}>{texto}</p>
                    })
                }
            </div>  
            <div>
                <a  className="enlace-entrar" href={enlace}> Detalles {nombreEnlace}</a>
            </div>   
        </div>
    )
}