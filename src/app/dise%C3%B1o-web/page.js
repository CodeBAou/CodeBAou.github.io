"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './diseñoweb.css';
import Content_section_oferta from '@/componentes/callAction_diseño_web/Content-section-oferta';
import MuestraVerticalDwba from '@/componentes/muestra-vertical-dwba/MuestraVerticalDwba.jsx';
import Cubot from '@/componentes/cubot/Cubot';
import ImageDwba from '@/componentes/Image-dwba/Image.jsx';
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

                <h1 className="titlepage">Diseño web </h1>
                <h2 className="titlepage"> Desde Ourense, creamos un diseño web basado en tu modelo de negocio.</h2>
            
                <div className="tiposWebs">

                    <Cubot items={["Sitio Web","Tienda Online","Servicio Web", "WordPress"]}/>

                    <div>
                        <ul>
                            <li>Web 1 página</li>
                            <li>Web corporativa</li>
                            <li>Tienda Online</li>
                            <li>Web servicios</li>
                            <li>Aplicacion web - WEBAPP</li>
                            <li>a medida</li>
                        </ul>
                    </div>
                </div>

                 <div className="descripcion-tipos-web">
                        
                        <div>
                             <h3>Tipos de página web</h3>
                             <p> Diseño web respectando la identidad de tu marca, diseñamos una web profesional que cumple con los estádares de la W3C, Google y UI/UX.</p>
                        </div>
                    
                        <div>
                            <h4>Diseño web de 1 página</h4>
                            <p>Una web de una sola página como complemento a tu perfil de empresa en Google. Esta web es más económica, sirve para complementar tu perfil de empresa en Google mediante enlace.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño web corporativa</h4>
                            <p>Una web completa para generar autoridad con un blog para generar contenido útil para SEO y que puede funcionar como portafolio digital.</p>
                        </div>
                        
                        <div>
                            <h4>Diseño web ecommerce</h4>
                            <p>Un sistema que te permite vender por internet pero que a veces funciona como un simple catálogo para tus clientes habituales.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño web servicios</h4>
                            <p>Una web con un sistema que ofrece un servicio determinado, por ejemplo, un sistema para reservar online.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño de aplicación web</h4> 
                            <p>Como una aplicación de escritorio o movil, pero servida como web.</p>
                        </div>
                       
                        <div>
                            <h4>Diseño a medida</h4>
                            <p>Solucciones muy específicas, incluyendo solucciones con IA implementada.</p>
                        </div>  
                </div>

               
            </section>   

            <section className="tipos-tecnologias-content">

                <h3>Tecnologías que podemos emplear en el diseño de tu web</h3>
                <p>A la hora de crear un proyecto podemos usar dos tecnologías diferentes, CMS WordPress y React, cada una tiene una serie de ventajas y desventajas a tener en cuenta.</p>

                <div className="wordpress-react-content">

                    <div className="wordpress">

                        <h4>Desarrollo Web con WordPress: Flexibilidad y Autogestión</h4>

                        <div className="ventajas">
                            <p>Ventajas</p>
                            <ul>
                                <li>WordPress ofrece ventajas tanto para el desarrollador como para el cliente, ya que evita tener que escribir código desde cero y facilita la autogestión.</li>
                                <li>Obtener una web en WordPress suele ser más económico, tanto en el desarrollo como en el mantenimiento, gracias a un ecosistema de plugins y bloques 
                                    reutilizables que se pueden implementar desde el repositorio oficial.</li>
                                <li>Además, requiere una dificultad técnica menor, lo que facilita encontrar profesionales especializados en este CMS.</li>
                            </ul>
                        </div>

                        <div className="desventajas">
                            <p>Desventajas</p>
                            <ul>
                                <li>WordPress es un ecosistema que permite la autogestión y la instalación de funcionalidades que facilitan la implementación; sin embargo, esto puede hacer que la 
                                    web sea muy pesada y el precio a pagar sea la velocidad de carga, algo que Google tiene muy en cuenta para el posicionamiento. </li>
                                <li>Aunque esto no es culpa de WordPress y no todos realizan esta mala práctica, a menudo se utiliza para vender las famosas webs “Low Cost”. Son sitios muy económicos
                                     que consisten en instalar una plantilla que no respeta tu marca en 5 minutos. El resultado es una web que nadie visita y que Google evalúa como de baja calidad y 
                                     contenido pobre, decidiendo no mostrarla.</li>
                                <li>Muchas funcionalidades avanzadas que ofrece WordPress son desarrollos ya hechos que te hacen depender de una licencia.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="react">

                        <h4>Desarrollo a Medida con React: Velocidad y Escalabilidad</h4>

                        <div className="ventajas">

                            <p>Ventajas</p>

                            <ul>
                                <li>Son webs construidas con código; esto hace que el sitio solo cargue lo necesario para funcionar, obteniendo una web ultrarrápida.</li>
                                <li>El límite del desarrollo lo pone la capacidad del desarrollador, no un ecosistema como WordPress. Además, desarrollamos patrones de 
                                    diseño que permiten abaratar costes sin sacrificar la calidad.</li>
                                <li>Un desarrollo a medida se adapta a tu estructura empresarial; no te adaptas tú al sistema. Esto ahorra costes y tiempo, además, 
                                    garantiza que la web funcionará exactamente como tú quieres.</li>
                                <li>A veces, lo que ahorras al adquirir una web lo acabas gastando de forma periódica en licencias a terceros (plugins licencia). 
                                    Con un desarrollo a medida, solo tienes el coste de mantenimiento necesario para estar al día y garantizar la seguridad.</li>
                            </ul>
                        </div>

                        <div className="desventajas">

                            <p>Desventajas</p>

                            <ul>
                                <li>Estas web se contruyen a medida según las necesidades específicas del proyecto, esto hace que el desarrollo lleve más tiempo, se necesita diseño y desarrollo avanzado, 
                                    esto eleva el coste.</li>
                                <li>No todos ofrecen soporte para este tipo de proyectos, se Requiere especialización para porder dar soporte a un precio Razonable.</li>
                            </ul>

                        </div>

                    </div>

                </div>
            
            </section>

           <section className="portafolio">

                <h2>Últimos diseños Web WordPress </h2>    
                    
                <div>
                    <MuestraVerticalDwba title="Tienda" link="https://charcuteriauria.es/" src="/image/portafolio/miniatura_web_uriahnos.webp" Width="200px"/>
                    <MuestraVerticalDwba title="Sitio" link="https://habitarqestudio.com/" src="/image/portafolio/miniatura_web_habitarq.webp" Width="200px"/>
                </div>
                <div>
                    <Link href="/portafolio">Ver Portafolio</Link>
                </div>
           </section>
     
           <section className="detalles-oferta">

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
                        <p><b>Estrategia y Requerimientos:</b> Trabajamos de forma telématica ofreciendo reuniones online para entender el proyecto.</p>
                        <p><b>Prototipado y Diseño:</b> Una vez tenemos los requerimientos empezamos la etapa de desarrollo, prototipo y diseño, creando una idea visual para revisar antes de producción.</p>
                        <p><b>Desarrollo y Producción:</b> Cuando estamos de acuerdo con el diseño, empezamos la producción.</p>
                        <p><b>Revisión y Control de Calidad:</b> Acordamos una reunión con la web y la revisamos, asegurando que todo está bien cumpliendo lo acordado.</p>
                        <p><b>Entrega y Soporte:</b> Una vez nos des tú conformidad, se factura mensualmente o puntualmente dependiendo del servicio y lo acordado.</p>  
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
                    <h3>Diseño Web Ourense</h3>
                    <p>Pregunta cualquier duda.</p>
                    <p>Podemos trabajar a partir de un presupuesto.</p>
                    <Link href="/#contacto">CONTACTO</Link>
               </article>

               <article>
                    <h2>Mas servicios como complemento a tu página web.</h2>
                    <p>Quizás ya tengas una web y no estés pensando en comprar una nueva, contamos con otros servicios de mantenimiento web, diseño web y posicionamiento en buscadores con seo.</p>
                    <Link href="/#servicio-de-diseño-web">VER SERVICIOS</Link>
               </article>

            </section>

         
        </div>

    )
}