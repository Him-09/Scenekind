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

  // Clean, trackable profile links. Explicit status codes keep the requested
  // 301 behavior rather than Next.js's default 308 for permanent redirects.
  async redirects() {
    return [
      {
        source: "/ig",
        destination:
          "https://scenekind.studio/?utm_source=instagram&utm_medium=social&utm_campaign=profile",
        statusCode: 301,
      },
      {
        source: "/tiktok",
        destination:
          "https://scenekind.studio/?utm_source=tiktok&utm_medium=social&utm_campaign=profile",
        statusCode: 301,
      },
      {
        source: "/tt",
        destination:
          "https://scenekind.studio/?utm_source=tiktok&utm_medium=social&utm_campaign=profile",
        statusCode: 301,
      },
      {
        source: "/li",
        destination:
          "/?utm_source=linkedin&utm_medium=social&utm_campaign=profile",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
