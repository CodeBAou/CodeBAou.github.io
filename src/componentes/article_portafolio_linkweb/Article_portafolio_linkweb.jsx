import React from 'react';
import './article_portafolio_linkweb.css';

export default function Article_portafolio_linkweb({title,link}){
    return(
            <article className="portafolioLinkweb">
                <h3>{title}</h3>
                <a href={link} className="linkweb" target="_blank" >ver tienda</a>  
            </article>    
    )
}