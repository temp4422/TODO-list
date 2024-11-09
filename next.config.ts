import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable a static export for static sites
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'docs',

  // Deploy a Next.js application under a sub-path of a domain
  basePath: '/docs',
}

export default nextConfig
