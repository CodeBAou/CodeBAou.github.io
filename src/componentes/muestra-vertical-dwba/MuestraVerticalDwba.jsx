import React from 'react';
import './muestra-vertical-dwba.css';
import Link from '@/componentes/Link/Link';

export default function MuestraVerticalDwba({title,link, src, alt, Width, Height}){
    return(
            <article className="portafolioLinkweb">
                <h3>{title}</h3>
                <br/>
                <img src={(src)?src:""} alt={(alt)? alt : ""} width={(Width)? Width : "" }/>
                <Link maxwidth="400px" texto="Visitar web" enlace={link} target="_blank"/>
            </article>    
    )
}