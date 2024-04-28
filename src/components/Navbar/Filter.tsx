import { useContext, useState } from "react";
import { CiFilter } from "react-icons/ci";
import FilterContext from "../../lib/contexts/filterContext";

const Filter = () => {
  const [isExpanded, setExpand] = useState(false);
  const { FilterDispatch } = useContext(FilterContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  return (
    <div className="flex  items-center  gap-2 transition-transform ease-in-out duration-500 bg-gray-200 rounded-full  ">
      <button
        className={` ${
          isExpanded ? "rounded-l-full" : "rounded-full"
        } p-2 h-full bg-indigo-500 hover:bg-indigo-300`}
        onClick={() => setExpand(!isExpanded)}
      >
        <CiFilter className="text-gray-200 text-xl" />
      </button>
      {isExpanded && (
        <>
          <FilterItem OnChange={setFrom} title="form:2024-04-28" />
          <FilterItem OnChange={setTo} title="to:2024-04-28" />
          <FilterItem OnChange={setCategory} title="category" />
          <FilterItem OnChange={setSource} title="source" />
          <button
            onClick={() => {
              FilterDispatch({ category, source, from, to });
              setCategory("");
              setSource("");
              setFrom("");
              setTo("");
              setExpand(false);
            }}
            className={
              "rounded-r-full text-justify text-gray-200 p-2 h-full bg-indigo-500 hover:bg-indigo-300"
            }
          >
            Ok
          </button>
        </>
      )}
    </div>
  );
};

const FilterItem = ({
  title,
  OnChange,
}: {
  title: string;
  OnChange: (e: string) => void;
}) => {
  return (
    <input
      onChange={(e) => OnChange(e.target.value)}
      className=" w-40 px-4 py-2 bg-inherit outline-none  border-x-2 border-l-indigo-500"
      placeholder={title}
    />
  );
};
export default Filter;
