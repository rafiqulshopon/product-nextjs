/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'petraimages.com.s3.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'petraimages.com.s3.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
