import { motion } from "framer-motion";
import TestimonialCard from "./TestimonalCard";
import pic1 from "../../assets/person1.jpeg";
import pic2 from "../../assets/person2.jpg";
import pic3 from "../../assets/person3.jpeg";
import pic4 from "../../assets/person4.jpg";
import pic5 from "../../assets/person6.jpg";

export const Section6 = () => {
  const testimonials = [
    {
      text: "The Chiu School of Business is truly engaged in helping students succeed in their professional paths. The instructors have vast experience, making the learning process very enriched. I’m starting a full-time position and Bow Valley College helped me enhance my management skills and abilities to be more attractive to companies that were hiring.",
      author: "Gagandeep Batth",
      position: "Student",
      image: pic1,
    },
    {
      text: "Choosing BVC was a game-changer for my career. The strong connections between the college and industry leaders gave me access to internships and job opportunities that I wouldn’t have had otherwise.",
      author: "Octavio Gonzalez",
      position: "School of Technology",
      image: pic2,
    },
    {
      text: "Choosing BVC was a game-changer for my career. The strong connections between the college and industry leaders gave me access to internships and job opportunities that I wouldn’t have had otherwise.",
      author: "Octavio Gonzalez",
      position: "School of Technology",
      image: pic3,
    },
    {
      text: "Choosing BVC was a game-changer for my career. The strong connections between the college and industry leaders gave me access to internships and job opportunities that I wouldn’t have had otherwise.",
      author: "Octavio Gonzalez",
      position: "School of Technology",
      image: pic4,
    },
  ];
  return (
    <div className="relative flex h-[100vh] items-center gap-8 overflow-hidden bg-blue-900">
      <div className="m-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold white-text">What people are saying?</h1>
        <h1 className="text-5xl font-bold text-orange-500">Students and alumni</h1>
        <p className="text-xl font-semibold white-text">
          What's it like to study at Bow Valley College? Hear from current
          students and alumni about their experiences and how our programs are
          helping them shape their careers.
        </p>
      </div>

      <motion.div
        className="flex flex-col space-x-8 m-8"
        animate={{ y: ["50%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <TestimonialCard {...testimonials[0]} />
        <img
          src={pic5}
          className="h-64 w-74 object-cover mt-6 mb-6 ml-3 rounded-lg"
        />
        <TestimonialCard {...testimonials[2]} />
        <img
          src={pic3}
          className="h-64 w-74 object-cover mt-6 mb-6 ml-3 rounded-lg"
        />
      </motion.div>

      <motion.div
        className="flex flex-col space-x-8 m-8"
        animate={{ y: [-"50%", "100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <TestimonialCard {...testimonials[1]} />
        <img
          src={pic1}
          className="h-64 w-74 object-cover mt-6 mb-6 ml-3 rounded-lg"
        />
        <TestimonialCard {...testimonials[3]} />
        <img
          src={pic4}
          className="h-64 w-74 object-cover mt-6 mb-6 ml-3 rounded-lg"
        />
      </motion.div>
    </div>
  );
};
