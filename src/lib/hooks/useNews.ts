import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../requests";

const useNews = (q: string) =>
  useQuery({
    queryKey: ["newsApiFeed", q],
    queryFn: () => fetchNews(q),
  });

export default useNews;
