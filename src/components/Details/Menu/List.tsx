import { useState } from "react";

interface subListItems {
  subtitle: string;
  subItems: string[];
}

interface ListItems {
  title: string;
  Items: subListItems[];
}

interface MenuProps {
  Data: ListItems[];
}

export const ListComp: React.FC<MenuProps> = ({ Data }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<string>(Data[0]?.Items[0]?.subtitle || "")
    useState<string>("Programs & courses");

  const handleCategory = (categoryIndex: number) => {
    setSelectedCategory(categoryIndex);
    setSelectedItem(Data[categoryIndex]?.Items[0]?.subtitle || "");
  };

  return (
    <div className="grid grid-cols-3 m-6 gap-10">
      <div>
        {Data.map((item, index) => (
          <div key={index}>
            <h2
              className="text-secondary m-2 cursor-pointer"
              onClick={() => handleCategory(index)}
            >
              {item.title}
            </h2>
            {item.Items.map((subitem, subindex) => (
              <div key={subindex}>
                <button
                  onClick={() => setSelectedItem(subitem.subtitle)}
                  className={`m-2 font-medium ${
                    selectedItem === subitem.subtitle ? "text-blue-600" : ""
                  }`}
                >
                  {subitem.subtitle}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-l-2 md:ml-20 divide-dotted border-color"></div>

      <div className="mt-11 md:ml-20">
        {Data[selectedCategory].Items.map(
          (subitem, subindex) =>
            selectedItem === subitem.subtitle && (
              <ul key={subindex} className="flex flex-col gap-2">
                {subitem.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )
        )}
      </div>
    </div>
  );
};
