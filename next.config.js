/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'cdn.shopify.com', 'www.google.com', 'api.escuelajs.co'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production',
  disable: false,
  register: true,
});

module.exports = withPWA(nextConfig);
