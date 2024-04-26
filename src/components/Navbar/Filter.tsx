import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const Filter = () => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <div className="flex  items-center  gap-2 transition-transform ease-in-out duration-500 bg-gray-200 rounded-full  ">
      <button
        className={` ${
          isExpanded ? "rounded-l-full" : "rounded-full"
        } p-2 h-full bg-indigo-500 hover:bg-indigo-300`}
        onClick={() => setExpand(!isExpanded)}
      >
        <CiFilter />
      </button>
      {isExpanded && (
        <>
          <FilterItem title="date" />
          <FilterItem title="category" />
          <FilterItem title="source" />
          <button
            onClick={() => setExpand(false)}
            className={
              "rounded-r-full text-justify  p-2 h-full bg-indigo-500 hover:bg-indigo-300"
            }
          >
            Ok
          </button>
        </>
      )}
    </div>
  );
};

const FilterItem = ({ title }: { title: string }) => {
  return (
    <input
      className=" w-40 px-4 py-2 bg-inherit outline-none  border-x-2 border-l-indigo-500"
      placeholder={title}
    />
  );
};
export default Filter;
