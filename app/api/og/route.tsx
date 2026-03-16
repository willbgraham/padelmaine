import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a2e1a",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(245,240,232,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(245,240,232,0.04) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          {/* Subtitle */}
          <div
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "20px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Coming to The Downs, Scarborough
          </div>

          {/* Title */}
          <div
            style={{
              color: "#f5f0e8",
              fontSize: "72px",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1,
              maxWidth: "900px",
            }}
          >
            Maine&apos;s First Premier Padel Club
          </div>

          {/* Description */}
          <div
            style={{
              color: "rgba(245,240,232,0.5)",
              fontSize: "24px",
              textAlign: "center",
              maxWidth: "700px",
              marginTop: "8px",
            }}
          >
            The fastest-growing racket sport in the world, arriving in
            Maine&apos;s most exciting new community.
          </div>

          {/* CTA badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "20px",
              padding: "12px 32px",
              backgroundColor: "#f5f0e8",
              borderRadius: "999px",
              color: "#1a2e1a",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Join Priority Access →
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(245,240,232,0.3)",
            fontSize: "16px",
          }}
        >
          padelmaine.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
