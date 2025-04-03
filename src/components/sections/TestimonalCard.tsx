import React from "react";

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, author, position, image }) => {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-lg w-80">
      <p className="text-md mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={author} className="w-15 h-15 rounded-full object-cover border-3 border-gray-400" />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm opacity-80">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
