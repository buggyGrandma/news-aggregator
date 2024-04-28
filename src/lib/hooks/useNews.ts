import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../requests";
import { IFilters } from "../reducers/filterReducer";

const useNews = (q: string, filters: IFilters) =>
  useQuery({
    queryKey: ["newsApiFeed", q, filters],
    queryFn: () => fetchNews(q, filters),
    refetchOnWindowFocus: false,
  });

export default useNews;
