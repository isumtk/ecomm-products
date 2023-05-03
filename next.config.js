/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['i.dummyjson.com'],
  },
};

module.exports = nextConfig;
