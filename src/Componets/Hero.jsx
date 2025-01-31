import { useState } from "react";
import hero from "../assets/Hero.png";
import git from "../assets/git.png"; 
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import whatsapp from "../assets/whatsapp.png"
import adilogo121 from "../assets/adilogo121.png";
import mail from "../assets/mail.png"
import hi from "../assets/hi.png";
import MernStack from '../assets/mernstack.png'

function Hero() {
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e) => {
    setIsMoving(true);
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMove({ x, y });
  };

  const handleMouseLeave = () => {
    setIsMoving(false);
    setMove({ x: 0, y: 0 });
  };

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[80vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <div className="flex items-center cursor-pointer">
              <img src={adilogo121} className="w-40" />
              <img src={hi} className="w-10" />
            </div>

            <div>
              <p className="mb-4 text-gray tracking-wider leading-loose cursor-pointer">
                I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack food ordering website, a job portal, and even a LinkedIn clone. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs.
              </p>
              <img src={MernStack} alt="" className="p-2 rounded-lg w-35" />
            </div>

            <a
              href="https://drive.google.com/file/d/183DD9UKprNvRHzi6naHo3tsK4eZA9lm5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="border border-gray-400 bg-white/80 text-gray-600 px-4 py-2 w-max rounded-md mt-2 transition-all duration-300 ease-in-out shadow-md hover:bg-gray-200 hover:border-blue-500 hover:text-blue-600 active:scale-95 cursor-pointer">
                Resume
              </button>
            </a>
          </div>

          {/* Card Component */}
          <div
            className="md:w-1/2 relative flex justify-center items-end mb-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative rounded-lg border-4 border-red-100 shadow-[0_4px_6px_rgba(255,0,0,0.5)] overflow-hidden w-[330px] h-[400px] md:w-[350px] md:h-[420px] transform transition-all duration-300 ease-out"
              style={{
                transform: `perspective(1000px) translateY(10px) rotateX(${move.y * 20}deg) rotateY(${move.x * 20}deg) scale(1.05)`,
                boxShadow: isMoving ? `0 25px 50px rgba(0, 0, 0, 0.3)` : `0 15px 30px rgba(0, 0, 0, 0.2)`,
                transition: "transform 200ms ease-out, box-shadow 300ms ease-out",
              }}
            >
              {/* Top part (Profile Image) */}
              <div className=" flex justify-center items-center">
                <div className="w-40 h-40 rounded-full border-4 border-red-50 shadow-xl overflow-hidden">
                  <img
                    src={hero}
                    alt="Profile"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Bottom part (Text, Email, Socials) */}
              <div className="mt-2 flex flex-col items-center justify-center px-4">
                <h2 className="text-xl font-bold mb-2">Aditya</h2>
                <h2 className="text-sm mb-2">Full Stack Developer</h2>
                <div className="flex items-center mb-4">
                  <span className="text-xs mr-2">📍</span>
                  <span>India</span>
                </div>
                <div className="w-full flex items-center justify-between bg-white rounded-md p-2 mb-4 border-4 border-red-50 shadow-xl">
                  <a href="mailto:adityamedipelly3@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-2">
                      <img src={mail} alt="Gmail" className="w-6 h-6" />
                      <span className="text-sm text-black">adityamedipelly3@gmail.com</span>
                    </div>
                  </a>
                </div>

                {/* Social Media Icons */}
                <div className="mt-2 flex space-x-8">
                  <a href="https://github.com/adityAmedipelly" target="_blank" rel="noopener noreferrer">
                    <img src={git} alt="GitHub" className="w-8 h-8" />
                  </a>
                  <a href="https://www.linkedin.com/in/aditya-yadav-b306aa334/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                  </a>
                  <a href="https://x.com/AdityaMedipelly" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" className="w-8 h-8" />
                  </a>
                  <a href="https://wa.me/8106631412" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
