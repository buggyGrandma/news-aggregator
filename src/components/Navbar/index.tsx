import Filter from "./Filter";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className="w-full flex p-2 gap-5 backdrop-blur-sm sticky top-0 border border-b-2 border-b-indigo-500 rounded-b-lg">
      <SearchInput />
      <Filter />
    </div>
  );
};

export default Navbar;
