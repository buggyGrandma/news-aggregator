import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";

interface INewsApiResponse {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}
const CardsContainer = () => {
  const { data: news } = useQuery({
    queryKey: ["newsApiFeed"],
    queryFn: () =>
      axios
        .get<INewsApiResponse>("https://newsapi.org/v2/everything", {
          params: {
            q: "bitcoin",
            apiKey: "27464eba1c8a4976b633c07c3f063f91",
          },
        })
        .then((res) => res.data),
  });

  return (
    <div className="w-full h-full p-5 flex gap-5 flex-wrap ">
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
