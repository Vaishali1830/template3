interface CardProps {
  title: string;
  description: string;
  list: string[];
}

interface CardData {
  data: CardProps[];
}
export const Card: React.FC<CardData> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {data.map((card, index) => (
        <div
          key={index}
          className="h-[65vh] w-[25vw] flex flex-col gap-4 bg-white p-8 rounded-lg hover:border-3 hover:border-blue-600 shadow-md"
        >
          <h2 className="text-2xl font-bold anchor-text">{card.title}</h2>
          <p className="text-secondary">{card.description}</p>
          <ul className="list-disc list-inside">
            {card.list.map((item, index) => (
              <li key={index} className=" mb-4 anchor-text">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
