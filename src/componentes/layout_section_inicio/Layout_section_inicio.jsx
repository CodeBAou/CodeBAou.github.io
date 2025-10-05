import React from 'react';
import './layout_section_inicio.css';

export default function Layout_section_inicio({children}){
    return(
        <article className="section_inicio">
            {children}
        </article>
    )
}