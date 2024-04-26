import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchInput = () => {
  const [isExpanded, setExpand] = useState(false);

  return (
    <div className="rounded-full flex items-center bg-gray-200">
      {isExpanded && (
        <input
          className="rounded-l-full px-4 py-2 bg-inherit outline-none"
          placeholder="looking for something?"
        />
      )}

      <button
        onClick={() => setExpand(!isExpanded)}
        className={`bg-indigo-500 hover:bg-indigo-300 h-full ${
          isExpanded ? "rounded-r-full" : "rounded-full"
        } bg-inherit px-4 py-2 flex justify-center items-center`}
      >
        <IoSearchOutline className="text-gray-200 text-xl" />
      </button>
    </div>
  );
};

export default SearchInput;
