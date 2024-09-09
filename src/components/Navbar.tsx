import { useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

export const TopNav = () => (
  <div className="bg-gray-800 font-cairo text-white py-2 px-4 flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
    <div className="flex items-center justify-center md:justify-start">
      <MdLocationPin className="text-primary w-4 h-4 mr-1.5" />
      <span>Sydney, Australia</span>
    </div>
    <div className="flex items-center justify-center">
      <FaPhoneAlt className="text-primary w-4 h-4 mr-1.5" />
      <span>0468328227</span>
    </div>
    <div className="flex items-center justify-center">
      <FaClock className="text-primary w-4 h-4 mr-1.5" />
      <span>Mon - Fri: 9:00am - 5:00pm</span>
    </div>
    <div className="flex items-center justify-center">
      <FaClock className="text-primary w-4 h-4 mr-1.5" />
      <span>Weekends Appointments Only</span>
    </div>
  </div>
);

export const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <img
        src="https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313.png"
        alt="Alphaa Logo"
        className="w-40 sm:w-48 lg:w-52"
      />

      {/* Hamburger Icon (visible on small screens) */}
      <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links for larger screens */}
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-lg lg:relative lg:top-0 lg:flex-row lg:space-x-11 lg:w-auto"
            : "hidden lg:flex lg:space-x-11"
        } text-sm items-center lg:items-center z-10`}
      >
        <Link
          to={"/"}
          className="text-gray-700 py-2 sm:py-8 px-4 lg:px-6 hover:bg-[#2A2C38] hover:text-white"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="text-gray-700 py-2 sm:py-8 px-4 lg:px-6 hover:bg-[#2A2C38] hover:text-white"
        >
          ABOUT US
        </Link>
        <Link
          to="/services"
          className="text-gray-700 py-2 sm:py-8 px-4 lg:px-6 hover:bg-[#2A2C38] hover:text-white"
        >
          SERVICES
        </Link>
        <a
          href="/"
          className="text-gray-700 py-2 sm:py-8 px-4 lg:px-6 hover:bg-[#2A2C38] hover:text-white"
        >
          FAQ'S
        </a>

        {/* Call to Action Button */}
        <div className="hidden lg:flex justify-center lg:justify-end w-full lg:w-auto">
          <button className="bg-[#2A2C38] hover:scale-110 transition-all text-white px-6 sm:px-7 py-3 sm:py-4 rounded-md font-bold transition duration-300 mt-4 lg:mt-0 lg:ml-4">
            CALL US ANYTIME
          </button>
        </div>
      </div>
    </nav>
  );
};
