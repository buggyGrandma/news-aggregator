import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className="w-full flex p-2 gap-5 backdrop-blur-sm sticky top-0 border border-b-2 rounded-b-lg">
      <SearchInput />
    </div>
  );
};

export default Navbar;
