import React from 'react';
import './muestra-vertical-dwba.css';

export default function MuestraVerticalDwba({title,link, src, alt, Width, Height}){
    return(
            <article className="portafolioLinkweb">
                <h3>{title}</h3>
                <br/>
                <img src={(src)?src:""} alt={(alt)? alt : ""} width={(Width)? Width : "" }/>
                <a href={link} className="linkweb" target="_blank" >visitar</a>  
            </article>    
    )
}