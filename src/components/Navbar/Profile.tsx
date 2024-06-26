import { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import FilterContext from "../../lib/contexts/filterContext";

const Profile = () => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <>
      <div className="flex  items-center h-fit gap-2 transition-transform ease-in-out duration-500 bg-gray-200 rounded-full  ">
        <button
          className=" rounded-full p-2 h-fit bg-indigo-500 hover:bg-indigo-300"
          onClick={() => setExpand(!isExpanded)}
        >
          <CiUser className="text-gray-200 text-xl" />
        </button>
      </div>
      {isExpanded && (
        <div
          onClick={() => setExpand(false)}
          className="absolute z-10 w-screen h-screen bg-black bg-opacity-30 top-0 left-0"
        >
          <Modal setClose={setExpand} />
        </div>
      )}
    </>
  );
};

const Modal = ({ setClose }: { setClose: (e: boolean) => void }) => {
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const { filters, FilterDispatch } = useContext(FilterContext);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-72 flex flex-col items-center p-5 gap-3 absolute rounded-lg bg-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
    >
      <p className="text-lg font-bold text-indigo-500">Alireza Khosravanifar</p>
      <div className="flex flex-col gap-2 items-start w-full ">
        <p className="text-bold">Preferences:</p>
        <Input title="sources" OnChange={setSource} />
        <Input title="category" OnChange={setCategory} />
        <Input title="author" OnChange={setAuthor} />
      </div>
      <button
        onClick={() => {
          FilterDispatch({ ...filters, category, source, author });
          setCategory("");
          setSource("");
          setAuthor("");
          setClose(false);
        }}
        className=" rounded-full bg-indigo-500 py-2 px-10 text-gray-200"
      >
        Submit
      </button>
    </div>
  );
};

const Input = ({
  title,
  OnChange,
}: {
  title: string;
  OnChange: (e: string) => void;
}) => {
  return (
    <input
      onChange={(e) => OnChange(e.target.value)}
      className="w-full p-2 px-4 rounded-full "
      placeholder={title}
    />
  );
};
export default Profile;
