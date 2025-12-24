import Image from "next/image";
import Motion from "@/components/Motion";

const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 872;

const toComp = (value, dimension) => {
  const dimensionMap = {
    vw: (value / CANVAS_WIDTH) * 100,
    vh: (value / CANVAS_HEIGHT) * 100,
  };
  return `${dimensionMap[dimension]}${dimension}`;
};

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

const texts = [
  "Если бы достижения измерялись не только цифрами, но и энергией команды, то в 2025-ом точно и в космосе бы узнали, кто такие ребята и девчата из Группы CALLISTO!",
  "Год начался активно, а апрель выдался особенно насыщенным: наша компания приняла участие в Международной выставке «ИННОПРОМ. Центральная Азия» в Ташкенте. Мы показали, на что способны, и в очередной раз доказали, что «Made in Callisto» - это знак качества!",
  "А в Саудовской Аравии, в солнечной Джидде появилось наше флагманское решение собственной разработки, которое, представьте себе, работает на другом конце света!",
];

export default async function HighlightsPage({ params }) {
  const { pageID } = await params;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "91vw",
        margin: "0 auto",
        padding: "16px",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Motion
        initial={{ y: 100, x: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image src="/images/logo-type.png" alt="Logo Type" width={520} height={204} style={{ width: "130px", height: "auto" }} />
      </Motion>
      <Motion
        initial={{ y: 100, x: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
      >
        <Image
          src="/images/year-title.png"
          alt="Year Title"
          width={1080}
          height={1025}
          style={{ width: "255px", height: "auto", marginLeft: "40px" }}
        />
      </Motion>
      {texts.map((text, index) => (
        <Motion
          key={text}
          initial={{ y: 100, x: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 + index * 0.25 }}
        >
          <p style={{ fontSize: "16px", lineHeight: "1.24", letterSpacing: "-2.2%", textAlign: "center", color: "var(--foreground)" }}>
            {text}
          </p>
        </Motion>
      ))}
    </div>
  );
}
