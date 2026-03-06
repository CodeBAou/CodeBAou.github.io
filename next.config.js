/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <--- Obligatorio para GitHub Pages y variables
    images: {
        unoptimized: true, // Requerido si usas <Image /> de Next.js en sitios estáticos
    },
    async redirects() {
        return [
        {
            source: '/paginas-web-economicas-promo',
            destination: '/diseño-web', // Matched parameters can be used in the destination
            permanent: true,
        },
        ]
    }
};

export default nextConfig;
