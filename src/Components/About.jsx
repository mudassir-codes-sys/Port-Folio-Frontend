import { HiOutlineCodeBracket } from "react-icons/hi2";
import Lines from "../Lines";
import { FaPenNib } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "./Heading";

const cardInfo = [
  {
    title: "DESIGN",
    icon: FaPenNib,
    para: "I focus on creating clean, modern, and user-friendly interfaces. My goal is to design layouts that are visually appealing and easy to use across all devices.",
  },
  {
    title: "Development",
    icon: FaCode,
    para: "I build scalable and efficient web applications using the MERN stack. I enjoy turning ideas into functional products with clean and maintainable code.",
  },
];

function About() {
  const isMobile = window.innerWidth < 640;
  return (
    <div id="about" className="bg-[#d7d7d7] w-full p-5 h-auto">
      <Heading title="About Me" />

      {/* ---------------------para-------------------- */}
      <div className="flex pt-10  px-10 mx-auto max-w-lg justify-center">
        <p>
          I'm a Full-Stack Developer focused on building scalable web
          applications using modern technologies like React, Node.js, and
          MongoDB.
        </p>
      </div>

      {/* ------------------------Explore------------------------------ */}
      <div className="pt-24  flex justify-center">
        <h2 className="text-2xl border-r-3 border-l-3 font-bold px-7">
          Explore
        </h2>
      </div>

      <Lines />

      {/* ------------------------------3 Headings---------------------------  */}
      <div
        className="flex lg:gap-0  flex-col sm:flex-row gap-8  justify-between
         items-center mt-28 lg:px-20 px-3 "
      >
        {cardInfo.map((card, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -60,
              y: isMobile ? 60 : 0,
            }}
            whileInView={{ opacity: 100, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:max-w-sm  w-full"
          >
            <div className="flex gap-3 items-center">
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <card.icon size={22} />
            </div>

            <p className="pt-3">{card.para}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="sm:mt-20 mt-10  flex sm:justify-center justify-start   pb-25 flex-col  items-start sm:items-center px-4"
      >
        <div className="sm:max-w-md w-full">
          <div className="flex items-center gap-3  ">
            <h3 className="text-2xl text-left font-bold">Maintenance</h3>
            <FaTools size={22} />
          </div>
          <p className="pt-3">
            I ensure applications remain up-to-date, secure, and optimized. I
            continuously improve performance, fix issues, and add enhancements
            when needed.
          </p>
        </div>
      </motion.div>

      <Lines />
    </div>
  );
}

export default About;
