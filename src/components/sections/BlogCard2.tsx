interface BlogCardProps {
  image: string;
  title: string;
  date: string;
}

interface blogData {
  data: BlogCardProps[];
}

export const BlogCard2: React.FC<blogData> = ({ data }) => {
  return (
    <div>
      {data.map((card, index) => (
        <div
          key={index}
          className="bg-surface flex justify-center gap-4 shadow-lg m-8"
        >
          <img
            src={card.image}
            alt="Blog Image"
            className="h-[30vh] w-[50vw] md:w-[30vw] object-cover mt-6 ml-8 md:ml-2"
          />
          <div className="flex flex-col gap-6 m-4 justify-center ">
            <h2 className="text-xl font-bold hover:text-orange-500">
              {card.title}
            </h2>
            <p className="text-blue-400 text-sm font-bold">{card.date}</p>{" "}
            <button className="hover:bg-blue-400 bg-gray-200 text-blue-400 w-24 p-0.5 rounded-md hover:text-white font-semibold">
              READ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
