"use client";
import React, {useState, useEffect} from 'react'
import './promocion.css';
import Content_section_oferta from '@/componentes/content_section_oferta/Content-section-oferta';

export default function Page(){

    return(
        <div className="ofertas-web-limitadas">

            <img className="logo_dwba" src="/image/logo_DWBA_sin_fondo.webp" alt="Logo DWBA"/>

            <Content_section_oferta enlaceofertadisplay={false} />

            <section>
                <h2>Promoción para una página web corporativa</h2>
                <figure>
                    <img src="/image/Ejemplos_de_web_corporativas_de_DWBA.webp" alt="" loading="lazy"/>
                    <figcaption>
                        Capturas de dos páginas corporativas como ejemplo para esta promoción.
                    </figcaption>
                </figure>
                
                <p>La mayor parte del mercado busca a través de internet información sobre las empresas que existen en su zona para comparar y elegir, por eso es importante como mínimo tener una
                    presencia básica en internet.
                </p>
                <p>Esta promoción te permite mostrar quién eres y qué ofreces a usuarios que están buscando tus servicios a través de internet.</p>
               
                <ul>
                    <li>Diseño web WordPress.</li>
                    <li>Mantenimiento.</li>
                    <li>SEO, para posicionar tu web en las búsquedas de Google.</li>
                </ul>

                <ul className="gratis-content">
                    <li>DESARROLLO</li>
                    <li>+</li>
                    <li>SERVICIO SEO <span>GRATIS</span></li>
                    <li>+</li>
                    <li>SERVICIO DE SOPORTE <span>GRATIS</span></li>
                </ul>

                <p className="oferta_precio">Desde 31€/mes </p>
            </section>

            <section>
                <h2>Oferta para una página web de servicios</h2>
                <figure>
                    <img src="/image/Ejemplos_de_web_servicios_de_DWBA.webp" alt="" loading="lazy"/> 
                    <figcaption>
                        Una captura de una página de inicio de una web con la funcionalidad de reservas online mediate calendario.
                    </figcaption> 
                </figure>
                   
                <p>Esta promoción te permite mostrar quién eres y qué ofreces y contar con alguna funcionalidad avanzada como mostrar un menú online o un sistema de reservas, entre otros.</p>          
               
                <ul>
                    <li>Diseño web wordpress</li>.
                    <li>Desarrollo de una funcionalidad avanzada.</li>
                    <li>Mantenimiento.</li>
                    <li>SEO, aumento de la visibilidad en los buscadores.</li>
                </ul>

                <ul className="gratis-content">
                    <li>DESARROLLO</li>
                    <li>+</li>
                    <li>SERVICIO SEO <span>GRATIS</span></li>
                    <li>+</li>
                    <li>SERVICIO DE SOPORTE <span>GRATIS</span></li>
                </ul>

                 <p className="oferta_precio">Desde 79€/mes</p>
            </section>
         
             <section>

                <h2>Oferta para una tienda online ecommerce</h2>

                <figure>

                    <img src="/image/Ejemplos_de_web_tienda_online_de_DWBA.webp" alt="" loading="lazy"/>  
                    
                    <figcaption>
                        Captura de la página de productos de una tienda online para una charcutería de Madrid.
                    </figcaption>
                </figure>
                
                <p>Esta promoción te permite mostrar quién eres y qué ofreces y contar con un sistema completo para vender en internet.</p>
                
                <ul>
                    <li>Diseño Web WordPress</li>
                    <li>Sistema para gestión de productos, pagos y envíos.</li>
                    <li>Mantenimiento.</li>
                    <li>SEO, aumento de la visibilidad en los buscadores.</li>
                </ul>

                <ul className="gratis-content">
                    <li>DESARROLLO</li>
                    <li>+</li>
                    <li>SERVICIO SEO <span>GRATIS</span></li>
                    <li>+</li>
                    <li>SERVICIO DE SOPORTE <span>GRATIS</span></li>
                </ul>

                <p className="oferta_precio">Desde 123€/mes</p>

            </section>

           <section className="portafolio">
                <h2>Últimas páginas web creadas</h2>        
                <h3>Web tienda online de ejemplo</h3>
                <a href="https://charcuteriauria.es/" className="linkweb" target="_blank" >Visitar Web</a>     
                <h3>Web corporativa online de ejemplo</h3>
                <a href="https://outubro.es/" className="linkweb" target="_blank">Visitar Web</a>            
           </section>

           <section className="beneficios">
                <h2>Beneficios al tener una página web, bien cuidada, actualizada y optimizada para el posicionamiento web.</h2>
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
                <h2>Contacto</h2>
                <p>Esta promoción está pensada para ayudar al pequeño negocio a beneficiarse de internet con una menor inversión.</p>
                <p>Enviamos las condiciones del servicio sin compromiso por email.</p>
                <p>¿Listo para crecer en internet?</p>
                <p>Hablemos de tu proyecto.</p>
                <a href="https://dwba.es/#contacto" >Contactar</a>
            </section>

            <img className="logo_dwba" src="/image/logo_DWBA.png" alt="Logo DWBA"/>
        </div>

    )
}