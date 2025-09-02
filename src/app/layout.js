import Header from '@/componentes/header/Header.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Menu from '@/componentes/menu/Menu.jsx';

import './main.css';

export const metadata = {
  title: 'DWBA',
  description: 'Ayudo a negocios y marcas a crecer desde Ourense, ofreciendo servicios de desarrollo web, aplicaciones móviles, diseño digital y marketing online. Trabajo estrategias de SEO, SEM, gestión de redes sociales y recomendaciones personalizadas para atraer tráfico de calidad a tu web y potenciar tu presencia en Internet.',
  icons: {
    icon: '/image/LOGO_DWBA_simbolo.webp',       // favicon clásico
    apple: '/image/LOGO_DWBA_simbolo.png', // para iOS
    shortcut: '/image/LOGO_DWBA_simbolo.webp_32' // opcional
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
          <link
          rel="canonical"
          href="https://dwba.es/"
          key="canonical"
        />
      </head>
      <body>
        <Header>
            <Menu/>
        </Header>
        {children}
      </body>
    </html>
  )
}
