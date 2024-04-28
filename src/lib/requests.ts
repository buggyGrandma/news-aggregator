import axios from "axios";

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

export const fetchNews = (q: string) =>
  axios
    .get<INewsApiResponse>("https://newsapi.org/v2/everything", {
      params: {
        q,
        apiKey: "27464eba1c8a4976b633c07c3f063f91",
      },
    })
    .then((res) => res.data);
