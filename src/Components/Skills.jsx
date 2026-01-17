import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import Js from "../assets/JavaScript-logo.png";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMongodb, DiMysql } from "react-icons/di";
import Api from "../assets/rest-api-icon.webp";
import Express from "../assets/expressjs.svg";
import { IoIosGitMerge } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiZod } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { easeOut, motion } from "framer-motion";
import AnimatedIcons from "./IconBg";
import { useState } from "react";

const sectionEmoji = {
  Frontend: "🎨",
  Backend: "⚙️",
  Tools: "🛠️",
  Others: "💡",
};

const skillsList = {
  Frontend: [
    { name: "HTML", icon: FaHtml5, color: "#E34F26", level: 90 },
    { name: "CSS", icon: FaCss3, color: "#1572B6", level: 90 },
    { name: "JavaScript", icon: null, image: Js, level: 85 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
    { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
    { name: "Next.js", icon: RiNextjsFill, color: "#000000", level: 90 },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "#38BDF8", level: 90 },
  ],

  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 90 },
    { name: "Express", image: Express, level: 95 },
    { name: "MySQL", icon: DiMysql, color: "#4479A1", level: 75 },
    { name: "Mongo DB", icon: DiMongodb, color: "#47A248", level: 80 },
    { name: "Rest API", image: Api, level: 90 },
  ],

  Tools: [
    { name: "Git", icon: IoIosGitMerge, color: "#F05032", level: 85 },
    { name: "GitHub", icon: FaGithub, color: "#181717", level: 85 },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 95 },
    { name: "NPM", icon: SiNpm, color: "#CB3837", level: 95 },
    { name: "VSCode", icon: VscVscode, color: "#007ACC", level: 95 },
  ],

  Others: [
    { name: "Zod", icon: SiZod, color: "#7C3AED", level: 80 },
    { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", level: 80 },
  ],
};

function Skills() {
  const [selected, setSelected] = useState("Frontend");
  return (
    <div
      id="skills"
      className="bg-[#d7d7d7] min-h-screen max-h-auto px-10 relative "
    >
      <div className="pt-32 flex mb-20 justify-center ">
        <h1 className=" text-4xl border-4 px-15 py-4 font-bold inline">
          SKILLS
        </h1>
      </div>

      {/* Frontend */}

      <AnimatedIcons />

      <motion.div
        key={selected}
        initial={{ scale: 0.96, opacity: 0.95 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full z-50 relative flex md:flex-row flex-col   gap-4"
      >
        {/* left */}

        <div className="flex md:flex-col flex-row  md:overflow-hidden scroll-hide overflow-x-auto gap-4 ">
          {Object.keys(skillsList).map((s) => {
            return (
              <div
                key={s}
                onClick={() => setSelected(s)}
                className={`cursor-pointer text-white sm:p-5 p-2 md:min-w-59 lg:min-w-95 rounded-lg flex gap-2 items-center
        ${selected === s ? "bg-[#1F2937]" : "bg-black hover:bg-[#1F2937]"}`}
              >
                <span className="text-lg">{sectionEmoji[s]}</span>
                <h1 className=" ">{s}</h1>
              </div>
            );
          })}
        </div>

        {/* right */}
        <div className="bg-black flex flex-col text-white w-full p-5 overflow-hidden rounded-lg border border-gray-500">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <span>{sectionEmoji[selected]}</span>
            <h1>{selected}</h1>
          </div>
          {skillsList[selected].map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col  justify-center">
                <h4 className="my-3 ">{skill.name}</h4>
                <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                  <motion.div
                    key={selected}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gray-400"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* BackEnd */}
    </div>
  );
}

export default Skills;
