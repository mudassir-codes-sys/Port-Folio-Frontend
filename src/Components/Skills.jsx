import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import Js from "../assets/JavaScript-logo.png";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiMysql } from "react-icons/di";
import Api from "../assets/rest-api-icon.webp";
import Express from "../assets/expressjs.svg";
import { IoIosGitMerge } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiNpm } from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="bg-[#d7d7d7] px-5">
      <div className="pt-32 flex mb-20 justify-center ">
        <h1 className=" text-4xl border-4 px-15 py-4 font-bold inline">
          SKILLS
        </h1>
      </div>

      {/* Frontend */}
      <div className="max-w-3xl mx-auto ">
        <div className="mt-6 ">
          <h2 className="text-2xl font-bold">FrontEnd :</h2>
        </div>
      </div>

      <div className="md:flex justify-center items-center  grid sm:grid-cols-4 grid-cols-3 gap-20 mt-12">
        <div className="flex flex-col items-center gap-2">
          <FaHtml5 color="#E34F26" size={80} />
          <p className="text-lg ">Html</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaCss3 size={80} color="#1572B6" />
          <p className="text-lg ">CSS</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Js} className="w-20 h-20" alt="" />
          <p className="text-lg ">JavaScript</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaReact color="#61DAFB" size={80} />
          <p className="text-lg ">React</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RiTailwindCssFill color="#38BDF8" size={80} />
          <p className="text-lg ">Tailwind</p>
        </div>
      </div>

      {/* BackEnd */}

      <div className="max-w-3xl mx-auto ">
        <div className="mt-20 ">
          <h2 className="text-2xl font-bold">Backend :</h2>
        </div>
      </div>

      <div className="md:flex justify-center   items-center gap-20 mt-12   grid sm:grid-cols-4 grid-cols-3">
        <div className="flex flex-col items-center gap-2">
          <DiMongodb color="#47A248" size={80} />
          <p className="text-lg ">MongoDB</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Express} className="w-20 h-20" alt="" />
          <p className="text-lg ">ExpressJs</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaNodeJs color="#339933" size={80} />
          <p className="text-lg ">NodeJs</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <DiMysql color="#4479A1" size={80} />
          <p className="text-lg ">MySQL</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Api} color="#ff6f00" className="w-20 h-20" alt="" />
          <p className="text-lg ">Rest API</p>
        </div>
      </div>

      {/* Tools */}

      <div className="max-w-3xl mx-auto ">
        <div className="mt-20 ">
          <h2 className="text-2xl font-bold">Tools :</h2>
        </div>
      </div>

      <div className="md:flex justify-center   items-center gap-20 mt-12  grid sm:grid-cols-4 grid-cols-3">
        <div className="flex flex-col items-center gap-2">
          <IoIosGitMerge color="#F05032" size={80} />
          <p className="text-lg ">Git</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaGithub size={80} color="#181717" />
          <p className="text-lg ">GitHub</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <VscVscode size={80} color="#007ACC" />
          <p className="text-lg ">Vs Code</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiPostman color="#FF6C37" size={80} />
          <p className="text-lg ">Postman</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiNpm color="#CB3837" size={80} />
          <p className="text-lg ">npm</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
