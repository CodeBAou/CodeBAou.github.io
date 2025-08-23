import Layout_page_inicio from '@/componentes/layout_page_inicio/Layout_page_inicio.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Layout_inicio from '@/componentes/layout_section_inicio/Layout_section_inicio.jsx';

export default function Page(){
    return(
         <Layout_page_inicio>
             <Menu_ancla/>
             <Layout_inicio/>
         </Layout_page_inicio>  
    )
}