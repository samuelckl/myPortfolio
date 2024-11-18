import Portrait from "../../src/images/Portrait.png";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="flex m-4 justify-evenly select-none">
        <div className="flex-col">
          <img src={Portrait} alt="Logo" className="h-48 w-48 mr-1 sm:h-72 sm:w-72" />
          <div className="flex justify-between m-4">
          <a
              href="https://github.com/samuelckl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 p-2 rounded-full m-1 shadow"
            >
              <FaGithub className="fill-white hover:fill-blue-500 hover:cursor-pointer sm:h-12 sm:w-12 h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/samchankinlok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 p-2 rounded-full m-1 shadow"
            >
              <FaLinkedinIn className="fill-white hover:fill-blue-500 hover:cursor-pointer sm:h-12 sm:w-12 h-8 w-8" />
            </a>
            <a
              href="https://discordapp.com/users/784568270665285662"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 p-2 rounded-full m-1 shadow"
            >
              <FaDiscord className="fill-white hover:fill-blue-500 hover:cursor-pointer sm:h-12 sm:w-12 h-8 w-8" />
            </a>
          </div>
        </div>
        <div></div>
        <div className="flex-row w-48 sm:w-72 text-gray-800">
          <div className ="font-bold text-l sm:text-xl " >Full Stack Developer</div>
          <div className ="font-bold text-2xl sm:text-3xl pt-1 italic ">Hello, I am a Full Stack Developer</div>
          <div className="text-xs sm:text-base pt-1">
            Hello, I’m Sam Chan, a recent Master of IT graduate from RMIT with a
            strong background in full stack development and design. I invite you
            to explore my portfolio to learn more about my work and experience.
            Please don’t hesitate to reach out —I’d love to connect!
          </div>
        </div>
      </div>
    </div>
  );
}
