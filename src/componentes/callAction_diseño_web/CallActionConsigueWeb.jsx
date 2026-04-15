import React from 'react';
import './callAction-consigue-web.css';

export default function CallActionConsigueWeb( {enlaceofertadisplay = true}){
   
        return(
            <section className="content-CallAction-consigueweb">
               
                <div className="text-content">

                    <h2> DWBA | Soluciones Web </h2>
                    <img src="" alt="" />

                    <p>Servicios para impulsarte en Internet | <b>WordPress</b> | <b>React</b> </p>

                    <ul>
                        <li>Diseño Web</li>
                        <li>Wordpress Avanzado</li>
                        <li>Desarrollos a medida</li>
                        <li>Apps</li>
                        <li>Marketing, SEO, SEM</li>
                        <li>Solución de problemas</li>
                    </ul>
                      {
                        (enlaceofertadisplay == true) ?  <a className="link" href="/diseño-web-orense">SABER MÁS</a> : null
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