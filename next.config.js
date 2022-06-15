/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/testum/' : '';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix,
};

module.exports = nextConfig;
