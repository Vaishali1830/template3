import React from "react";

interface EventCardProps {
  date: string;
  month: string;
  day: string; 
  title: string;
  image: string; 
}

export const EventCard: React.FC<EventCardProps> = ({ date, month, day, title, image }) => {
  return (
    <div className="flex bg-surface shadow-lg rounded-lg w-full mt-8 hover:scale-105 transform transition-all duration-3000">
      {/* Date Block */}
      <div className="bg-gray-200 rounded-lg py-3 flex flex-col items-center justify-center text-secondary w-20 ">
        <span className="text-lg font-bold">{month}</span>
        <div className="border-dashed border-1 border-orange-500 w-10"></div>
        <span className="text-3xl font-extrabold">{date}</span>
        <div className="border-dashed border-1 border-orange-500 w-10"></div>
        <span className="text-sm uppercase">{day}</span>
      </div>

      {/* Event Info */}
      <div className="flex flex-col p-3">
        <img src={image} alt={title} className="w-50 h-28 object-cover rounded-md mb-3" />
        <p className="text-secondary font-semibold">{title}</p>
      </div>
    </div>
  );
};


