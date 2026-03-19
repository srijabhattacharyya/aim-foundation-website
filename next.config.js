/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // This section ensures bots can find your llms files at the root
  // even though they are physically stored in .well-known/
  async rewrites() {
    return [
      {
        source: '/llms.txt',
        destination: '/.well-known/llms.txt',
      },
      {
        source: '/llms-full.txt',
        destination: '/.well-known/llms-full.txt',
      },
    ];
  },
};

module.exports = nextConfig;
