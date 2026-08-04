import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { company } from "@/lib/data";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuf = await readFile(path.join(process.cwd(), "public/logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050814 0%, #0a1128 55%, #182452 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width="64" height="56" alt="" />
          <div style={{ display: "flex", fontSize: "36px", fontWeight: 700, color: "#ffffff" }}>
            {company.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "56px",
            fontSize: "58px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "920px",
          }}
        >
          {company.tagline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "26px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Enterprise software consulting, custom development &amp; AI solutions
        </div>
      </div>
    ),
    { ...size }
  );
}
