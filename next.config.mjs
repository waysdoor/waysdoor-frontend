/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['waysdoor-posts.s3.ap-south-1.amazonaws.com'],
  },
    distDir: 'build',
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
