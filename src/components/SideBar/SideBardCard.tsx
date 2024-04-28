interface Props {
  url: string;
  imgUrl: string;
  title: string;
}
const SideBardCard = ({ url, imgUrl, title }: Props) => {
  return (
    <div className="w-full  rounded-lg gap-1 p-1 bg-gray-100 flex">
      <img className="w-1/4 h-auto rounded-lg" src={imgUrl} alt="" />
      <a
        className="text-indigo-500 hover:underline font-bold text-xs"
        href={url}
        target="/blank"
      >
        {title}
      </a>
    </div>
  );
};

export default SideBardCard;
