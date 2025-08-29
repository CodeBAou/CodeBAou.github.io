import Header from '@/componentes/header/Header.jsx';

export const metadata = {
  title: 'DWBA APP - desarrollo de aplicaciones.',
  description: 'DWBA, Apps y Plugins.',
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