import React from 'react';
import "./Link.css";

export default function Link({texto,enlace}){
    return(
        <a  className="link" href={enlace}> {texto} </a>
    )
}