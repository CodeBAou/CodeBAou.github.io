"use client";
import React from 'react'
import './diseñoweb.css';
import HaderPageUnica from '@/componentes/header-page-unica/HeaderPageUnica';
import SectionTipos from '@/componentes/section_tipo_webs/SectionTipos';
import Carrupser_miniaturas_muestras_diseño_web from '@/componentes/carrupsel_miniaturas_muestras_diseño_web/Carrupser_miniaturas_muestras_diseño';
import TextChild from '@/componentes/section_text_child/TextChild';
import Cubot from '@/componentes/cubot/Cubot';
import Section_diseño_web_responsive from '@/componentes/section_diseño_web_responsive/Section_diseño_web_responsive';
import Section_diseño_web_apisGoogle from '@/componentes/section_diseño_web_apisGoogle/Section_diseño_web_apisGoogle';
import Link from '@/componentes/Link/Link';
import OtrosServicios from '@/componentes/section_otros_servicios/OtrosServicios';

export default function Page(){

    return(

        <div className="diseñoweb-page">
        
            <HaderPageUnica 
                imageSrc="/image/diseño-web/Imagen_apartado_diseño.webp" 
                imageSrcTablet="/image/diseño-web/Imagen_apartado_diseño_1200.webp" 
                imageSrcMobile="/image/diseño-web/Imagen_apartado_diseño_765.webp" 
                alt="Captura de la interfaz de figma con un diseño web de landing page dwba."
                title="Diseño y prototipado web"
                subtitle="Convertimos una idea en un diseño web que cumpla con el objetivo deseado."
            />

            <section className="maxheight">
                <SectionTipos/>
                <Carrupser_miniaturas_muestras_diseño_web/>
            </section>

            <section className="maxheight">
                <TextChild title="CSS Avanzado profesional" parrafo="Ofrecemos estilos y animaciones avanzados y no dependemos de temas o frameworks. Podemos construir lo que quieras y como lo quieras, sin limitaciones y ofreciendo nuestra opinión para ayudarte a decidirte.">
                    <Cubot items={["DISEÑO","WORDPRESS","A MEDIDA", "SOLUCIONES"]}/>
                </TextChild>
            </section>

            <section className="maxheight">
                <TextChild title="UX/UI Y CALIDAD DE CONTENIDO" parrafo="EXPERIENCIA DE USUARIO Y DISEÑO DE INTERFAZ INTUITIVA">
                     <p>Trabajamos la calidad del contenido para que tu página transmita de forma óptima lo que quieras. Ofrecemos embudos de venta con técnicas para aumentar la probabilidad de que un usuario compre en tu sitio. Optimizamos el contenido para aumentar las impresiones y clics.</p>
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
                <TextChild title="¿QUIERES UN DISEÑO WEB EN WORDPRESS?" parrafo="Desarrollamos la web con WordPress.">
                     <p>Una vez tengamos el diseño web pasamos a desarrollar la web real autogestionable en WordPress.</p>
                     <p>Maquetizacion, diseño, temas de terceros y propios y funcionalidades de terceros y propias.</p>
                     <p>Wordpress Avanzado</p>
                     <Link maxwidth="400px" texto="Más detalles WordPress" enlace="/desarrollo-web-wordpress-ourense"/>
                </TextChild>
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