/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:'rickandmortyapi.com',
        protocol:'https'
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
