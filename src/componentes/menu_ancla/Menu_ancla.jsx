import React from 'react';
import Link from 'next/link'
import './menuAncla.css';
import Data_servicos from '@/data/servicios.json';

export default function Menu_ancla(){
    return(
        <nav className="menu-lateral">
            <ul>
               {Data_servicos.map((servicio,index)=>{

                    return <li key={`servicio-menu-${index}`}>
                                <Link href={`#${servicio.ancla}`}>{servicio.name.toUpperCase()}</Link>
                            </li>
               })}
            </ul>
        </nav>
    )
}