import image1 from "../../assets/bg2.jpeg";
import image2 from "../../assets/logo2.jpg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Section1 = () => {
  return (
    <div className="relative">
      <img src={image1} className="w-[100vw] h-[100vh] object-cover" />
      <div className="absolute top-0 left-0 w-full items-center justify-between flex p-2">
        <div className="flex gap-2 items-center">
          <img src={image2} className="h-15 w-15 bg-surface" />
          <p className="white-text text-3xl font-bold font-serif">Abc School</p>
        </div>
        <Link to="/menu">
          <FiMenu size={34} color="white" className="fixed -ml-13" />
        </Link>
      </div>
    </div>
  );
};
