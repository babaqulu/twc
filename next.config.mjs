/** @type {import('next').NextConfig} */
const nextConfig = {


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
