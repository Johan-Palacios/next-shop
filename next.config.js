/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com'],
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/store',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
