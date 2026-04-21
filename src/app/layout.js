import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import GoogleAnalyticsHeadScript from '@/componentes/googleAnalyticsHeadScript/googleAnalyticsHeadScript';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';
import './main.css';

export const metadata = {
  title: 'DWBA | Estudio de diseño web y marketing digital en Ourense',
  description: 'Si buscas una agencia de diseño web y necesitas servicios que te ayuden a crecer en internet. Desde Ourense.',
  keywords: 'agencia de diseño web,agencia páginas web, diseño web Ourense, desarrollo web a medida, SEO, SEM, mantenimiento web, soporte técnico, marketing digital España, DWBA, desarrollo web ourense, marketing digital ourense, diseño web wordpress ourense, diseño app ourense, diseñador web ourense',
  robots: 'index, follow',
  icons: {
  icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp',
  }
};

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
