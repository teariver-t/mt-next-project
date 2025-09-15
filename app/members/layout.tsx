import Sheet from "@/app/_conmponents/Sheet";
import Hero from "@/app/_conmponents/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー"/>
      <Sheet>{children}</Sheet>
    </>
  );
}