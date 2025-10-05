

export const metadata = {
  title: 'DWBA Servicios paginas web',
  description: 'Lista de los servicios para paginas web de negocios.',
  title: 'DWBA Servicios para paginas web y apps',
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