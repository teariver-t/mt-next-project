import { getNewsList } from "@/app/_libs/microcms";
import SearchField from "@/app/_conmponents/SearchField";
import NewsList from "@/app/_conmponents/NewsList";
import Pagenation from "@/app/_conmponents/Pagenation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const { contents:news , totalCount} = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount}/>
    </>
  );
}