import Header from '@/componentes/header/Header.jsx';

import Menu from '@/componentes/menu/Menu.jsx';

import './main.css';

export const metadata = {
  title: 'π DWBA - ★ Diseño web ★ Ecommerce ★ Maketing Digital ( SEO, SEM... )  ★ WordPress Avanzado ★ ',
  description: 'Desarrollo y diseño web , seo y sem en marketing digital para captar nuevos clientes y mantenimiento web. Desde Cortegada | A Cañiza | Celanova | Ourense provincia.',
  icons: '/icon/LOGO_DWBA_simbolo_32.webp'
}

export default function RootLayout({ children }) {
  return (
    <html >
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
