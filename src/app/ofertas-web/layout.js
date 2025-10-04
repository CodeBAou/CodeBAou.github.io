import Header from '@/componentes/header/Header.jsx';

export const metadata = {
  title: 'DWBA Servicios paginas web',
  description: 'Todos los servicios para páginas web, apps y marketing digital.',
  icons: '/icon/LOGO_DWBA_simbolo_32.webp'
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