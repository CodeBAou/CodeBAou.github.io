import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Header from '@/componentes/header/Header.jsx';
import Menu from '@/componentes/menu/Menu.jsx';
import Script from "next/script";//google analytics
import './main.css';

export const metadata = {
  title: 'π DWBA - ★ Diseño web ★ Ecommerce ★ Maketing Digital ( SEO, SEM... )  ★ WordPress Avanzado ★ ',
  description: 'Desarrollo y diseño web , seo y sem en marketing digital para captar nuevos clientes y mantenimiento web. Desde Cortegada | A Cañiza | Celanova | Ourense provincia.',
  icons: '/icon/LOGO_DWBA_simbolo_32.webp'
}

export default function RootLayout({ children }) {

  const pathname = usePathname();
  //Para indicar a analytics la ruta que se esta analizando 
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-SJ7H1DSCKC', { page_path: pathname });
    }
  }, [pathname]);

  return (
    <html >
      <head>
       
          {/* Google tag (gtag.js) //google analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SJ7H1DSCKC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJ7H1DSCKC');
          `}
        </Script>

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
        <Header>
            <Menu/>
        </Header>
        {children}
      </body>
    </html>
  )
}
