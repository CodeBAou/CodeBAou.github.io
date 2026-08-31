"use client";
import React from 'react'

import './diseñoweb.css';
import MuestraVerticalDwba from '@/componentes/muestra-vertical-dwba/MuestraVerticalDwba.jsx';
import Section_diseño_web_responsive from '@/componentes/section_diseño_web_responsive/Section_diseño_web_responsive';
import Section_diseño_web_apisGoogle from '@/componentes/section_diseño_web_apisGoogle/Section_diseño_web_apisGoogle';
import SectionTipos from '@/componentes/section_tipo_webs/SectionTipos';
import TextChild from '@/componentes/section_text_child/TextChild';
import Cubot from '@/componentes/cubot/Cubot';
import HaderPageUnica from '@/componentes/header-page-unica/HeaderPageUnica';
import OtrosServicios from '@/componentes/section_otros_servicios/OtrosServicios';
import Link from '@/componentes/Link/Link';
export default function Page(){

    return(

        <div className="diseñoweb-page">
        
            <HaderPageUnica 
                imageSrc="/image/diseño-web/Imagen_apartado_diseño.webp" 
                imageSrcTablet="/image/diseño-web/Imagen_apartado_diseño_1200.webp" 
                imageSrcMobile="/image/diseño-web/Imagen_apartado_diseño_765.webp" 
                alt="La interfaz para el diseño de páginas web, captura durante el diseño web de una página para una bodega."
                title="Servicio de diseño web desde Ourense"
                subtitle="Nuestros diseños webs están pensados para que te encuentren en Google, ofrecer la funcionalidad que quieras y convertir usuarios en clientes"
            />

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
                     <Link maxwidth="400px" texto="Ver diseño web WordPress" enlace="/diseño-web-wordpress-ourense"/>
                </TextChild>
                  <div className="webs_muestras">
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para una tienda online" link="https://charcuteriauria.es/" src="/image/portafolio/miniatura_web_uriahnos.webp" Width="200px"/>
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para una web corporativa de arquitectos" link="https://habitarqestudio.com/" src="/image/portafolio/miniatura_web_habitarq.webp" Width="200px"/>
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para venta de entradas online" link="https://entradaselite.com/" src="/image/portafolio/miniatura_web_entradasElite.webp" Width="200px"/>
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para una agencia de modelos" link="#" src="/image/portafolio/miniatura_web_maite_de_leon.webp" Width="200px"/>
                 </div>
            </section>

             <section className="maxheight">
                <TextChild title="¿QUIERES UN DISEÑO WEB A MEDIDA O WEBAPP?" parrafo="Un diseño basado en React.">
                     <p>Diseño web o webapp a medida con React.</p>          
                </TextChild>
            </section>

            <section className="maxheight">
                <TextChild title="PORTAFOLIO">
                    <p>En el portafolio encontraras notas de desarrollo y soluciones aplicadas en algunos proyectos.</p>
                    <Link maxwidth="400px" texto="Ver portafolio" enlace="/portafolio"/>
                </TextChild>
            </section>

            <section className="contacto-content">       
                    <OtrosServicios />
            </section>
        </div>

    )
}