import React from 'react';
import './content-section-oferta.css';

export default function Content_section_oferta( {enlaceofertadisplay = true}){
   
        return(
            <section className="content-oferta">
               
                <div className="text-content">
                    <h2> Consigue tu web </h2>

                    <ul className="ulventajas">
                        <li>Más clientes</li>
                        <li>Ventas 24/7</li>
                        <li>Mayor visibilidad</li>
                    </ul>  
                   
                     <ul className="ultiposwebs">
                        <li>WEB CORPORATIVA</li>
                        <li>WEB SERVICIOS</li>
                        <li>WEB TIENDA ONLINE</li>
                    </ul>      

                      {
                        (enlaceofertadisplay == true) ?  <a className="link" href="/paginas-web-economicas-promo"> SABER MÁS</a> : null
                    }
                </div>

                <figure>
                    <img 
                        className="imagenoferta" 
                        src="/image/Dwba-esquema-fases-desarrollo-oferta.webp" 
                        alt="Las fases de la promoción son, reunión, desarrollo, conformidad y periodo de 1 año de servicio y facturación"
                        srcSet=" /image/Dwba-esquema-fases-desarrollo-oferta.webp 1200w,
                                 /image/Dwba-esquema-fases-desarrollo-oferta-480.webp 480w"
                        sizes="(max-width:765px) 480px, (min-width:765px) 1200px"
                        loading="lazy"
                    /> 
                    
                </figure>   

            </section>
    )
}