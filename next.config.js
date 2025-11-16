/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',          // importante para export estático
  images: { unoptimized: true }, // si usas <Image />
  
  async redirects() {
    return [
      {
        source: '/promocion-pagina-web',
        destination: '/paginas-web-economicas-promo',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
