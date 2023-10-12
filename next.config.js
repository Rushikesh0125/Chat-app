/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
