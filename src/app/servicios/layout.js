import Header from '@/componentes/header/Header.jsx';

export const metadata = {
  title: 'DWBA Servicios paginas web',
  description: 'Servicios de desarrollo de paginas web con CMS o a medida, apps movil, app escritorio y marketing digital en ourense',
  icons: {
    icon: '/image/LOGO_DWBA_simbolo.webp',       // favicon clásico
    apple: '/image/LOGO_DWBA_simbolo.png', // para iOS
    shortcut: '/image/LOGO_DWBA_simbolo.webp_32' // opcional
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}