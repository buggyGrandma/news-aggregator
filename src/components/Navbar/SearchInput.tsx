import { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchContext from "../../lib/contexts/searchContext";
const SearchInput = () => {
  const [isExpanded, setExpand] = useState(false);
  const { value, dispatch } = useContext(SearchContext);
  const [q, setQ] = useState(value);
  return (
    <div className="rounded-full h-fit flex items-center bg-gray-200">
      {isExpanded && (
        <input
          onChange={(e) => setQ(e.target.value)}
          className="rounded-l-full px-4 py-2 bg-inherit outline-none"
          placeholder="looking for something?"
        />
      )}

      <button
        onClick={() => {
          isExpanded && dispatch(q);
          setExpand(!isExpanded);
        }}
        className={`bg-indigo-500 hover:bg-indigo-300 h-fit rounded-full px-4 py-2 flex justify-center items-center`}
      >
        <IoSearchOutline className="text-gray-200 text-xl" />
      </button>
    </div>
  );
};

export default SearchInput;
