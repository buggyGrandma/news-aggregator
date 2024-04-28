import Filter from "./Filter";
import Profile from "./Profile";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className=" w-full h-fit flex justify-between p-2 gap-5 backdrop-blur-sm fixed top-0 border border-b-2 border-b-indigo-500 rounded-b-lg">
      <div className="flex gap-5">
        <SearchInput />
        <Filter />
      </div>
      <Profile />
    </div>
  );
};

export default Navbar;
