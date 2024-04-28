import { useContext } from "react";
import SearchContext from "../lib/contexts/searchContext";
import useNews from "../lib/hooks/useNews";
import Card from "./Card";
import CardSkeleton from "./Card/CardSkeleton";

const CardsContainer = () => {
  const { value } = useContext(SearchContext);
  const { data: news, isLoading } = useNews(value);
  return (
    <div className="w-full h-full p-5 flex justify-evenly flex-wrap gap-3  ">
      {isLoading &&
        new Array(10).fill(0).map((_, i) => <CardSkeleton key={i} />)}
      {news &&
        news.articles
          .filter((item) => item.title !== "[Removed]")
          .map((item, i) => (
            <Card
              key={i}
              author={item.author}
              content={item.content}
              date={item.publishedAt}
              description={item.description}
              imageUrl={item.urlToImage}
              source={item.source.name}
              title={item.title}
              url={item.url}
            />
          ))}
    </div>
  );
};

export default CardsContainer;
