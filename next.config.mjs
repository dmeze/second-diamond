/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: false,
    },
    basePath: '/second-diamond',
    assetPrefix: '/second-diamond/',
};

export default nextConfig;
