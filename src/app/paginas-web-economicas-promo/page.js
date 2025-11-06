"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './promocion.css';
import Content_section_oferta from '@/componentes/content_section_oferta/Content-section-oferta';
import Article_portafolio_linkweb from '@/componentes/article_portafolio_linkweb/Article_portafolio_linkweb';

export default function Page(){

    return(
        <div className="ofertas-web-limitadas">
            <h1>Oferta para una página web económica</h1>
            <section className="promocion-content">
              <h2>Consigue una pagina web económica y llega a más personas.</h2>
              <article>
                    <h3>Página web económica corporativa</h3>
                    <figure>
                        <img 
                            src="/image/Ejemplos_de_web_corporativas_de_DWBA.webp" 
                            alt="Dos capturas de la página de inicio de una web corporativa de un despacho de abogados y otra de una empresa de marketing digital." 
                            loading="lazy"/>
                        <figcaption>
                            Capturas de dos páginas corporativas como ejemplo para esta promoción.
                        </figcaption>
                    </figure>
                 
                    <p>Esta página web económica puedes mostrar tu empresa y presentarte a los usuarios que buscan esos servicios a través de internet.</p>
                
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
              </article>

              <article>
                    <h3>Página web económica con servicio</h3>
                    <figure>
                        <img src="/image/Ejemplos_de_web_servicios_de_DWBA.webp" alt="Una captura de la página con un servicio de reservas online para un hotel." loading="lazy"/> 
                        <figcaption>
                            Una captura de una página de inicio de una web con la funcionalidad de reservas online mediate calendario.
                        </figcaption> 
                    </figure>
                    
                    <p>Este diseño de página web económica te permite tener de forma online un servicio para ofrecer a usuarios en internet, como reservar una habitación o un menú online.</p>          
                
                    <ul>
                        <li>Diseño web WordPress.</li>
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
              </article>

              <article>
                    <h3>Tienda online ecommerce económica</h3>

                    <figure>
                        <img src="/image/Ejemplos_de_web_tienda_online_de_DWBA.webp" alt="Una captura de la página con un servicio de reservas online para un hotel." loading="lazy"/> 
                        <figcaption>
                            Captura de la página de productos de una tienda online para una charcutería de Madrid.
                        </figcaption>
                    </figure>
                    
                    <p>Esta promoción te permite mostrar quién eres y qué ofreces y contar con un sistema completo para vender en internet con mantenimiento web y seo.</p>
                    
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

              </article>

            </section>

           <section className="portafolio">
                <h2>Últimas páginas webs creadas</h2>        
                <div>
                    <Article_portafolio_linkweb title="Tienda Online Charcutería" link="https://charcuteriauria.es/"/>
                    <Article_portafolio_linkweb title="Marketing digital pagina web minimalista" link="https://outubro.es/"/>
                </div>
           </section>

           <section className="detalles-oferta">
                <h2>Etapas diseño de pagina web económica</h2>
                <div>
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
                    <div>
                        <p>Esta oferta de diseño web económica va dirigida al pequeño negocio con menos de 4 empleados y será limitada, estará disponible de forma temporal.</p>
                        <p>Para disfrutar de un desarrollo web WordPress, simplemente contacta y pregunta sobre el, si te decides a crear una web, estaremos en contacto para el contenido y diseño.</p>
                        <p>Las etapas del servicio son las que se indican en la imagen, la facturación no empieza hasta que resives la web y lo comuniques.
                            Después, firmaremos el documento de conformidad y empezará el servicio, hosting, indexación en los motores de búsqueda, mantenimiento web y seo, con el precio indicado al principio de esta página.
                        </p>
                        <p>Revisaremos la web de forma mensual, pero tienes soporte y si detectas una incidencia nos llamas para que las resolvamos</p>
                        <p>Aplicaremos SEO básico de forma mensual, para que la web vaya creciendo y Google la vaya evaluando.</p>
                    </div>
                </div>
           </section>

           <section className="beneficios">
                <h2>Beneficios al tener una página web, bien cuidada, actualizada y optimizada.</h2>
                <article>
                    <h3>Presencia profesional y credibilidad</h3>
                    <p>Una página web es la carta de presentación de tu organización, transmite confianza, seriedad y mejora tu imagen frente a clientes o empresas.</p>
                </article>
                <article>
                    <h3>Estás visible las 24 horas</h3>
                    <p>Con una web, tu negocio está disponible todo el día, todos los días. Así es posible mostrarte a los usuarios que buscan tus servicio en cualquier momento.</p>
                </article>
                 <article>
                    <h3>Generas nuevos clientes y ventas</h3>
                    <p>Una web bien diseñada capta contacto, reservas o ventas automáticas. Es como tener un comercial activo las 24h.</p>
                </article>
                 <article>
                    <h3>Amplía la visibilidad en Google</h3>
                    <p>Con una página web actualizada y bien optimizada aumentas las apariciones en búsquedas orgánicas en los buscadores.</p>
                    <p>Con más tráfico, se aumentan las posibilidades de venta.</p>
                </article>
                 <article>
                    <h3>Más control de tu marca</h3>
                    <p>No dependes de redes sociales o plataformas externas. Tienes todo el control sobre como quieres mostrar tu marca al mundo.</p>
                    <p>Decides el contenido, diseño y experiencia de usuario. No dependes de como funcionan los algoritmos de las redes sociales.</p>
                    <p>Se complementa genial con tu trabajo en las redes sociales. Además, puedes añadir funcionalidades que no te ofrecen otras plataformas y aprovechar mejor el tráfico.</p>
                </article>
                <article>
                    <h3>Vender tú mismo tus productos</h3>
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

               <article>
                    <h2>Contacto</h2>
                    <p>Esta promoción está pensada para ayudar al pequeño negocio a beneficiarse de internet con una web económica.</p>
                    <p>Enviamos las condiciones del servicio sin compromiso por email.</p>
                    <p>¿Listo para crecer en internet?</p>
                    <p>Creamos tu página web, hablemos de tu proyecto.</p>    
                    <Link href="/#contacto">CONTACTO</Link>
               </article>

               <article>
                    <h2>Mas servicios</h2>
                    <p>Quizás ya tengas una web y no estés pensando en comprar una nueva, contamos con otros servicios de mantenimiento web, diseño web y posicionamiento en buscadores con seo.</p>
                    <Link href="/#servicio-de-diseño-web">VER SERVICIOS</Link>
               </article>

            </section>

         
        </div>

    )
}