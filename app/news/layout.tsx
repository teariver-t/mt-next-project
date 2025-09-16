import Hero from "@/app/_conmponents/Hero";
import Sheet from "@/app/_conmponents/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}