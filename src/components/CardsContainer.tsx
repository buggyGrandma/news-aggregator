import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../lib/requests";
import Card from "./Card";
import CardSkeleton from "./Card/CardSkeleton";

const CardsContainer = () => {
  const { data: news, isLoading } = useQuery({
    queryKey: ["newsApiFeed"],
    queryFn: fetchNews,
  });
  return (
    <div className="w-full h-full p-5 flex flex-wrap gap-3  ">
      {isLoading && new Array(10).fill(0).map(() => <CardSkeleton />)}
      {news &&
        news.articles.map((item) => (
          <Card
            key={item.url}
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
