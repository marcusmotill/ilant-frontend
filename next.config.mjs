/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: false,
            },
        ];
    },
    images: {
        remotePatterns: [
          {
            // protocol: 'https',
            hostname: 'books.google.com',
          },
        ],
      },
};

export default nextConfig;
