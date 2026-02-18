/** @type {import('next').NextConfig} */
const nextConfig = {
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
