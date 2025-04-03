import { ContactUs } from "./ContactUs";
import { useState } from "react";

export const Section7 = () => {
  const [selectedOption, setSelectedOption] = useState("domestic");
  return (
    <div className="bg-surface h-[100vh] flex md:flex-row flex-col w-full ju">

      <div className="flex flex-col gap-4 w-64 m-16 justify-center items-center">
        
        <div onClick={() => setSelectedOption("domestic")} className={`h-34 cursor-pointer justify-center items-center flex flex-col rounded-md transition duration-300 p-4 w-64 ${selectedOption === "domestic" ? "bg-blue-900" : "bg-gray-300 hover:bg-gray-400"}`}>
          <p className={`text-2xl font-semibold group-hover:text-orange-500 text-center ${selectedOption === "domestic" ? "white-text" : "text-secondary"}`}>Domestic Students</p>
          <button className={` text-2xl font-semibold hover:text-orange-500 ${selectedOption === "domestic" ? "white-text" : "text-secondary"}`}>Contact us</button>
        </div>

        <div onClick={() => setSelectedOption("international")} className={`h-34 cursor-pointer justify-center items-center flex flex-col rounded-md transition duration-300 p-4 w-64 ${selectedOption === "international" ? "bg-blue-900" : "bg-gray-300 hover:bg-gray-400"}`}>
          <p className={`text-2xl font-semibold hover:text-orange-500 text-center ${selectedOption === "international" ? "white-text" : "text-secondary"}`}>International Students</p>
          <button className={` text-2xl font-semibold hover:text-orange-500 ${selectedOption === "international" ? "white-text" : "text-secondary"}`}>Contact us</button>
        </div>
        
      </div>

     <div className="md:w-[70vw] w-[80vw]">
     {selectedOption === "domestic" ? (
        <div>
          <ContactUs title="Domentic Students" />
        </div>
      ) : (
        <div>
          <ContactUs title="International Students" />
        </div>
      )}
     </div>
    </div>
  );
};
