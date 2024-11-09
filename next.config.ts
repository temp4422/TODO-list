import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable a static export for static sites
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'docs',
  /* config options here */
}

export default nextConfig
