/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <--- Obligatorio para GitHub Pages y variables
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        unoptimized: true, // Requerido si usas <Image /> de Next.js en sitios estáticos
    },
    async redirects() {
        return [
            {
                source: '/paginas-web-economicas-promo',
                destination: '/diseño-web-orense', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/diseño-web',
                destination: '/diseño-web-orense', // Matched parameters can be used in the destination
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
