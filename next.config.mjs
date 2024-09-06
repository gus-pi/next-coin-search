/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.coinranking.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
