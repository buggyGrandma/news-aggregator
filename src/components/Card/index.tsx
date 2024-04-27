import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

interface Props {
  title: string;
  imageUrl: string;
  url: string;
  content: string;
  description: string;
  source: string;
  date: string;
  author: string;
}

const Card = ({
  title,
  imageUrl,
  url,
  content,
  description,
  source,
  date,
  author,
}: Props) => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <div className="flex flex-col w-full h-fit max-w-72 rounded-lg bg-gray-200">
      <img className="w-full h-auto rounded-t-lg" src={imageUrl} alt={title} />
      <div className="flex flex-col p-2 gap-2">
        <a
          target="/blank"
          href={url}
          className="text-lg font-black text-indigo-700 hover:underline"
        >
          {title}
        </a>
        <p className="text-sm font-bold">{description}</p>
        {isExpanded && (
          <p className="text-xs text-gray-500 bg-gray-100 rounded-lg p-2">
            {content}
          </p>
        )}

        <button
          className="text-xs hover:underline"
          onClick={() => setExpand(!isExpanded)}
        >
          {isExpanded ? "hide " : "show "}details...
        </button>
        <div className="flex gap-2 items-center w-full">
          <div className="rounded-full bg-gray-400 p-1">
            <CiUser className="text-gray-200 text-xl" />
          </div>
          <p className="text-sm">{author}</p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="rounded-full bg-gray-400 p-1">
            <IoMdPaper className="text-gray-200 text-xl" />
          </div>
          <p className="text-sm">{source}</p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="rounded-full bg-gray-400 p-1">
            <MdOutlineDateRange className="text-gray-200 text-xl" />
          </div>
          <p className="text-sm">{new Date(date).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
