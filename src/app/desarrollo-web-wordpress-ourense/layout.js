export const metadata = {
  title: 'DWBA | Desarrollo de páginas Web WordPress',
  description: 'En DWBA ofrecemos servicios para páginas web en WordPress, temas y plugins.',
  keywords: 'diseño web en wordpress,desarrollador web wordpress, página web wordpress, plugins wordpress, solución para wordpress.',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}