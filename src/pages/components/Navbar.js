import { Link } from "react-router-dom";
// Import icons from React Icons
import { FaHome, FaLaptopCode, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import logo from "../../../src/images/icons/logo.svg";

export default function Navbar() {
  return (
    <div className ="font-sans">
      <div className="fixed top-4 left-0 right-0 h-12 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-400 flex items-center justify-between mx-4 px-4 py-4 rounded-full shadow-lg z-50">
        {/* Title with Icon */}
        <span className="text-white text-2xl font-fun flex items-center">
          {/* Show only the logo on mobile, add "myPortfolio" for larger screens */}
          <img src={logo} alt="Logo" className="h-8 w-8 mr-1" />
          <span className="hidden text-white sm:block sm:text-xl">myPortfolio</span>
        </span>

        {/* Links */}
        <div className="flex items-center justify-between space-x-4">
          <Link className="text-white flex items-center hover:text-blue-300" to="/myPortfolio">
            <FaHome className="text-2xl mr-1" />
            <span className="hidden sm:block">Home</span>
          </Link>
          <Link className="text-white flex items-center hover:text-blue-300" to="/skills">
            <FaLaptopCode className="text-2xl mr-1" />
            <span className="hidden sm:block">Skills</span>
          </Link>
          <Link className="text-white flex items-center hover:text-blue-300" to="/projects">
            <FaProjectDiagram className="text-2xl mr-1" />
            <span className="hidden sm:block">Projects</span>
          </Link>
          <Link className="text-white flex items-center hover:text-blue-300" to="/resume">
            <FaFileAlt className="text-2xl mr-1" />
            <span className="hidden sm:block">Resume</span>
          </Link>
        </div>

        {/* Contact Icon Only */}
        <Link className="text-white flex items-center hover:text-blue-200" to="/contact">
          <IoMdContact className="text-4xl " />
        </Link>
      </div>
    </div>
  );
}