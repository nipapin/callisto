import Motion from "@/components/Motion";
import Image from "next/image";

const components = {
  1: <Image src="/highlights/1.png" alt="Highlights 1" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  2: <Image src="/highlights/2.png" alt="Highlights 2" width={786} height={1960} style={{ width: "100%", height: "auto" }} />,
  3: <Image src="/highlights/3.png" alt="Highlights 3" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  4: <Image src="/highlights/4.png" alt="Highlights 4" width={786} height={2040} style={{ width: "100%", height: "auto" }} />,
  5: <Image src="/highlights/5.png" alt="Highlights 5" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
};

export default async function HighlightsPage({ params }) {
  const { pageID } = await params;

  return (
    <Motion initial={{ opacity: 0, scale: 1.25 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
      {components[pageID] || null}
    </Motion>
  );
}
