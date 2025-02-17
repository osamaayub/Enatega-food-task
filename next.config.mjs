/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.worldometers.info",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/do1ia4vzf/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "multivendor.enatega.com",
        port: "",
        pathname: "/static/media/**",
      },
      {
        protocol: "https",
        hostname: "enatega.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;