const development = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: development ? '' : 'https://crysp.github.io/www/'
};

export default nextConfig;
