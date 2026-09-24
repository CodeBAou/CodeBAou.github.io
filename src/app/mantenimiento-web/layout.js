export const metadata = {
  title: 'DWBA - Mantenimiento Web.',
  description: 'En DWBA ofrecemos planes para mantener tu página web operativa y segura.',
  keywords: 'servicio de mantenimiento web, soporte web, solucion de problemas técnicos en la web.',
  robots: 'index, follow',
   alternates: {
    canonical: 'https://dwba.es/mantenimiento-web',
  }
};

export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}