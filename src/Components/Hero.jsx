import png from "../assets/Group.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "../assets/avator.png";
import { useState } from "react";
import { easeIn, motion } from "framer-motion";
import StarsBackground from "./StarsBackgeound";
import CombinedAnimatedBackground from "./StarsBackgeound";
function Hero() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <>
      <div
        id="top"
        className="relative w-full md:block  h-screen  hidden  overflow-hidden bg-[#d7d7d7]"
      >
        {/* --------------------------------Left div------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 100, x: 0 }}
          transition={{ duration: 0.8, ease: easeIn }}
          className="absolute inset-y-0 left-0 w-[55%] bg-[#d7d7d7] z-10"
        >
          {/* Left Content */}
          <div className="mx-auto w-1/2 my-12 ">
            <img src={png} className="w-8" alt="" />
          </div>

          {/* ---------------------------------Name------------------------------------------- */}
          <div className="flex  items-center  md:text-4xl lg:text-5xl  w-1/2 font-semibold mx-auto mt-22 my-10 gap-2">
            <h1 className="">Hi, </h1>
            <h2 className="">I </h2>
            <h3 className=""> am </h3>
          </div>
          <div className="w-[45%] mx-auto font-bold">
            <h1 className="lg:text-5xl md:text-4xl">M Mudassir</h1>
          </div>
          <div className=" font-semibold w-1/2 mt-3 mx-auto">
            <h3 className="text-[#909090] text-2xl ">
              Full-Stack Developer (MERN)
            </h3>
          </div>
          {/* ----------------------------------Links------------------------------  */}
          <div className="w-1/2 mx-auto flex gap-5 mt-16">
            <div className="bg-[#c4c4c4] flex justify-center items-center w-10 h-10 ">
              <a href="https://github.com/mudassir-codes-sys" target="_blank">
                <FaGithub size={25} />
              </a>
            </div>
            <div className="bg-[#c4c4c4] flex justify-center items-center w-10 h-10 ">
              <a
                href="https://www.linkedin.com/in/m-mudassir-codes-sys/"
                target="_blank"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
            <div className="bg-[#c4c4c4] flex justify-center items-center w-10 h-10 ">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXKlKbVmzlCcZfNbhkHvJRqqvBDkxPzmcSMwhCcQQSHPgdVmhTJCBqfNZWRRrPZdGqZL"
                target="_blank"
              >
                <MdAlternateEmail size={30} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* -----------------------------------Right div----------------------------------- */}
        <div
          className="absolute inset-y-0 right-0 w-[55%] bg-black z-20"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <StarsBackground />
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.8, ease: easeIn }}
            className=" w-full flex justify-end  gap-5 px-2 "
          >
            <nav className="text-white flex justify-center  gap-10 mt-8">
              <a href="#about">About me</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">PortFolio</a>
            </nav>
            <div className="mt-8 ">
              <a
                className="bg-white text-black px-2 py-2   rounded-full mb-4"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8, ease: easeIn }}
            className="flex justify-center items-center"
          >
            <img src={Image} alt="" className="w-1/2" />
          </motion.div>
        </div>
      </div>

      {/* -----------------------------------Mobile Approach---------------------------------- */}

      {/*---------------------------------------UPPER--------------------------------------  */}

      <div className="md:hidden relative block  w-full h-screen">
        {/* Left Div */}

        <div
          className="bg-black relative h-[65%] z-10 w-full"
          style={{
            clipPath: "polygon(0% 0, 100% 0, 100% 80%, 0 100%)",
          }}
        >
          {/* ------------------------------Hamburger And logo--------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeIn }}
            className="px-8 py-4 flex justify-between items-center relative z-50 "
          >
            <img src={png} alt="PNG" className="invert w-8" />
            <RxHamburgerMenu
              onClick={() => setBurgerOpen(!burgerOpen)}
              size={30}
              color="white"
            />
          </motion.div>

          <div
            className={` absolute inset-0 h-80 z-40 bg-white/30 backdrop-blur-xl transform transition-all duration-1000 ease-in-out ${
              burgerOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-1/2 opacity-0"
            }`}
          >
            <nav className="text-white/80 font-semibold w-full flex flex-col justify-center items-center gap-10 mt-15">
              <a onClick={() => setBurgerOpen(false)} href="#about">
                About me
              </a>
              <a onClick={() => setBurgerOpen(false)} href="#skills">
                Skills
              </a>
              <a onClick={() => setBurgerOpen(false)} href="#portfolio">
                PortFolio
              </a>
              <a onClick={() => setBurgerOpen(false)} href="#contact">
                Contact Me
              </a>
            </nav>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8, ease: easeIn }}
            className="absolute flex w-full h-[65%] justify-center  items-center "
          >
            <StarsBackground /> 
            <img src={Image} alt="avatar" className="w-[200px] " />
          </motion.div>
        </div>

        {/* --------------------------------Lower div----------------------------------------- */}
        <div className=" text-white  bottom-0    absolute w-full h-[35%] backdrop-blur-lg z-40">
          <div className="opacity-50 bg-black w-full   -top-27 inset-0 absolute"></div>
          <div className="relative flex px-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 100, x: 0 }}
              transition={{ duration: 0.8, ease: easeIn }}
              className=" sm:text-3xl  text-2xl flex w-full font-semibold  mt-8  flex-col gap-3"
            >
              <div>
                <h1>Hi, I am</h1>
              </div>
              <h1>M Mudassir</h1>
              <h2 className="text-lg "> Full-Stack Developer (MERN)</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 100, x: 0 }}
              transition={{ duration: 0.8, ease: easeIn }}
              className="  flex flex-col gap-6"
            >
              <a href="https://github.com/mudassir-codes-sys" target="_blank">
                <FaGithub size={30} color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/m-mudassir-codes-sys/"
                target="_blank"
              >
                <FaLinkedin size={30} color="white" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXKlKbVmzlCcZfNbhkHvJRqqvBDkxPzmcSMwhCcQQSHPgdVmhTJCBqfNZWRRrPZdGqZL"
                target="_blank"
              >
                <MdAlternateEmail size={32} color="white" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
