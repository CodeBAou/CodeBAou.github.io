import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import GoogleAnalyticsHeadScript from '@/componentes/googleAnalyticsHeadScript/googleAnalyticsHeadScript';
import Content_section_footer from '@/componentes/content_section_footer/Content_section_footer';
import './main.css';

export const metadata = {
title: 'DWBA | Diseño web y Marketing Digital en Ourense | Servicios en toda España',
description: 'DWBA ofrece servicios profesionales de diseño web, desarrollo a medida, SEO, SEM, mantenimiento y soporte técnico desde Ourense con alcance en toda España. Impulsa tu negocio online con nosotros.',
keywords: 'diseño web Ourense, desarrollo web a medida, SEO, SEM, mantenimiento web, soporte técnico, marketing digital España, DWBA, desarrollo web ourense, marketing digital ourense, diseño web wordpress ourense, diseño app ourense, diseñador web ourense',
robots: 'index, follow',
icons: {
icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp',
},
openGraph: {
title: 'DWBA | Diseño web y Marketing Digital en Ourense | Servicios en toda España',
description: 'DWBA ofrece servicios profesionales de diseño web, desarrollo a medida, SEO, SEM, mantenimiento y soporte técnico desde Ourense con alcance en toda España. Impulsa tu negocio online con nosotros.',
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
},
twitter: {
card: 'summary_large_image',
title: 'DWBA | Diseño web y Marketing Digital en Ourense | Servicios en toda España',
description: 'DWBA ofrece servicios profesionales de diseño web, desarrollo a medida, SEO, SEM, mantenimiento y soporte técnico desde Ourense con alcance en toda España. Impulsa tu negocio online con nosotros.',
images: ['https://dwba.es/icon/LOGO_DWBA_simbolo_32.webp'],
},
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
