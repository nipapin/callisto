import Cover from "@/components/Cover";
import Motion from "@/components/Motion";
import Image from "next/image";

const components = {
  1: <Image src="/plans/1.png" alt="Plans 1" width={786} height={1704} style={{ width: "100%", height: "auto" }} />,
  2: <Image src="/plans/2.png" alt="Plans 2" width={786} height={1760} style={{ width: "100%", height: "auto" }} />,
  3: <Image src="/plans/3.png" alt="Plans 3" width={786} height={2518} style={{ width: "100%", height: "auto" }} />,
};

export default async function PlansPage({ params }) {
  const { pageID } = await params;

  return (
    <Motion initial={{ opacity: 0, scale: 1.25 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
      {components[pageID] || <Cover />}
    </Motion>
  );
}
