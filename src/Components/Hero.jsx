import png from "../assets/Group.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
function Hero() {
  return (
    <div className="relative w-full h-screen  overflow-hidden bg-[#d7d7d7]">
      {/* Left Gray Section */}
      <div className="absolute inset-y-0 left-0 w-[55%] bg-[#d7d7d7] z-10">
        {/* Left Content */}
        <div className="mx-auto w-1/2 my-12 ">
          <img src={png} className="w-8" alt="" />
        </div>

        {/* Name */}
        <div className="flex  items-center  w-1/2 font-semibold mx-auto mt-22 my-10 gap-2">
          <h1 className="text-5xl">Hi, </h1>
          <h2 className="text-5xl">I </h2>
          <h3 className="text-5xl"> am </h3>
        </div>
        <div className="w-[45%] mx-auto font-bold">
          <h1 className="text-6xl">M Mudassir</h1>
        </div>
        <div className=" font-semibold w-1/2 mt-3 mx-auto">
          <h3 className="text-[#909090] text-2xl ">
            Full-Stack Developer (MERN)
          </h3>
        </div>
        {/* Links  */}
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
      </div>

      {/* Right Black Section with Tilt */}
      <div
        className="absolute inset-y-0 right-0 w-[55%] bg-black z-20"
        style={{
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className=" w-full flex justify-center  mx-auto">
          <nav className="text-white flex justify-center gap-10 mt-8">
            <a href="">About me</a>
            <a href="">Skills</a>
            <a href="">PortFolio</a>
          </nav>
          <div className="mt-8 ml-8">
            <a
              className="bg-white text-black px-3 py-2   rounded-full mb-4"
              href=""
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
