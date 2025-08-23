import React from 'react';
import Link from 'next/link'
import './menuAncla.css';

export default function Menu_ancla(){
    return(
        <nav className="menu-lateral">
            <ul>
                <li>
                   <Link href="/#soporte"> SOPORTE</Link>
                </li>
                <li>
                    <Link href="/#desarrollo">DESARROLLO</Link>
                </li>   
                <li>
                    <Link href="/#marketing-digital">MARKETING DIGITAL</Link>
                </li>
                <li>
                    <Link href="/#contenido">CONTENIDO</Link>
                </li>   
                <li>
                    <Link href="/#diseño">DISEÑO</Link>
                </li>
                <li>
                     <Link href="/#seo">SEO</Link>
                </li>
                  
            </ul>
        </nav>
    )
}