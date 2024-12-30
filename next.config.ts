import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: '/waitingline-static',

  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  }
}

export default nextConfig
