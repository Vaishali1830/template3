import { BlogCard } from "./BlogCard";
import { BlogCard2 } from "./BlogCard2";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import img5 from "../../assets/img5.webp"
import img6 from "../../assets/img7.jpg";
import img7 from "../../assets/img8.jpg";
import { EventCard } from "./EventCard";

export const Section5 = () => {
  const blog1 = [
    {
      image: img1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "March 31, 2025",
    },
  ];

  const blog2 = [
    {
      image: img2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "March 31, 2025",
    },
  ];

  const blog3 = [
    {
      image: img3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "March 31, 2025",
    },
  ];

  const events = [
    {
      date: "09",
      month: "APR",
      day: "WED",
      title: "Wellness Wednesday",
      image: img7,
    },
    {
      date: "09",
      month: "MAR",
      day: "SUN",
      title: "SABVC Massages for Mental Health",
      image: img6,
    },
    {
      date: "22",
      month: "JAN",
      day: "TUE",
      title: "SABVC Massages for Mental Health",
      image: img5,
    },
    {
      date: "14",
      month: "SEP",
      day: "SAT",
      title: "SABVC Massages for Mental Health",
      image: img3,
    },
    {
      date: "04",
      month: "APR",
      day: "FRI",
      title: "SABVC Massages for Mental Health",
      image: img2,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-fit w-full flex flex-col items-center justify-center gap-4">
      <p className="white-text text-5xl font-semibold mt-12">News & Event</p>
      <div className="grid md:grid-cols-2 w-[90vw] gap-8 flex-wrap md:ml-24">
        <div className="md:w-[48vw] ">
          <BlogCard data={blog1} />
          <BlogCard2 data={blog2} />
          <BlogCard2 data={blog3} />
          <button className="bg-sky-400 p-2 w-34 white-text font-semibold ml-8 mb-8 hover:bg-sky-500">ALL NEWS</button>
        </div>
        <div className="flex flex-col gap-4 w-[60vw] md:w-[24vw] md:ml-20">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
          <button className="bg-sky-400 p-2 w-34 white-text font-semibold hover:bg-sky-500">ALL EVENT</button>
        </div>
      </div>
    </div>
  );
};
