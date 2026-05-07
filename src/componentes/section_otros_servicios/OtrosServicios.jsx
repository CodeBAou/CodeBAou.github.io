import React from 'react'
import Link from 'next/link';
import './otrosservicios.css';

export default function OtrosServicios(){
    return(
        <div className="otrosServiciosContent">
                <article>
                    <h2>Contacto</h2>
                    <p>Si tienes alguna duda, contacta sin compromiso y pregúntanos.</p>
                    <p>Desde Ourense, colaboramos en proyectos de cualquier lugar de forma telemática.</p>
                    <Link href="/#contacto">CONTACTO</Link>
               </article>

               <article>
                    <h2>Otros servicios para tu página web</h2>
                    <p>Quizá no necesitas un diseño web, pero contamos con otros servicios para mejorarla y mantenerla.</p>
                    <Link href="/#servicio-de-diseño-web">VER SERVICIOS</Link>
               </article>
        </div>
    )
}