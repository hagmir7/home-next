/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'books.amtar.shop',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
}

module.exports = nextConfig