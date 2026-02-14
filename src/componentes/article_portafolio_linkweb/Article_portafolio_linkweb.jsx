import React from 'react';
import './article_portafolio_linkweb.css';

export default function Article_portafolio_linkweb({title,link, src, alt, Width, Height}){
    return(
            <article className="portafolioLinkweb">
                <h3>{title}</h3>
                <br/>
                <img src={(src)?src:""} alt={(alt)? alt : ""} width={(Width)? Width : "" }/>
                <a href={link} className="linkweb" target="_blank" >visitar</a>  
            </article>    
    )
}