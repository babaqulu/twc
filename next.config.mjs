/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['az', 'en'],
    defaultLocale: 'az',
    localeDetection: false,
  },

    images: {
      domains: ['twc.efgroup.az'], // Add any domains you want to allow
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  

};



export default nextConfig;
