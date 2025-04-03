import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import image from '../../assets/logo2.jpg'

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 text-center h-[70vh]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex items-center space-x-4">
          <img src={image} alt="Bow Valley College" className="h-22" />
        </div>

        <div className="text-secondary flex flex-col gap-6 mt-12">
          <h3 className="font-semibold text-lg">Connect with us</h3>
          <p>Abc College</p>
          <p>345 - 6 Avenue SE, Calgary, AB T2G 4V1</p>
          <p>
            📧{" "}
            <a
              href="mailto:info@bowvalleycollege.ca"
              className="text-blue-500 hover:underline"
            >
              info@bowvalleycollege.ca
            </a>
          </p>
          <p> +1 403-410-1400</p>
          <p> 1-866-428-2669 (Toll-Free)</p>
        </div>

        <div className="text-secondary">
          <h3 className="font-semibold text-lg">Follow us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-orange-600 text-xl hover:text-orangw=e-800">
              <FaInstagram/>
            </a>{" "}
            
            <a href="#" className="text-blue-500 text-xl hover:text-blue-700">
              <FaTwitter/>
            </a>{" "}

            <a
              href="#"
              className="text-red-600 text-xl hover:text-red-800"
            >
              <FaYoutube/>
            </a>{" "}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-secondary text-sm">
        <p>
          © 2024 Abc College. All rights reserved.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};
