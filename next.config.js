/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'freesad.com',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
}

module.exports = nextConfig