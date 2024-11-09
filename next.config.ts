import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  // Enable a static export for static sites
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'docs',

  // Deploy a Next.js application under a sub-path of a domain
  // basePath: '/docs',
}
export default nextConfig

// import path from 'path'
// const __dirname = new URL('.', import.meta.url).pathname

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, './'),
//     }
//     return config
//   },
//   // Enable a static export for static sites
//   output: 'export',
// }
// export default nextConfig
