/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'export' for static site generation (Apache deployment)
  // Use 'standalone' for containerized deployments (uncomment if needed)
  output: process.env.NEXT_EXPORT === 'true' ? 'export' : 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Static export requires unoptimized images
    unoptimized: process.env.NEXT_EXPORT === 'true' ? true : false,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 