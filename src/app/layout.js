import Header from '@/componentes/header/Header.jsx';
import Menu_ancla from '@/componentes/menu_ancla/Menu_ancla.jsx';
import Menu from '@/componentes/menu/Menu.jsx';

import './main.css';

export const metadata = {
<<<<<<< HEAD
  title: '★ Desarrollo Web, Apps y Marketing Digital en Ourense | 𝝿 DWBA ',
  description: 'Ayudo a negocios y marcas a crecer desde Ourense con un desarrollo profesional que cubre necesidades, mejora la productividad y aplica estrategias para aprovechar al máximo las oportunidades en el ámbito de marketing',
  icons: {
    icon: '/image/LOGO_DWBA_simbolo.webp',       // favicon clásico
    apple: '/image/LOGO_DWBA_simbolo.png', // para iOS
    shortcut: '/image/LOGO_DWBA_simbolo.webp_32' // opcional
  }
=======
  title: 'π DWBA - ★ Diseño web ★ Ecommerce ★ Maketing Digital ( SEO, SEM... )  ★ WordPress Avanzado ★ ',
  description: 'Desarrollo y diseño web , seo y sem en marketing digital para captar nuevos clientes y mantenimiento web. Desde Cortegada | A Cañiza | Celanova | Ourense provincia.',
  icons: '/icon/LOGO_DWBA_simbolo_32.webp'
>>>>>>> develop
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
