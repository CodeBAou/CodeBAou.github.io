"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './diseñoweb.css';
import Content_section_oferta from '@/componentes/callAction_diseño_web/CallActionConsigueWeb';
import MuestraVerticalDwba from '@/componentes/muestra-vertical-dwba/MuestraVerticalDwba.jsx';
import Cubot from '@/componentes/cubot/Cubot';
import ImageDwba from '@/componentes/Image-dwba/Image.jsx';
import Section_diseño_web_responsive from '@/componentes/section_diseño_web_responsive/Section_diseño_web_responsive';
import Section_diseño_web_apisGoogle from '@/componentes/section_diseño_web_apisGoogle/Section_diseño_web_apisGoogle';

export default function Page(){

    return(

        <div className="diseñoweb-page">
        
            <section className="diseñoweb-content">

                <ImageDwba data={{
                    mobile : {
                        media:765,
                        src:"/image/diseño-web/Imagen_apartado_diseño_765.webp"
                    },
                    tablet : {
                        media:1200,
                        src:"/image/diseño-web/Imagen_apartado_diseño_1200.webp",
                    },
                    src:"/image/diseño-web/Imagen_apartado_diseño.webp",
                    className:"portada-diseño-web",
                    alt:"La interfaz para el diseño de páginas web, captura durante el diseño web de una página para una bodega.",
                    load:"eager"
                }}/>

                <h1 className="titlepage">Diseño Web en Ourense: Páginas Web y Soluciones </h1>
                <h2 className="titlepage">Es diseño web, creación de contenido y optimización para el correcto posicionamiento.</h2>
            
                <div className="tiposWebs">

                    <Cubot items={["Sitio Web","Tienda Online","Servicio Web", "WordPress"]}/>

                    <div>
                        <figure>
                            <img src="/image/diseño-web/screenshop-diseño-web-y-logo-dwba.webp" alt="Un screenshot de un diseño web en miniatura junto al logo de dwba." />
                        </figure>
                    </div>
                </div>

                 <div className="descripcion-tipos-web">
                        
                        <div>
                             <h3>Tipos de página web</h3>
                             <p> Diseño web respetando la identidad de tu marca, diseñamos una web profesional que cumple con los estándares de la W3C, Google y UI/UX.</p>
                        </div>
                    
                        <div>
                            <h4>Diseño web de 1 página</h4>
                            <p>Una web de una sola página como complemento a tu perfil de empresa en Google. Hecha para estar presente en internet a bajo coste.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño web corporativo</h4>
                            <p>Una web corporativa, muestras tu empresa de forma profesional, te vendes y cuentas con un blog para mostrar contenido útil a tus clientes.</p>
                        </div>
                        
                        <div>
                            <h4>Diseño web ecommerce</h4>
                            <p>Una tienda online con todas las funcionalidades necesarias para vender y con la posibilidad de solucionar problemas desarrollando funcionalidades a medida. </p>
                        </div>
                       
                        <div>
                            <h4>Diseño web servicios</h4>
                            <p>Una web para ofrecer un servicio o automatizar procesos como reservas online entre otros.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño de aplicaciones web</h4> 
                            <p>Como una aplicación de escritorio o móvil, accesible a través del navegador.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño a medida</h4>
                            <p>Soluciones muy específicas según tus necesidades, incluyendo soluciones con IA implementada.</p>
                        </div>  
                </div>

               
            </section>   

            <section>
                <Section_diseño_web_responsive/>
            </section>
            
            <section>
                <Section_diseño_web_apisGoogle/>
            </section>

            <section className="tipos-tecnologias-content">

                <h3>No dependemos de una sola tecnología: buscamos el stack más adecuado para el proyecto y para ti</h3>
                <p>Selecionamos las herramientas que mejor cubran las necesidades específicas de cada desarrollo:</p>
                
                <div className="esquema-tecnologias">
                    <div>
                        <div className="point"></div>
                    </div>
                    <div>
                        <div>
                            <div className="linea"></div>
                        </div>
                        <div>
                            <div className="linea"></div>
                        </div>
                    </div>
                    <div className="icons-tecnologias">
                        <div>
                            <img 
                                width="60px;"
                                className="imagenoferta" 
                                src="/icon/wordpress.svg" 
                                alt="Logo de wordpress"
                                loading="lazy"
                            />    
                        </div>
                        <div>
                            <img 
                                width="60px;"
                                className="imagenoferta" 
                                src="/icon/react.svg" 
                                alt="Logo de React"
                                loading="lazy"
                            />   
                        </div>
                    </div>
                </div>
            
            </section>
     
           <section className="proceso">

                <h2>Proceso: De la idea a la web final</h2>

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
                        <p><b className="definicion-clave">Estrategia y Requerimientos:</b> Trabajamos de forma telemática ofreciendo reuniones online para entender el proyecto.</p>
                        <p><b className="definicion-clave">Prototipado y Diseño:</b> Una vez tenemos los requerimientos, empezamos la etapa de desarrollo, prototipo y diseño, creando una idea visual para revisar antes de producción.</p>
                        <p><b className="definicion-clave">Desarrollo y Producción:</b> Cuando estamos de acuerdo con el diseño, empezamos la producción.</p>
                        <p><b className="definicion-clave">Revisión y Control de Calidad:</b> Acordamos una reunión para ver la web y la revisamos, asegurando que todo está bien y cumple lo acordado.</p>
                        <p><b className="definicion-clave">Entrega y Soporte:</b> Una vez nos des tu conformidad, se factura mensual o puntualmente, dependiendo del servicio y lo acordado.</p> 
                    </div>
                    
                </div>
           </section>

            <section className="portafolio">

                <h2>Últimos diseños web en WordPress</h2>  
                    
                <div>
                    <MuestraVerticalDwba title="Tienda" link="https://charcuteriauria.es/" src="/image/portafolio/miniatura_web_uriahnos.webp" Width="200px"/>
                    <MuestraVerticalDwba title="Sitio" link="https://habitarqestudio.com/" src="/image/portafolio/miniatura_web_habitarq.webp" Width="200px"/>
                </div>
                <div>
                    <Link href="/portafolio" target="_blank"> Ver Portafolio </Link>
                </div>
            </section>

           <section className="beneficios">
                <h2>Beneficios al tener una página web bien cuidada actualizada y optimizada.</h2>
                <article>
                    <h3>Presencia profesional y credibilidad</h3>
                    <p>Una página web es la carta de presentación de tu organización, transmite confianza, seriedad y mejora tu imagen frente a clientes o empresas.</p>
                </article>
                <article>
                    <h3>Estás visible las 24 horas</h3>
                    <p>Con una web, tu negocio está disponible todo el día, todos los días. Así es posible mostrarte a los usuarios que buscan tus servicios en cualquier momento.</p>
                </article>
                 <article>
                    <h3>Generas nuevos clientes y ventas</h3>
                    <p>Una web bien diseñada capta contactos, reservas o ventas automáticas. Es como tener un comercial activo las 24h.</p>
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
                    <p>Si tienes alguna duda, contacta sin compromiso y pregúntanos.</p>
                    <p>Desde Ourense, colaboramos en proyectos de cualquier lugar de forma telemática.</p>
                    <Link href="/#contacto">CONTACTO</Link>
               </article>

               <article>
                    <h2>Otros servicios para tu página web</h2>
                    <p>Quizá no necesitas un diseño web, pero contamos con otros servicios para mejorarla y mantenerla.</p>
                    <Link href="/#servicio-de-diseño-web">VER SERVICIOS</Link>
               </article>

            </section>
        </div>

    )
}