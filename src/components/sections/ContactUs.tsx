import { useState } from "react";

interface ContactProps {
  title: string;
}

export const ContactUs: React.FC<ContactProps> = ({ title }) => {
  const [selectedOption, setSelectedOption] = useState("yes");
  return (
    <div className="bg-white shadow-2xl p-8 md:m-8">
      <h1 className="text-4xl font-semibold text-blue-500 text-center m-12">{title}</h1>
      <form>

        <div className="m-6 flex flex-col gap-2">
          <label className="text-secondary text-lg">First Name</label>
          <input type="text" name="firstname" className="p-2 border border-color focus:outline-none"/>
        </div>

        <div className="m-6 flex flex-col gap-2">
          <label className="text-secondary text-lg">Last Name</label>
          <input type="text" name="lastname" className="p-2 border border-color focus:outline-none"/>
        </div>

        <div className="m-6 flex flex-col gap-2">
          <label className="text-secondary text-lg">Email Address</label>
          <input type="text" name="email" className="p-2 border border-color focus:outline-none"/>
        </div>

        <div className="m-6 flex flex-col gap-2">
          <label className="text-secondary text-lg">Subscribe for updates</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="p-2 border border-color focus:outline-none"
          >
            <option value="yes" className="text-secondary">Yes</option>
            <option value="no" className="text-secondary">No</option>
          </select>
        </div>

        <div className="flex justify-center">
            <button className="bg-sky-500 p-3 rounded-md white-text text-lg hover:bg-orange-500">
                +Connect with Us 
            </button>
        </div>
      </form>
    </div>
  );
};
