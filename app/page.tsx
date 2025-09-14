import styles from "./page.module.css"
import Image from "next/image"

import ButtonLink from "@/app/_conmponents/ButtonLink";
import NewsList from "@/app/_conmponents/NewsList";
import { News } from "@/app/_libs/microcms"

const data : {
  contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "オフィスを移転しました",
        category: {
          name: "更新情報",
        },
        pubkishedAt: "2025/05/19",
        createdAt: "2025/05/19",
      },
      {
        id: "2",
        title: "オフィスが凄いです",
        category: {
          name: "更新情報",
        },
        pubkishedAt: "2025/05/20",
        createdAt: "2025/05/20",
      },      
      {
        id: "3",
        title: "オフィスがヤバいです",
        category: {
          name: "更新情報",
        },
        pubkishedAt: "2025/05/21",
        createdAt: "2025/05/21",
      },    
    ],
  };

export default function Home() {
  const sliceData = data.contents.slice(0,2);
  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>システム会社だよ</h1>
        <p className={styles.description}>頑張るよ。応募してみて。</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>

    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={sliceData} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっと見る</ButtonLink>
      </div>
    </section>
  </>  
  )
}