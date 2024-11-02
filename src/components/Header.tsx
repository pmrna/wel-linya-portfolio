import { useState } from "react";
import { links } from "../constants/data";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="z-[999] relative">
      <nav className="bg-[#0d0b04] flex h-16 items-center justify-center w-screen gap-x-[1000px]">
        {/* Menu */}
        <ul className="hidden md:flex space-x-14">
          {links.map((link) => (
            <li
              key={link.hash}
              className="font-roboto font-medium text-[12px] text-neutral-200"
            >
              <Link
                to={link.hash}
                smooth={true}
                duration={500}
                activeClass="border-b-2 border-white"
                spy={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10 text-neutral-200">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0d0b04] opacity-95 flex flex-col justify-center items-center"
          }
        >
          {links.map((link) => (
            <li
              key={link.hash}
              className="font-roboto font-medium text-4xl text-neutral-200 py-6"
            >
              <Link
                to={link.hash}
                smooth={true}
                duration={500}
                onClick={handleClick}
                spy={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <img
          src="/static/images/WELL_RENDERS_2.png"
          className="h-14 object-contain"
          alt="Logo"
        />
      </nav>
    </header>
  );
};

export default Header;
