import Portrait from "../../src/images/Portrait2.png";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="flex justify-center items-center w-full mt-16 m-4 gap-12 select-none">
      {/* Left: Profile Image */}
      <div className="flex justify-center items-center md:gap-8 sm:gap-6 gap-4">
          <img src={Portrait} alt="Logo" className="h-48 w-48 mr-1 sm:h-72 sm:w-72" />
        <div></div>
        <div className="flex-row w-48 sm:w-72 text-gray-800">
          <div className ="font-bold text-l sm:text-xl " >Sam Kin Lok, CHAN</div>
          <div className ="text-gray-800 hover:text-blue-500"><a
              href="https://wa.me/61451093202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaWhatsapp className="text-2xl mt-1 mr-1" />
              <span className="text-base">+61451093203</span>
            </a>
            </div>
            <div className ="text-gray-800 hover:text-blue-500"><a
              href="mailto:samuelckl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaEnvelope className="text-2xl mt-1 mr-1" />
              <span className="text-base">samuelckl@gmail.com</span>
            </a>
            </div>
            <div className ="text-gray-800 hover:text-blue-500"><a
              href="https://linkedin.com/in/samchankinlok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaLinkedinIn className="text-2xl mt-1 mr-1" />
              <span className="text-base">samchankinlok</span>
            </a>
            </div>
            <div className ="text-gray-800 hover:text-blue-500"><a
              href="https://discordapp.com/users/784568270665285662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaDiscord className="text-2xl mt-1 mr-1" />
              <span className="text-base">samuelckl</span>
            </a>
            </div>
            <div className ="text-gray-800 hover:text-blue-500"><a
              href="https://github.com/samuelckl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub className="text-2xl mt-1 mr-1" />
              <span className="text-base">samuelckl</span>
            </a>
            </div>
            
        </div>
        
      </div>
    </div>
  );
}
