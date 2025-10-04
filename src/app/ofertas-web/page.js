'use client'
import React, {useState, useEffect} from 'react'


import './ofertas.css';

export default function Page(){

    return(
        <div className="ofertas-web-limitadas">

           <h1> OFERTAS PARA DESARROLLO WEB </h1>

           <img src="/image/OFERTA-LIMITADA-DESARROLLO-WEB-PRECIOS.webp" alt=""/>
           <ul>
                <li>1 año de permanencia o pago único.</li>
                <li>Facilidad de pago de forma mensual.</li>
                <li>Precios con descuentos de forma temporal.</li>
                <li>Servicio de SEO Basico incluido.</li>
                <li>Servicio de soporte incluido.</li>
           </ul>

           <div className="portafolio">
                <h2>Últimos Trabajos</h2>
               
                    <h3>Web tienda online de ejemplo</h3>
                    <a href="https://charcuteriauria.es/" className="linkweb" target="_blank" >Visitar Web</a>
               
                    <h3>Web corporativa online de ejemplo</h3>
                    <a href="https://outubro.es/" className="linkweb" target="_blank">Visitar Web</a>
               
           </div>

        
            <div className="page">
                    <h2>Tipos de web para esta oferta</h2>

                    <h3> Oferta para Web Corporativa</h3>
             
                    <p>Presenta tus servicios de forma básica en internet y permite que te encuentren.</p>
                    <p className="precio">desde 31€/mes</p>
                    
                    <h3> Oferta para Web Servicios</h3>
                   
                    <p>Ideal para tener un menu accesible desde QR o o que tus clientes puedan reservar desde tu sitio web.</p>
                    <p className="precio">desde 79€/mes</p>

                    <h3> Oferta para Tienda Online ecommerce</h3>
                  
                    <p>Tener tu propia tienda online y gestionar los productos, pagos y envios.</p>
                    <p className="precio">desde 123€ /mes</p>

                 
            </div>

            <div className="contacto-content">
                   <h2>Contacta</h2>
                    <p>Contacta y pregunta sin compromiso cualquier duda que tengas.</p>
                    <a href="https://dwba.es/#contacto" >Contactar</a>
            </div>
           
        </div>

    )
}