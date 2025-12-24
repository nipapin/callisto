import Image from "next/image";
import Background from "./Background";

export default function Cover() {
  return (
    <>
      <Background />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          gap: "16px",
          marginTop: "-32px",
        }}
      >
        <Image src="/images/logo-type.png" alt="Cover" width={1000} height={1000} style={{ width: "150px", height: "auto" }} />
        <Image src="/images/2026.png" alt="Cover" width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
      </div>
    </>
  );
}
