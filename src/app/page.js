import Layout_page_inicio from '@/componentes/layout_page_inicio/Layout_page_inicio.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Layout_section_inicio from '@/componentes/layout_section_inicio/Layout_section_inicio.jsx';
import Content_section_detalles from '@/componentes/content_section_detalles/Content_section_detalles.jsx';
import Content_section_description from '@/componentes/content_section_description/Content_section_description';
import Data_servicos_descripcion_corta from '@/data/page_inicio/Data_servicios_descripción_corta.json';

export default function Page(){


    return(
         <Layout_page_inicio>
             <Menu_ancla/>
                <div class="content-scroll-page">

                    {/*Section servico soporte web */}
                    

                        {
                            Data_servicos_descripcion_corta.map( servicio_data => {

                               return <>
                                 <Layout_section_inicio>
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
                               </>
                              
                               
                               
                             
                            })
                        }

                </div>
         </Layout_page_inicio>  
    )
}