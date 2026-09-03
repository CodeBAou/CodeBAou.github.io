export const metadata = {
  title: 'DWBA | Desarrollo Web en WordPress',
  description: 'Desarrollamos páginas web en WordPress para la autogestión y funcionalidades.',
  keywords: 'diseño web en wordpress,desarrollador web wordpress, pagina web wordpress, plugins wordpress',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}