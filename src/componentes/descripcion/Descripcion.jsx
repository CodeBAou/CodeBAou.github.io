import React from 'react'
import './descripcion.css';

export default function SectionTextImage({title, children, imagen, alt}){

    return(
        <div className="sectionTextImage">
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <img src={imagen} alt={alt}/>
        </div>
    )
}