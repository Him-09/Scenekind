/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/glassfx",
        destination: "/kits/glassfx-spec-drop-kit.pdf",
      },
      {
        source: "/absolutejoi",
        destination: "/kits/absolutejoi-spec-drop-kit.pdf",
      },
    ];
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/rate-card-download": ["./private/Scenekind_Rate_Card_v3.pdf"],
    },
  },
};

export default nextConfig;
