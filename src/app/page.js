
import Layout_page_inicio from '@/componentes/layout_page_inicio/Layout_page_inicio.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Layout_section_inicio from '@/componentes/layout_section_inicio/Layout_section_inicio.jsx';
import Content_section_detalles from '@/componentes/content_section_detalles/Content_section_detalles.jsx';
import Content_section_description from '@/componentes/content_section_description/Content_section_description';
import Data_servicos from '@/data/servicios.json';
import Section_header from '@/componentes/section_header/Section_header.jsx';
import Content_section_contacto from '@/componentes/content_section_contacto/Content_section_contacto';
import DivisorApartadoWeb from '@/componentes/divisor-apartado-web/DivisorApartadoWeb.jsx';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';
import Descripcion from '@/componentes/descripcion/Descripcion';

export default function Page(){

    return(
         <Layout_page_inicio>
            
             <Menu_ancla/>

                <div className="content-scroll-page">

                        <Section_header/>

                        <Layout_section_inicio >
                            <Descripcion title="DWBA"  imagen="/image/servicios/mobile/servicios-soluciones-crecimiento-introducción-mobile.webp" alt="">
                                <p>Ofrecemos los servicios de una agencia web, brindando soluciones de desarrollo y estrategias digitales para crecer en internet.</p>
                                <p>Nos especializamos en WordPress, Google Cloud y otras tecnologías web para desarrollo dentro de páginas web, escritorio y móvil.</p>
                                <p>Nuestras webs no se generan con IA, algo que nos permitió esquivar la caída en el posicionamiento de los resultados de búsqueda de Google después de la actualización de marzo de 2026, donde Google empezó a penalizar este tipo de páginas web. Ofrecemos servicios de IA en otras cuestiones donde sí son útiles, pero nunca sustituyen el estudio, documentación y valor humano.</p>
                                <p>No contamos con una infraestructura donde poder atender a todos los clientes ni podemos viajar por España para cada reunión; por eso, ofrecemos atención online, reuniones y un trato cercano y personalizado.</p>
                                <img  src="/image/reseña_dwba_5_eestrellas.webp" alt="Reseña que dice: rápido, eficiente y muy muy cercano! así da gusto trabajar. Gracias por solucionarnos el problema y además dejarnos por escrito la solución para el que pueda venir detrás.
"/>
                            </Descripcion>
                        </Layout_section_inicio>
                    
                        <Layout_section_inicio >
                                <DivisorApartadoWeb title="DWBA | ¿Que servicios ofrecemos?">
                                    <img src="/icon/desarrollo.svg" width="50px" height="50px"/>
                                    <img src="/icon/seo.svg" width="50px" height="50px"/>
                                    <img src="/icon/crecimiento.svg" width="50px" height="50px"/>
                                </DivisorApartadoWeb>
                        </Layout_section_inicio>
                        
                        {/*SectionS*/}
                            {
                                Data_servicos.map( (servicio_data,index) => {

                                    return <Layout_section_inicio key={`section-${index}`}>

                                                <Content_section_description
                                                    titulo={servicio_data.name}
                                                    descripcion={servicio_data.descripcion}
                                                    nombreEnlace={servicio_data.name}
                                                    enlace={servicio_data.enlace}
                                                    ancla={servicio_data.ancla}
                                                    Image_Content_Description = {servicio_data.Image_Content_Description}
                                                />
                                            </Layout_section_inicio>
                                })
                            }

                        <Layout_section_inicio>
                            <Content_section_contacto/>
                        </Layout_section_inicio>     
                        <Content_section_footer/>             
                </div>
         </Layout_page_inicio>  
    )
}