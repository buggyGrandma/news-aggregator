import { IoSearchOutline } from "react-icons/io5";
const SearchInput = () => {
  return (
    <div className="rounded-full flex items-center bg-gray-200">
      <input
        className="rounded-l-full px-4 py-2 bg-inherit outline-none"
        placeholder="looking for something?"
      />
      <button className="bg-indigo-500 hover:bg-indigo-300 h-full rounded-r-full bg-inherit px-4 py-2 flex justify-center items-center">
        <IoSearchOutline className="text-gray-200 text-xl font-black" />
      </button>
    </div>
  );
};

export default SearchInput;
