import { ImageResponse } from "next/og";

export const alt =
  "AI Ropeway — Premier AI Transformation Partner. Do 5× more. Run on half the team.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card (1200×630) matching the site's spectrum design.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#fbfaf7",
          backgroundImage:
            "radial-gradient(900px 600px at 90% -10%, rgba(255,106,77,0.25), transparent 60%), radial-gradient(800px 600px at -10% 110%, rgba(108,92,231,0.22), transparent 60%), radial-gradient(700px 500px at 50% 120%, rgba(20,184,166,0.18), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              backgroundColor: "#1a1813",
              borderRadius: "20px",
              padding: "16px 22px",
            }}
          >
            <div style={{ display: "flex", fontSize: "30px", fontWeight: 700 }}>
              <span style={{ color: "#d8b45a" }}>AI</span>
              <span style={{ color: "#ffffff", marginLeft: "8px" }}>Ropeway</span>
            </div>
          </div>
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "4px",
              color: "#6b655b",
              textTransform: "uppercase",
            }}
          >
            AI Consulting
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "#6c5ce7",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Premier AI Transformation Partner
          </div>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              color: "#1a1813",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Do 5× more. Run on half the team.
          </div>
          <div style={{ fontSize: "30px", color: "#433f38", marginTop: "6px" }}>
            18 battle-tested AI systems, deployed into your business.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "24px", color: "#6b655b" }}>
          www.airopeway.com
        </div>
      </div>
    ),
    { ...size },
  );
}
