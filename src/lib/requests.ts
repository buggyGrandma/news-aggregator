import axios from "axios";
import { IFilters } from "./reducers/filterReducer";

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

export const fetchNews = (q: string, filters: IFilters) =>
  axios
    .get<INewsApiResponse>("https://newsapi.org/v2/everything", {
      params: {
        q,
        apiKey: "dd0582dc79464791a38f7286da35ba64",
        from: filters.from,
        to: filters.to,
        sources: filters.source,
        author: filters.author,
      },
    })
    .then((res) => res.data);

export const fetchHeadlines = (filters: IFilters) =>
  axios
    .get<INewsApiResponse>("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: "dd0582dc79464791a38f7286da35ba64",
        country: "us",
        from: filters.from,
        to: filters.to,
        sources: filters.source,
        author: filters.author,
      },
    })
    .then((res) => res.data);
