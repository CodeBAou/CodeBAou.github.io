import React from 'react';
import './muestra-vertical-dwba.css';
import Link from '@/componentes/Link/Link';

export default function MuestraVerticalDwba({title,link, src, alt, Width, Height}){
    return(
            <article className="portafolioLinkweb">
                <a  className="link"  target="_blank" href={link}> 
                    <img src={(src)?src:""} alt={(alt)? alt : ""} width={(Width)? Width : "" }/>
                </a>
            </article>    
    )
}