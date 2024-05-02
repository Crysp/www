const development = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: development ? '' : 'https://github.com/Crysp/www/blob/main/docs/'
};

export default nextConfig;
