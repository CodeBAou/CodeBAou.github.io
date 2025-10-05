import React from 'react';
import './content-section-oferta.css';

export default function Content_section_oferta(){
    return(
            <article className="content-oferta">
               
                <img className="Imagenoferta" src="/image/OFERTA-LIMITADA-DESARROLLO-WEB-PRECIOS.webp" alt="Ofertas disponibles"/>     

                <h2>Ofertas limitadas, consigue tu página web!</h2>

                <p>Estos paquetes permiten obtener tu web con precios rebajos y servicios incluidos como mantenimiento y seo básico. Estarán disponibles temporalmente.
                </p> 

                <ul>
                    <li>WEB CORPORATIVA</li>
                    <li>WEB SERVICIOS</li>
                    <li>WEB ECOMMERCE</li>
                </ul>                     
                                    
               <a className="link" href="https://dwba.es/ofertas-web"> VER OFERTA</a>
            </article>
    )
}