import { useContext } from "react";
import FilterContext from "../../lib/contexts/filterContext";
import { useHeadLines } from "../../lib/hooks";
import SideBardCard from "./SideBardCard";
import SideBarCardSkeleton from "./SideBarCardSkeleton";

const SideBar = () => {
  const { filters } = useContext(FilterContext);
  const { data: headlines, isLoading } = useHeadLines(filters);
  return (
    <div className="w-80 h-fit hidden bg-gray-300 rounded-br-lg md:flex flex-col p-2 gap-2 items-center">
      <h6 className="text-lg font-bold">Top Headlines:</h6>
      {isLoading &&
        new Array(10)
          .fill(0)
          .map((_, index) => <SideBarCardSkeleton key={index} />)}
      {headlines &&
        headlines.articles.map((item, index) => (
          <SideBardCard
            imgUrl={item.urlToImage}
            title={item.title}
            url={item.url}
            key={index}
          />
        ))}
    </div>
  );
};

export default SideBar;
