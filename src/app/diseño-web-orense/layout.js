export const metadata = {
  title: 'DISEÑO WEB| Descubre lo que podemos ofrecerte para tu diseño web.',
  description: 'Diseño web con animaciones avanzadas, efectos, diseño contenido y contenido dinámico. | WordPress | WebApps',
  keywords: 'diseño web Ourense, diseño web profesional, WordPress, desarrollo web España, páginas web modernas, DWBA',
  robots: 'index, follow',
  icons: {
  icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_48.png',
  },
  openGraph: {
  title: 'SERVICIO DE DISEÑO | Diseño Web Profesional para SEO y CONVERSIÓN.',
  description: 'Te detallamos todo lo que ofrecemos a la hora de diseñar tu página web. | Diseño Web desde Ourense.',
  url: 'https://dwba.es/diseño-web',
  siteName: 'DWBA',
  images: [
  {
  url: 'https://dwba.es/icon/LOGO_DWBA_simbolo_48.png',
  width: 48,
  height: 48,
  },
  ],
  locale: 'es_ES',
  type: 'website',
  }
};


export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}