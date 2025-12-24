import Cover from "@/components/Cover";
import Motion from "@/components/Motion";
import Image from "next/image";

const components = {
  1: <Image src="/congratulation/1.png" alt="Congratulation 1" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
};

export default async function CongratulationPage({ params }) {
  const { pageID } = await params;

  return (
    <Motion initial={{ opacity: 0, scale: 1.25 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
      {components[pageID] || <Cover />}
    </Motion>
  );
}
