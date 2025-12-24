import { FaAngleDoubleUp, FaGithub, FaLinkedin } from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
function FooterLast() {
  return (
    <footer className="bg-[#1a1a1a] p-10 flex justify-center  text-white ">
      <div className="">
        <a  onClick={()=>window.scrollTo({top:0  , behavior:'smooth'})} className="flex flex-col cursor-pointer items-center ">
          <FaAngleDoubleUp />
          Back To Top
        </a>
        <div className="flex  gap-6 mt-5 items-center justify-center">
          <a href="https://github.com/mudassir-codes-sys" target="_blank">
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/m-mudassir-codes-sys/"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXKlKbVmzlCcZfNbhkHvJRqqvBDkxPzmcSMwhCcQQSHPgdVmhTJCBqfNZWRRrPZdGqZL"
            target="_blank"
          >
            <MdAlternateEmail size={30} />
          </a>
        </div>
        <p className="pt-6 font-semibold">
          &#169; 2025 M Mudassir All right reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterLast;
