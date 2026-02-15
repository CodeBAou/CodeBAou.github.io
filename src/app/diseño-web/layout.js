export const metadata = {
  title: 'DWBA | Diseño web profesional en Ourense | Servicios en toda España',
  description: 'DWBA crea páginas web profesionales y modernas en Ourense, con alcance en toda España. Diseño responsive, WordPress, optimizado para SEO y pensado para atraer clientes.',
  keywords: 'diseño web Ourense, diseño web profesional, WordPress, desarrollo web España, páginas web modernas, DWBA',
  robots: 'index, follow',
  icons: {
    icon: 'https://dwba.es/icon/LOGO_DWBA_simbolo_48.png',
  },
  openGraph: {
    title: 'DWBA | Diseño web profesional en Ourense | Servicios en toda España',
    description: 'DWBA crea páginas web profesionales y modernas en Ourense, con alcance en toda España. Diseño responsive, WordPress, optimizado para SEO y pensado para atraer clientes.',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DWBA | Diseño web profesional en Ourense | Servicios en toda España',
    description: 'DWBA crea páginas web profesionales y modernas en Ourense, con alcance en toda España. Diseño responsive, WordPress, optimizado para SEO y pensado para atraer clientes.',
    images: ['https://dwba.es/icon/LOGO_DWBA_simbolo_48.png'],
  },
};


export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}