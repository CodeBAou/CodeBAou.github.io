import React from 'react'
import Link from 'next/link'
import './menu.css';

export default function Menu(){
    return(
        <nav className="menu"> 
            <ul>
                <li><Link href="/">DWBA</Link></li>
                <li><Link href="/servicios">SERVICIOS</Link></li>
                <li><Link href="/apps">APPS</Link></li>
                <li><Link href="/revista">REVISTA</Link></li>
                <li><Link href="/#contacto">CONTACTO</Link></li>
            </ul>
        </nav>
    )
}