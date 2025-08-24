import React from 'react'
import './content_section_description.css'

export default function Content_section_description({titulo, descripcion,nombreEnlace,enlace,ancla}){
    return(
        <div class="description">
            <h2 id={ancla}>{titulo}</h2>
            <div className="content-text">
                <p>{descripcion}</p>
            </div>  
            <div>
                <a href={enlace}> Detalles {nombreEnlace}</a>
            </div>   
        </div>
    )
}