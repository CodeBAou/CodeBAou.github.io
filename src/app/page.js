
import Layout_page_inicio from '@/componentes/layout_page_inicio/Layout_page_inicio.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Layout_section_inicio from '@/componentes/layout_section_inicio/Layout_section_inicio.jsx';
import Content_section_detalles from '@/componentes/content_section_detalles/Content_section_detalles.jsx';
import Content_section_description from '@/componentes/content_section_description/Content_section_description';
import Data_servicos_descripcion_corta from '@/data/page_inicio/Data_servicios_descripción_corta.json';
import Section_header from '@/componentes/section_header/Section_header.jsx';
import Content_section_contacto from '@/componentes/content_section_contacto/Content_section_contacto';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';
import Content_section_oferta from '@/componentes/content_section_oferta/Content-section-oferta';


export default function Page(){

    return(
         <Layout_page_inicio>
            
             <Menu_ancla/>

                <div className="content-scroll-page">

                        <Section_header/>
                    
                        <Layout_section_inicio key={`section-description`}>
                            <p>Desarrollo profesional de páginas web, app y funcionalidades para tu negocio. Creación de estrategias de marketing digital para captar nuevos clientes a través de internet.</p>
                        </Layout_section_inicio>

                        <Layout_section_inicio key={`section-OFERTA`}>
                                <Content_section_oferta/>
                        </Layout_section_inicio>
                        
                        {/*SectionS*/}
                            {
                                Data_servicos_descripcion_corta.map( (servicio_data,index) => {

                                    return <Layout_section_inicio key={`section-${index}`}>

                                                <Content_section_description
                                                    titulo={servicio_data.name}
                                                    descripcion={servicio_data.descripcion}
                                                    nombreEnlace={servicio_data.name}
                                                    enlace={servicio_data.enlace}
                                                    ancla={servicio_data.ancla}
                                                />

                                                <Content_section_detalles
                                                    servicios={servicio_data.servicio}
                                                    duracion={servicio_data.duracion}
                                                    precio={servicio_data.precio}
                                                    tecnologias={servicio_data.tecnologias_icons}
                                                    ancla={servicio_data.ancla}
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