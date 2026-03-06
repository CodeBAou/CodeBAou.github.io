"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './diseñoweb.css';
import Content_section_oferta from '@/componentes/callAction_diseño_web/Content-section-oferta';
import Article_portafolio_linkweb from '@/componentes/article_portafolio_linkweb/Article_portafolio_linkweb';
import Cubot from '@/componentes/cubot/Cubot';

export default function Page(){

    return(

        <div className="ofertas-web-limitadas">
        
            <section className="diseñoweb-content">

                <h1>Diseño Web Ourense</h1>
                <h2>Páginas web a medida y optimizadas.</h2>
                <img className="portada-diseño-web" src="/image/servicios/Imagen_apartado_diseño.webp" alt="La interfaz para el diseño de páginas web, captura durante el diseño web de una página para una bodega."/>
               <p>
                    Una web es la herramienta principal para aumentar la <strong>visibilidad de tu negocio</strong> y mejorar la tasa de conversión. 
                    No basta con tener una web barata <strong>hecha</strong> a base de plantillas que ralentizan la carga. Para ser visible en internet 
                    es necesario trabajar el posicionamiento, entender qué busca tu audiencia y aparecer como la <strong>solución</strong> a su problema. 
                    </p>
                    <p>
                    En DWBA, el diseño respeta la identidad de tu marca, mientras que nuestro desarrollo técnico ofrece a Google una web de alta calidad, 
                    segura y profesional. Gracias al <strong>SEO técnico</strong>, se logra que tu empresa aparezca justo cuando el usuario más te necesita.
                    </p>
               
                <div className="tiposWebs">
                    <Cubot items={["Sitio Web","Tienda Online","Servicio Web", "WordPress"]}/>
                    <div>
                        <h3>Tipo de diseño web</h3>
                        <ul>
                            <li>Sitio Web</li>
                            <li>Tienda Online</li>
                            <li>Servicios Web</li>
                            <li>CMS Wordpress</li>
                            <li>Funcionalidad a medida</li>
                        </ul>
                    </div>
                </div>
            
            </section>   

           <section className="portafolio">
                <h2>Últimas páginas webs creadas</h2>        
                <div>
                    <Article_portafolio_linkweb title="Tienda" link="https://charcuteriauria.es/" src="/image/portafolio/miniatura_web_uriahnos.webp" Width="200px"/>
                    <Article_portafolio_linkweb title="Sitio" link="https://pezendesierto.org/" src="/image/portafolio/miniatura_web_maite_de_leon.webp" Width="200px"/>
                </div>
                <div>
                    <Link href="/portafolio">Ver Portafolio</Link>
                </div>
           </section>

           <section className="detalles-oferta">
                <h2>Nuestro proceso: De la idea a la web final</h2>
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
                        <p>Pregunta cualquier duda: -----&gt;    <a href="/#contacto">contacto</a></p>  
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
                    <p>Pregunta cualquier duda.</p>
                    <p>Podemos trabajar a partir de un presupuesto.</p>
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