import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contacts() {
  return (
    <div className="flex flex-row md:flex-col justify-center gap-10 uppercase font-roboto font-bold w-full max-w-md">
      <div className="flex flex-row items-center">
        <a
          className="flex-shrink-0 rounded-full h-[65px] w-[65px] bg-white flex items-center justify-center z-10 cursor-pointer group hover:transform hover:scale-110 transition transform ease-in-out duration-300"
          href="mailto:djweller7@gmail.com"
          title="Send me an email"
        >
          <FiMail className="text-4xl" />
        </a>
        <div className="hidden p-5 md:flex justify-center items-center h-13 bg-[#0d0b04] w-full -ml-5 border border-gray-300 rounded">
          <span className="tracking-tight block text-neutral-50 text-[13px]">
            djweller7@gmail.com
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <a
          className="flex-shrink-0 rounded-full h-[65px] w-[65px] bg-white flex items-center justify-center z-10 cursor-pointer hover:transform hover:scale-110 transition transform ease-in-out duration-300"
          href="tel:+639997988163"
          title="Send me a message"
        >
          <FaPhoneAlt className="text-2xl" />
        </a>
        <div className="hidden p-5 md:flex justify-center items-center h-13 bg-[#0d0b04] w-full -ml-5 border border-gray-300 rounded">
          <span className="tracking-normal ml-5 block text-neutral-50 text-[13px]">
            +63 999 798 8163
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <a
          className="flex-shrink-0 rounded-full h-[65px] w-[65px] bg-white flex items-center justify-center z-10 cursor-pointer hover:transform hover:scale-110 transition transform ease-in-out duration-300"
          href="https://www.instagram.com/wel_linya/"
          target="_blank"
          title="Follow me on Instagram"
        >
          <FaInstagram className="text-4xl" />
        </a>
        <div className="hidden p-5 md:flex justify-center items-center h-13 bg-[#0d0b04] w-full -ml-5 border border-gray-300 rounded">
          <span className="tracking-normal ml-5 block text-neutral-50 text-[13px]">
            @wel_linya
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
