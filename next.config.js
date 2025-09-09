/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ciadabarba.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/links',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
