"use client";
import React from 'react'

import './diseñowebwordpress.css';
import HeaderPageUnica from '@/componentes/header-page-unica/HeaderPageUnica';
import TextChild from '@/componentes/section_text_child/TextChild';
import Image from '@/componentes/Image-dwba/Image';
import Cubot from '@/componentes/cubot/Cubot';
import OtrosServicios from '@/componentes/section_otros_servicios/OtrosServicios';
import Link from '@/componentes/Link/Link';
import MuestraVerticalDwba from '@/componentes/muestra-vertical-dwba/MuestraVerticalDwba.jsx';
/**
 * JSON {media: Number (px responsive) ,  src: String }
 * @param mobile JSON { media ,src } IMAGEN DIMENSION MOBILE
 * @param tablet JSON{ media=(width <= 765px) , src } IMAGEN DIMENSION TABLET
 * @param src string src  IMAGEN DIMENSION ESCRITORIO
 * @param className  String    
 * @param alt String 
 * @param load  String para el atribito loading (lazy = carga cuando este cerca de salir en pantalla,  eager = carga inmediatamente, conviene al principio de la pagina)
 * @returns
 */
export default function Page(){
    return(
        <div className="diseñowebwordpress-page">
            <HeaderPageUnica
                imageSrc="/image/diseño-web/Imagen_apartado_diseño.webp" 
                imageSrcTablet="/image/diseño-web/Imagen_apartado_diseño_1200.webp" 
                imageSrcMobile="/image/diseño-web/Imagen_apartado_diseño_765.webp" 
                alt="La interfaz para el diseño de páginas web, captura durante el diseño web de una página para una bodega."
                title="Desarrollo y maquetación web en WordPress"
                subtitle="Convertimos un diseño web en una pagina web real autogestionable."
            />

            <section className="maxheight">
                <TextChild
                    title="Desarrollo web en WordPress"
                    parrafo="Desarrollo de páginas web y funcionalidades para wordpress"
                >
                    <Cubot items={["Diseño","Contenido","Bloques", "Plugins"]}/>
                </TextChild>
                <h4>Algunos diseños wordpress...</h4>
                  <div className="row_muestras">
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para una tienda online" link="https://charcuteriauria.es/" src="/image/portafolio/miniatura_web_uriahnos.webp" Width="200px"/>
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para una web corporativa de arquitectos" link="https://habitarqestudio.com/" src="/image/portafolio/miniatura_web_habitarq.webp" Width="200px"/>
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para venta de entradas online" link="https://entradaselite.com/" src="/image/portafolio/miniatura_web_entradasElite.webp" Width="200px"/>
                    <MuestraVerticalDwba  alt="Diseño web en wordpress para una agencia de modelos" link="#" src="/image/portafolio/miniatura_web_maite_de_leon.webp" Width="200px"/>
                </div>
            </section>


            <section className="maxheight">
                 <TextChild
                    title="Web Corporativa WordPress"
                    parrafo="Una web para mostrar tu empresa, ofrecer información a posibles clientes y generar contactos."
                >
                    <Image data={{
                        mobile : {
                            media:765,
                            src:"/image/diseño-web/miniaturas-diseño-webs-arquitectos-y-agencia-actores.webp"
                        },
                        tablet : {
                            media:1200,
                            src:"/image/diseño-web/miniaturas-diseño-webs-arquitectos-y-agencia-actores.webp",
                        },
                        src:"/image/diseño-web/miniaturas-diseño-webs-arquitectos-y-agencia-actores.webp",
                        className:"image-section",
                        alt:"Se muestra dos capturas de la página de inicio, la primera corresponde a una web de arquitectura, la segunda a una web para una agencia de actores.",
                        load:"eager"
                    }}/>
                </TextChild>
            </section>

            <section className="maxheight">
                 <TextChild
                    title="Tienda Online para productos"
                    parrafo="Te diseñamos una página web pensada para vender, gestionar productos, envíos y pagos. Te acompañamos para brindarte soporte y gestionar los pedidos."
                >
                    <Image data={{
                        mobile : {
                            media:769,
                            src:"/image/diseño-web/Pagina-productos-tienda-con-filtro-y-rango-de-precio.webp"
                        },
                        tablet : {
                            media:1200,
                            src:"/image/diseño-web/Pagina-productos-tienda-con-filtro-y-rango-de-precio.webp",
                        },
                        src:"/image/diseño-web/Pagina-productos-tienda-con-filtro-y-rango-de-precio.webp",
                        className:"image-section",
                        alt:"Muestra la página de productos con un filtro a la izquierda para búsquedas por rango de precio y categorías.",
                        load:"eager"
                    }}/>
                </TextChild>
            </section>

            <section className="maxheight">
                 <TextChild
                    title="Tienda Online para eventos"
                    parrafo="Diseñamos tu web para gestionar eventos y sus entradas incluyendo 'check-in', validación de QR desde una app móvil."
                >
                    <Image data={{
                        mobile : {
                            media:769,
                            src:"/image/diseño-web/Selección-de-tipo-de-entrada-mesa-y-silla-del-evento.webp"
                        },
                        tablet : {
                            media:1200,
                            src:"/image/diseño-web/Selección-de-tipo-de-entrada-mesa-y-silla-del-evento.webp",
                        },
                        src:"/image/diseño-web/Selección-de-tipo-de-entrada-mesa-y-silla-del-evento.webp",
                        className:"image-section",
                        alt:"Muestra la página de producto donde se compra la entrada de un evento, tiene un campo para seleccionar el tipo de entrada y una venta con gráficos de mesas con sus asientos para seleccionar y reservar.",
                        load:"eager"
                    }}/>
                </TextChild>
            </section>

            <section className="maxheight">
                 <TextChild
                    title="Reserva Hotelera o Casa Rural"
                    parrafo="Permite que tus clientes reserven una habitación y días desde tu página web."
                >
                    <Image data={{
                        mobile : {
                            media:769,
                            src:"/image/diseño-web/Reserva-de-habitación-y-dia-desde-una-web.webp"
                        },
                        tablet : {
                            media:1200,
                            src:"/image/diseño-web/Reserva-de-habitación-y-dia-desde-una-web.webp",
                        },
                        src:"/image/diseño-web/Reserva-de-habitación-y-dia-desde-una-web.webp",
                        className:"image-section",
                        alt:"Muestra la página de producto donde se compra la entrada de un evento, tiene un campo para seleccionar el tipo de entrada y una venta con gráficos de mesas con sus asientos para seleccionar y reservar.",
                        load:"eager"
                    }}/>
                </TextChild>

                  <TextChild
                    title="Reserva para hostelería"
                    parrafo="Permite que tus clientes reserven una mesa disponible para una fecha concreta."
                >
                    <Image data={{
                        mobile : {
                            media:769,
                            src:"/image/diseño-web/funcionalidad-mesas-gestión-reserva-online.webp"
                        },
                        tablet : {
                            media:1200,
                            src:"/image/diseño-web/funcionalidad-mesas-gestión-reserva-online.webp",
                        },
                        src:"/image/diseño-web/funcionalidad-mesas-gestión-reserva-online.webp",
                        className:"image-section",
                        alt:"Un sistema para que tus clientes reserven una mesa en tu restaurante.",
                        load:"eager"
                    }}/>
                </TextChild>
            </section>

            <section className="maxheight">
                <OtrosServicios />
            </section>
        </div>
    )
}