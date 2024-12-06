/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
