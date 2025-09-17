import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article  from "@/app/_conmponents/Article";
import ButtonLink from "@/app/_conmponents/ButtonLink";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース</ButtonLink>
      </div>
    </>
  );
}