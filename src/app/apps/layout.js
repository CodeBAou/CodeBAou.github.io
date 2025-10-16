import Header from '@/componentes/header/Header.jsx';

export const metadata = {
  title: 'DWBA APPS - Lista de apps desarrolladas',
  description: 'DWBA, una lista de apps y plugins que desarrollados.',
  icons: {
    icon: '/image/LOGO_DWBA_simbolo.webp',       // favicon clásico
    apple: '/image/LOGO_DWBA_simbolo.png', // para iOS
    shortcut: '/image/LOGO_DWBA_simbolo.webp_32' // opcional
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}