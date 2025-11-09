/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
        {
            source: '/promocion-pagina-web',
            destination: '/paginas-web-economicas-promo', // Matched parameters can be used in the destination
            permanent: true,
        },
        ]
    }
};

export default nextConfig;
