/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      "/api/rate-card-download": ["./private/Scenekind_Rate_Card_v3.pdf"],
    },
  },
};

export default nextConfig;
