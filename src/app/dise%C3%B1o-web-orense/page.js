"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './diseñoweb.css';
import MuestraVerticalDwba from '@/componentes/muestra-vertical-dwba/MuestraVerticalDwba.jsx';
import ImageDwba from '@/componentes/Image-dwba/Image.jsx';
import Section_diseño_web_responsive from '@/componentes/section_diseño_web_responsive/Section_diseño_web_responsive';
import Section_diseño_web_apisGoogle from '@/componentes/section_diseño_web_apisGoogle/Section_diseño_web_apisGoogle';
import SectionTipos from '@/componentes/section_tipo_webs/SectionTipos';
import TextChild from '@/componentes/section_text_child/TextChild';
import Cubot from '@/componentes/cubot/Cubot';

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

                <h1 className="titlepage">Servicio de diseño web desde Ourense </h1>
               
                <h2 className="titlepage">Nuestros diseños webs están pensados para que te encuentren en Google, ofrecer la funcionalidad que quieras y convertir usuarios en clientes</h2>
                
            </section>   

            <section className="portafolio">
                    <h3>Algunos diseños webs</h3>
                    <div className="webs">
                        <MuestraVerticalDwba title="Tienda" link="https://charcuteriauria.es/" src="/image/portafolio/miniatura_web_uriahnos.webp" Width="200px"/>
                        <MuestraVerticalDwba title="Sitio" link="https://habitarqestudio.com/" src="/image/portafolio/miniatura_web_habitarq.webp" Width="200px"/>
                    </div>

                    <div className="enlaces">
                        <p> En nuestro portafolio mostramos notas de desarrollador y comentamos proyectos, funcionalidades y soluciones que te pueden interesar para incluir en tu página web. </p>
                        <Link href="/portafolio" target="_blank"> Ver Portafolio </Link>
                    </div>
            </section>

            <section className="maxheight">
                <SectionTipos/>
            </section>

            <section className="maxheight">
                <TextChild title="CSS Avanzado profesional" parrafo="Ofrecemos estilos y animaciones avanzados y no dependemos de temas o frameworks. Podemos construir lo que quieras y como lo quieras, sin limitaciones y ofreciendo nuestra opinión para ayudarte a decidirte.">
                    <Cubot items={["DISEÑO","WORDPRESS","A MEDIDA", "SOLUCIONES"]}/>
                </TextChild>
            </section>

            <section className="maxheight">
                <TextChild title="UX/UI Y CALIDAD DE CONTENIDO" parrafo="EXPERIENCIA DE USUARIO Y DISEÑO DE INTERFAZ INTUITIVA">
                     <p>Trabajamos la calidad del contenido para que tu página transmita de forma óptima lo que quieras. Ofrecemos embudos de venta con técnicas para aumentar la probabilidad de que un usuario compre en tu sitio. Optimizamos el contenido para aumentar las impresiones y clics.
                     </p>
                </TextChild>
            </section>

            <section className="maxheight">
                <TextChild title="DISEÑO PENSANDO EN SEO" parrafo="Un diseño preparado para Google y los usuarios.">
                    <p>Diseño pensado en SEO para optimizar tu posición en los resultados de búsqueda y con la seguridad de que Google no te penalice por incumplir algunos de sus estándares SEO.</p>
                </TextChild>
            </section>

            <section className="maxheight">
                <Section_diseño_web_responsive/>
            </section>
            
            <section className="maxheight">
                <Section_diseño_web_apisGoogle/>
            </section>

            <section className="maxheight">
                <TextChild title="¿QUIERES UN DISEÑO WEB EN WORDPRESS?" parrafo="Un diseño web para wordpress.">
                     <p>Si necesitas una web autogestionable con CMS WordPress, podemos diseñar temas o webs completas, bloques Gutenberg para incluir apartados separados, bloques Gutenberg para integrar APIs de Google o bloques basados en animaciones CSS.</p>
                     <p>Cubrimos todo en WordPress, incluidos plugins para solucionar algo o añadir una funcionalidad a medida.</p>
                </TextChild>
            </section>

             <section className="maxheight">
                <TextChild title="¿QUIERES UN DISEÑO WEB A MEDIDA O WEBAPP?" parrafo="Un diseño basado en React.">
                     <p>Una web a medida basada en React o webApp, aplicación basada en web.</p>          
                </TextChild>
            </section>

            <section className="maxheight">
                <TextChild title="ALOJAMIENTO WEB" parrafo="Nos ocupamos del proceso completo.">
                     <p>Podemos ocuparnos de todo el proceso para que obtengas tu web, incluido el servidor para desplegar tu web y que esté disponible en internet. </p>
                </TextChild>
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