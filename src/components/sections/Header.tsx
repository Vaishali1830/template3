import image2 from "../../assets/logo2.jpg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full items-center justify-between flex p-2">
      <div className="flex gap-2 items-center">
        <img src={image2} className="h-15 w-15 rounded-full" />
        <p className="white-text text-3xl font-bold font-serif">Abc School</p>
      </div>
      <Link to="menu">
        <FiMenu size={34} color="" />
      </Link>
    </div>
  );
};
