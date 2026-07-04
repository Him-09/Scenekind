import { ImageResponse } from "next/og";
import { shortSiteDescription, siteName } from "@/lib/site";

export const runtime = "edge";
export const alt = "Scenekind AI-first creative production studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#F2F0EA",
          color: "#171716",
          display: "flex",
          height: "100%",
          padding: 54,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #DDD9CF",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                fontSize: 30,
                fontWeight: 700,
                gap: 14,
              }}
            >
              <span>{siteName}</span>
              <span
                style={{
                  border: "1px solid #DDD9CF",
                  borderRadius: 999,
                  color: "#7A786F",
                  fontSize: 18,
                  fontWeight: 500,
                  padding: "6px 14px",
                }}
              >
                AI-first studio
              </span>
            </div>
            <div
              style={{
                background: "#171716",
                borderRadius: 999,
                height: 18,
                width: 18,
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 86,
                fontWeight: 700,
                letterSpacing: 0,
                lineHeight: 0.98,
                maxWidth: 900,
              }}
            >
              Cinematic ad production, faster.
            </div>
            <div
              style={{
                color: "#3D3C38",
                display: "flex",
                fontSize: 30,
                lineHeight: 1.35,
                maxWidth: 760,
              }}
            >
              {shortSiteDescription}
            </div>
          </div>

          <div
            style={{
              color: "#7A786F",
              display: "flex",
              fontSize: 24,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>AI Commercials</span>
            <span>Product Ads</span>
            <span>Motion Design</span>
            <span>Creator-Style Video</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
