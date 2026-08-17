/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      "/api/rate-card-download": ["./private/Scenekind_Rate_Card_v3.pdf"],
      "/absolutejoi": ["./public/kits/absolutejoi-spec-drop-kit.pdf"],
      "/glassfx": ["./public/kits/glassfx-spec-drop-kit.pdf"],
    },
  },
};

export default nextConfig;
