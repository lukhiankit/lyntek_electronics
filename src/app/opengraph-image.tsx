import { ImageResponse } from "next/og";

export const alt = "Lyntek Electronics — Engineering intelligent electronics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          color: "white",
          background: "linear-gradient(135deg, #071018 0%, #0b1c2c 58%, #093b49 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 28, letterSpacing: "8px" }}>
          <div style={{ width: 38, height: 38, border: "3px solid #67e8f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, background: "#67e8f9" }} />
          </div>
          LYNTEK
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 940, fontSize: 68, fontWeight: 700, lineHeight: 1.03, letterSpacing: "-3px" }}>
            Engineering intelligent electronics for a connected future.
          </div>
          <div style={{ marginTop: 30, fontSize: 24, color: "rgba(255,255,255,.6)" }}>
            Embedded systems · Industrial IoT · Smart home · Power electronics
          </div>
        </div>
      </div>
    ),
    size,
  );
}
