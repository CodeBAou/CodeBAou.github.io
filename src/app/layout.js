import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import GoogleAnalyticsHeadScript from '@/componentes/googleAnalyticsHeadScript/googleAnalyticsHeadScript';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';
import './main.css';

export const metadata = {
  title: 'DWBA Diseño web y Marketing Digital | Desde Ourense.',
  description: 'Descubre los servicios de diseño web y marketing digital que te podemos ofrecer. Servicio Online.',
  icons: {
    icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp',
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="es" >
      <head>
      
        <link
          rel="canonical"
          href="https://dwba.es/"
          key="canonical"
        />

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
