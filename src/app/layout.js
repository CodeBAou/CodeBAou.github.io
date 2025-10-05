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
