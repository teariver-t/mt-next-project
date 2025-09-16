import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_conmponents/NewsList";

export default async function Page() {
  const { contents:news } = await getNewsList();
  return <NewsList news={news} />;
}