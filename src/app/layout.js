import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import GoogleAnalyticsHeadScript from '@/componentes/googleAnalyticsHeadScript/googleAnalyticsHeadScript';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';
import './main.css';

export const metadata = {
  title: 'Ofrecemos servicios de Diseño Web y Marketing Digital desde Ourense',
  description: 'Desarrollo web y soluciones avanzadas para ayudarte a convertir visitas en clientes | WordPress y React WebApps.',
  keywords: 'diseño web Ourense, desarrollo web a medida, SEO, SEM, mantenimiento web, soporte técnico, marketing digital España, DWBA, desarrollo web ourense, marketing digital ourense, diseño web wordpress ourense, diseño app ourense, diseñador web ourense',
  robots: 'index, follow',
  icons: {
  icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp',
  },
  openGraph: {
  title: 'Ofrecemos servicios de diseño web y Marketing Digital',
  description: 'Diseñamos páginas webs y soluciones avanzadas para ayudarte a convertir visitas en clientes | Desde Ourense',
  url: 'https://dwba.es',
  siteName: 'DWBA',
  images: [
  {
  url: 'https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp',
  width: 32,
  height: 32,
  },
  ],
  locale: 'es_ES',
  type: 'website',
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
