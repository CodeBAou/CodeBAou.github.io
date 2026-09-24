export const metadata = {
  title: 'DWBA | Desarrollo de páginas Web WordPress',
  description: 'En DWBA, creamos páginas web en wordpress y plugins para que tengas las funcionalidades que necesites. ',
  keywords: 'diseño web en wordpress,desarrollador web wordpress, página web wordpress, plugins wordpress, solución para wordpress.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://dwba.es/desarrollo-web-wordpress-ourense',
  }
};

export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}