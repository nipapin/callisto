import Cover from "@/components/Cover";
import Motion from "@/components/Motion";
import Image from "next/image";

const components = {
  1: <Image src="/thanks/1.png" alt="Thanks 1" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  2: <Image src="/thanks/2.png" alt="Thanks 2" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  3: <Image src="/thanks/3.png" alt="Thanks 3" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  4: <Image src="/thanks/4.png" alt="Thanks 4" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  5: <Image src="/thanks/5.png" alt="Thanks 5" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  6: <Image src="/thanks/6.png" alt="Thanks 6" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  7: <Image src="/thanks/7.png" alt="Thanks 7" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
};

export default async function ThanksPage({ params }) {
  const { pageID } = await params;

  return (
    <Motion initial={{ opacity: 0, scale: 1.25 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
      {components[pageID] || <Cover />}
    </Motion>
  );
}
