'use client'
import React, {useState, useEffect} from 'react'

import './ofertas.css';

export default function Page(){

    return(
        <div className="ofertas-web-limitadas">
              <img className="logo_dwba" src="/image/logo_DWBA.png" alt="Logo DWBA"/>
            <section>
                <h1> OFERTA DISEÑO WEB </h1>
                <img src="/image/OFERTA-LIMITADA-DESARROLLO-WEB-PRECIOS.webp" alt="Resumen de la oferta, pagina web corporativa por 31 euros al mes, pagina web servicios por 79 euros y tienda online por 123 euros al mes. " loading="lazy"/>
                <p> Esta promoción de diseño web ofrece un paquete completo de desarrollo y servicios a un precio reducido, disponible por tiempo limitado.</p>
               
                <ul>
                    <li>El descuento de esta promoción será temporal.</li>
                    <li>Servicio de SEO Básico incluido.</li>
                    <li>Servicio de mantenimiento incluido.</li>
                    <li>Paga mensualmente si quieres.</li>
                    <li>1 año de permanencia (solo con el pago mensual)</li>
                </ul>
            </section>

            <section>
                <h2>Oferta para una página web corporativa</h2>
                <img src="/image/Ejemplos_de_web_corporativas_de_DWBA.webp" alt="" loading="lazy"/>
                <p>La mayor parte del mercado busca a través de internet información sobre las empresas que existen en su zona para comparar y elegir, por eso es importante como mínimo tener una
                    presencia básica en internet.
                </p>
                <p>Esta promoción te permite mostrar quién eres y qué ofreces a usuarios que están buscando tus servicios a través de internet.</p>
                <p className="oferta_precio">Desde 31€/mes </p>
                <ul>
                    <li>Desarrollo</li>
                    <li>Mantenimiento</li>
                    <li>SEO</li>
                </ul>
            </section>

            <section>
                <h2>Oferta para una página web de servicios</h2>
                <img src="/image/Ejemplos_de_web_servicios_de_DWBA.webp" alt="" loading="lazy"/>       
                <p>Esta promoción te permite mostrar quién eres y qué ofreces y contar con alguna funcionalidad avanzada como mostrar un menú online o un sistema de reservas, entre otros.</p>          
                <p className="oferta_precio">Desde 79€/mes</p>
                <ul>
                    <li>Desarrollo.</li>
                    <li>Desarrollo de una funcionalidad avanzada.</li>
                    <li>Mantenimiento.</li>
                    <li>SEO, aumento de la visibilidad en los buscadores.</li>
                </ul>
            </section>
         
             <section>
                <h2>Oferta para una tienda online ecommerce</h2>
                <img src="/image/Ejemplos_de_web_tienda_online_de_DWBA.webp" alt="" loading="lazy"/>  
                <p>Esta promoción te permite mostrar quién eres y qué ofreces y contar con un sistema completo para vender en internet.</p>
                <p className="oferta_precio">Desde 123€/mes</p>
                <ul>
                    <li>Desarrollo.</li>
                    <li>Sistema para gestión de productos, pagos y envíos.</li>
                    <li>Mantenimiento.</li>
                    <li>SEO, aumento de la visibilidad en los buscadores.</li>
                </ul>
            </section>

           <section className="portafolio">
                <h2>Ultimas páginas web creadas</h2>        
                <h3>Web tienda online de ejemplo</h3>
                <a href="https://charcuteriauria.es/" className="linkweb" target="_blank" >Visitar Web</a>     
                <h3>Web corporativa online de ejemplo</h3>
                <a href="https://outubro.es/" className="linkweb" target="_blank">Visitar Web</a>            
           </section>

           <section className="beneficios">
                <h2>Beneficios de tener una pagina web cuidada y actualizada</h2>
                <article>
                    <h3>Presencia profesional y credibilidad</h3>
                    <p>Una página web es la carta de presentación de tu organización, transmite confianza, seriedad y mejora tu imagen frente a clientes o empresas.</p>
                </article>
                <article>
                    <h3>Estás visible las 24 horas</h3>
                    <p>Tu negocio está disponible todo el día, todos los días. Así es posible mostrarte a los usuarios que buscan tus servicio en cualquier momento.</p>
                </article>
                 <article>
                    <h3>Generas nuevos clientes y ventas</h3>
                    <p>Una web bien diseñada capta contacto, reservas o ventas automáticas. Es como tener un comercial activo las 24h.</p>
                </article>
                 <article>
                    <h3>Amplias la visibilidad en Google</h3>
                    <p>Con una página web actualizada y bien optimizada aumentas las apariciones en búsquedas orgánicas en los buscadores.</p>
                    <p>Con más tráfico, se aumentan las posibilidades de venta.</p>
                </article>
                 <article>
                    <h3>Mas control de tu marca</h3>
                    <p>No dependes de redes sociales o plataformas externas. Tienes todo el control sobre como quieres mostrar tu marca al mundo.</p>
                    <p>Decides el contenido, diseño y experiencia de usuario. No dependes de como funcionan los algoritmos de las redes sociales.</p>
                    <p>Se complementa genial con tu trabajo en las redes sociales. Además puedes añadir funcionalidades que no te ofrecen otras plataformas y aprovechar mejor el tráfico.</p>
                </article>
                <article>
                    <h3>Vender tu mismo tus productos</h3>
                    <p>No dependes de las condiciones que te pongan otras plataformas si vendes desde tu propia página.</p>
                    <p>Pagos automatizados y autogestión con todo el control sobre el proceso.</p>
                </article>
                 <article>
                    <h3>Retorno de inversión</h3>
                    <p>Una web profesional bien optimizada se paga sola con los primeros clientes que genera.</p>
                    <p>Es una inversión, no un gasto.</p>
                </article>
                  <article>
                    <h3>Capacidad de análisis</h3>
                    <p>El tráfico, interacción del usuario y conversiones se pueden medir, esto hace que una empresa obtenga una información valiosa que ayuda en la toma de decisiones en el mercado.</p>
                    <p>Tener herramientas de análisis.</p>
                    <p>Con la información obtenida es más fácil mejorar estrategias para aumentar los resultados.</p>
                </article>
           </section>

            <section className="contacto-content">
                <h2>Contacta</h2>
                <p>Más visibilidad = Más clientes potenciales = Mayor conversión</p>
                <p>Contacta y pregunta sin compromiso cualquier duda que tengas.</p>
                <a href="https://dwba.es/#contacto" >Contactar</a>
            </section>

            <img className="logo_dwba" src="/image/logo_DWBA.png" alt="Logo DWBA"/>
        </div>

    )
}