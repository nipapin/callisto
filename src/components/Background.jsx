import Motion from "@/components/Motion";
import Image from "next/image";

const images = [
  {
    src: "/images/blurred-logo-shape.png",
    alt: "Blurred Logo Shape",
    width: 1572,
    height: 1264,
    transform: {
      left: 0,
      bottom: 0,
      width: "100vw",
      height: "auto",
      aspectRatio: "1572/1264",
    },
  },
  {
    src: "/images/top-shapes.png",
    alt: "Logo Shape",
    width: 1572,
    height: 975,
    transform: {
      left: 0,
      top: 0,
      width: "100vw",
      height: "auto",
      aspectRatio: "1572/975",
    },
  },
  {
    src: "/images/salut-bottom.png",
    alt: "Salut Bottom",
    width: 1572,
    height: 1523,
    transform: {
      left: 0,
      bottom: 0,
      width: "100vw",
      height: "auto",
      aspectRatio: "1572/1523",
      marginBottom: "-40px",
    },
  },
];

export default function Background() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => {
          return (
            <div key={index} style={{ position: "absolute", ...image.transform }}>
              <Motion
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 + index * 0.5 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{ width: "100%", height: "auto" }}
                />
              </Motion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
