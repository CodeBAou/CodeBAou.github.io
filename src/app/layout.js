import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import GoogleAnalyticsHeadScript from '@/componentes/googleAnalyticsHeadScript/googleAnalyticsHeadScript';

import './main.css';

export const metadata = {
  title: 'DWBA - Diseño Web en Ourense y Pontevedra.',
  description: 'Nos centramos en ofrecer servicios web y ayudarte a crecer en internet. ■ DISEÑO WEB ■ DESARROLLO ■ MARKETING DIGITAL ■ OTROS.',
  icons: {
    icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_48.png',
  }
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
