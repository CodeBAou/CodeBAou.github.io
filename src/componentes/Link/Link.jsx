import React from 'react';
import "./Link.css";

export default function Link({texto,enlace, maxwidth="auto", target="_self"}){
    return(
       <div className="link-content">
            <a  style={{maxWidth: maxwidth}} className="link"  target={target} href={enlace}> {texto} </a>
       </div>
    )
}