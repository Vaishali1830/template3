import { motion } from "framer-motion";
import image2 from "../../../assets/logo2.jpg";
import { FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ListComp } from "./List";
import { useState } from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Menupage = () => {
  const navigate = useNavigate();

  const links = [
    { title: "Study", route: "study" },
    { title: "Apply", route: "apply" },
    { title: "Student Life", route: "studentlife" },
    { title: "Applied Research", route: "research" },
    { title: "About Us", route: "about" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("study");

  const studyData = [
    {
      title: "Study",
      Items: [
        {
          subtitle: "Programs & courses",
          subItems: [
            "Find a Program",
            "How to Apply",
            "Tuitions & Fees",
            "Financial Aid & Awards",
            "Why Abc College",
          ],
        },
        {
          subtitle: "By Area of Interest",
          subItems: [
            "Business",
            "Entertainment Arts",
            "Technology",
            "Health & Wellness",
            "Community Studies",
          ],
        },
        {
          subtitle: "Professional Development",
          subItems: [
            "Overview",
            "Extended Education",
            "Pivot-Ed Micro-Credentials",
            "Corporate Training",
          ],
        },
        {
          subtitle: "High School",
          subItems: ["How to Apply", "Indigenous Pathways to Employment"],
        },
        {
          subtitle: "International Students",
          subItems: [
            "Why Abc College",
            "Programs & Courses",
            "Tuitions & Fees",
            "How to Apply",
          ],
        },
      ],
    },
  ];
  const applyData = [
    {
      title: "Apply",
      Items: [
        {
          subtitle: "Ready to Apply",
          subItems: [
            "I am ready to apply",
            "First-year Student",
            "Academic Upgrading",
            "Professional Development",
            "International Student",
          ],
        },
        {
          subtitle: "Dates & Deadlines",
          subItems: ["Dates & Deadlines"],
        },
        {
          subtitle: "My Application",
          subItems: ["Application FAQs", "What to expect after applying"],
        },
        {
          subtitle: "Financial Aid & Awards",
          subItems: [
            "Overview",
            "Financial Aid & Awards",
            "Funding information for Indigenous Students",
            "Awards",
            "International Student",
          ],
        },
      ],
    },
  ];
  const studentLifeData = [
    {
      title: "Student Life",
      Items: [
        {
          subtitle: "Campus Life",
          subItems: [
            "Campus Spaces",
            "Campus Directions",
            "News & Events",
            "Living in Calgary",
            "Library",
          ],
        },
        {
          subtitle: "Student Support",
          subItems: [
            "Academic Services",
            "Financial Aid & Awards",
            "Health & Wellness",
            "Accessibility Services",
          ],
        },
        {
          subtitle: "Career & Employment",
          subItems: [
            "Career Coaching",
            "Career Support Programs",
            "Directions for immigrants",
            "Living in Calgary",
            "Library",
          ],
        },
        {
          subtitle: "Graduation & Convocation",
          subItems: ["Graduation Information", "Convocation Videos"],
        },
      ],
    },
  ];
  const researchData = [
    {
      title: "Applied Research",
      Items: [
        {
          subtitle: "Our Pillars",
          subItems: ["Overview", "Research Facilities"],
        },
        {
          subtitle: "Get Involved",
          subItems: ["Partner with us", "Become a resarch assistant"],
        },
      ],
    },
  ];
  const aboutData = [
    {
      title: "About Us",
      Items: [
        {
          subtitle: "Get to know us",
          subItems: ["Our History", "Our Campus"],
        },
        {
          subtitle: "Our Organization",
          subItems: [
            "Office of the President",
            "Board of Governors",
            "Executive Offices and Governance",
            "Strategic Plan",
          ],
        },
        {
          subtitle: "Schools",
          subItems: [
            "Community Studies",
            "Foundational Learning",
            "Health & Wellness",
            "Center of Entertainment Arts",
          ],
        },
        {
          subtitle: "News & Events",
          subItems: ["All our News & Events"],
        },
        {
          subtitle: "Contact us",
          subItems: ["For High School & Agency Staff"],
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-surface z-50 shadow-lg p-6 overflow-y-auto"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={image2} className="h-12 w-12 rounded-full" alt="Logo" />
          <p className="text-primary text-2xl font-bold font-serif">
            Abc School
          </p>
        </div>
        {/* Close Button */}
        <button onClick={() => navigate(-1)}>
          <FiX size={34} className="text-primary" />
        </button>
      </div>

      <div className="border-b-1 border-color w-full mt-2"></div>

      <div className="flex gap-6 font-medium text-md m-6">
        {links.map((link) => (
          <button
            key={link.route}
            onClick={() => setSelectedValue(link.route)}
            className={`text-lg ${
              selectedValue === link.route ? " text-blue-500" : ""
            }`}
          >
            {link.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div>
          {selectedValue === "study" && <ListComp Data={studyData} />}
          {selectedValue === "apply" && <ListComp Data={applyData} />}
          {selectedValue === "studentlife" && (
            <ListComp Data={studentLifeData} />
          )}
          {selectedValue === "research" && <ListComp Data={researchData} />}
          {selectedValue === "about" && <ListComp Data={aboutData} />}
        </div>

        <div className="m-12  bg-gray-200 w-[18vw] h-[40vh] p-6">
          <p className="text-blue-600 text-sm mb-4">QUICK LINKS</p>
          <ul className="text-sm text-secondary">
            <li className="mb-2 hover:text-blue-600 cursor-pointer">
              Alumni, Partners and Donors
            </li>
            <li className="mb-2 hover:text-blue-600 cursor-pointer">
              RGO Library{" "}
            </li>
            <li className="mb-2 hover:text-blue-600 cursor-pointer">
              Login to D2L
            </li>
            <li className="mb-2 hover:text-blue-600 cursor-pointer">
              Login to MyBVC
            </li>
            <li className="mb-2 hover:text-blue-600 cursor-pointer">
              Why Bow Valley College
            </li>
          </ul>
        </div>
      </div>

      <div className="border-b-1 border-color w-full mt-2"></div>

      <div className="flex justify-between m-8">
        <div className="flex gap-4">
          <FaInstagram size={24} />
          <FaYoutube size={24} />
          <FaTwitter size={24} />
        </div>

        <div>
          <p>Calgary Downtown</p>
          <p>345 - 6 Avenue SE,</p>
        </div>

        <div>
          <Link to="/" className="hover:text-blue-600">
            info@abccollege.ca
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Menupage;
