/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
  // Disable SSR completely to avoid client/server component issues
  experimental: {
    // Disable static optimization
    optimizePackageImports: [],
    // Force client-side rendering
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig
