/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 👈 Exporta la web en HTML estático
    images: { unoptimized: true }, // 👈 Necesario para GitHub Pages
};

export default nextConfig;
