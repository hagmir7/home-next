/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'al-kora.com',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
}

module.exports = nextConfig