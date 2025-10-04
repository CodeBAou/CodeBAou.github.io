
import Layout_page_inicio from '@/componentes/layout_page_inicio/Layout_page_inicio.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Layout_section_inicio from '@/componentes/layout_section_inicio/Layout_section_inicio.jsx';
import Content_section_detalles from '@/componentes/content_section_detalles/Content_section_detalles.jsx';
import Content_section_description from '@/componentes/content_section_description/Content_section_description';
import Data_servicos_descripcion_corta from '@/data/page_inicio/Data_servicios_descripción_corta.json';
import Section_header from '@/componentes/section_header/Section_header.jsx';
import Content_section_contacto from '@/componentes/content_section_contacto/Content_section_contacto';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';

export default function Page(){

    const estiloBoton = {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px) saturate(150%)',
    WebkitBackdropFilter: 'blur(10px) saturate(150%)', // Safari
    borderRadius: '12px',
    padding: '10px 20px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  };

  const estiloHover = {
    ...estiloBoton,
    background: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-2px)',
  };


    return(
         <Layout_page_inicio>
            
             <Menu_ancla/>

                <div className="content-scroll-page">

                    <Section_header/>

                     <Layout_section_inicio key={`section-OFERTA`}>
                            <div  className="oferta" style={estiloBoton}>
                                   <img className="Imagenoferta" src="/image/OFERTA-LIMITADA-DESARROLLO-WEB-PRECIOS.webp" alt="Ofertas disponibles"/>
                                    <a href="https://dwba.es/ofertas-web">VER OFERTAS DISPONIBLES</a>
                            </div>
                         
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