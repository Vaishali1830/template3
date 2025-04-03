interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

interface blogData {
  data: BlogCardProps[];
}

export const BlogCard: React.FC<blogData> = ({ data }) => {
  return (
    <div>
      {data.map((card, index) => (
        <div
          key={index}
          className="bg-surface h-fit flex flex-col justify-center gap-4 shadow-lg m-8"
        >
          <img src={card.image} alt="Blog Image" className="h-[50vh] object-cover" />
          <div className="flex flex-col gap-6 m-4">
            <h2 className="text-2xl font-bold hover:text-orange-500">
              {card.title}
            </h2>
            <p className="text-blue-400 text-sm font-bold">{card.date}</p>
            <p className="hover:text-orange-500">{card.description}</p>
            <button className="hover:bg-blue-400 bg-gray-200 text-blue-400 w-24 p-0.5 rounded-lg hover:text-white font-semibold">
              READ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
