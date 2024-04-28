import { useQuery } from "@tanstack/react-query";
import { fetchHeadlines, fetchNews } from "./requests";
import { IFilters } from "./reducers/filterReducer";

export const useNews = (q: string, filters: IFilters) =>
  useQuery({
    queryKey: ["newsApiFeed", q, filters],
    queryFn: () => fetchNews(q, filters),
    refetchOnWindowFocus: false,
  });

export const useHeadLines = (filters: IFilters) =>
  useQuery({
    queryKey: ["headlines", filters],
    queryFn: () => fetchHeadlines(filters),
    refetchOnWindowFocus: false,
  });
