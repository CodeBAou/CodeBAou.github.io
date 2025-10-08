import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import GoogleAnalyticsHeadScript from '@/componentes/googleAnalyticsHeadScript/googleAnalyticsHeadScript';

import './main.css';

export const metadata = {
  title: 'π DWBA ★ PAGINAS WEB ★ ECOMMERCE ★ MMARKETING DIGITAL | CORTEGADA, OURENSE ',
  description: 'Desarrollo de páginas web profesionales para tu negocio y servicios digitales para mejorar tu visibilidad online. Cortegada | A Cañiza | Celanova | Ourense provincia.',
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

        <link rel="icon" href="/icon/LOGO_DWBA_simbolo_32.webp"></link>
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DWBA",
              "url": "https://dwba.es",
              "logo": "https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp",
              "sameAs": [
              ]
            })
          }}
        />
      </head>
      <body>
        <GoogleAnalyticsHeadScript/>
        <Header>
            <Menu/>
        </Header>
        {children}
      </body>
    </html>
  )
}
