export const metadata = {
  title: 'DWBA - Servicio de diseño web.',
  description: 'En DWBA realizamos diseños para tu web. | Ourense',
  keywords: 'diseño web Ourense, diseño de página web, diseño de tiendas online, diseño wordpress',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://dwba.es/diseño-web-orense',
  }
};

export default function RootLayout({ children }) {
  return (
       <>
        {children}
       </>
  )
}