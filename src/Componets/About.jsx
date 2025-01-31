import Html from "../assets/Html.png";
import kubernetes from "../assets/kubernetes.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import docker from "../assets/docker.png";
import Tailwind from "../assets/Tailwind Css.png";
import gitC from "../assets/gitC.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import typescript from "../assets/typescript.png";
import NextJs from "../assets/NextJs.png";
import postgre from "../assets/postgre.png";
import and from "../assets/and.png";

const About = () => {
  const skills = [
    { image: Javascript, name: "JavaScript" },
    { image: typescript, name: "TypeScript" },
    { image: Tailwind, name: "Tailwind" },
    { image: Html, name: "HTML" },
    { image: NodeLogo, name: "NodeJs" },
    { image: Express, name: "ExpressJs" },
    { image: ReactLogo, name: "ReactJs" },
    { image: NextJs, name: "NextJs" },
    { image: docker, name: "Docker" },
    { image: kubernetes, name: "Kubernetes" },
    { image: gitC, name: "Git" },
    { image: Mongodb, name: "MongoDB" },
    { image: postgre, name: "PostgreSQL" },
    { image: and, name: "More" },
  ];

  const skillRows = [
    skills.slice(0, 4),
    skills.slice(4, 8),
    skills.slice(8, 11),
    skills.slice(11, 13),
    skills.slice(13, skills.length) 
  ];

  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12 flex items-center justify-center ">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center justify-center shadow-lg shadow-red-300">
            <h3 className="text-2xl font-semibold text-red-600">
              Skills & Expertise
            </h3>
            <div className="flex flex-col gap-4 w-full"> 
              {skillRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap justify-center gap-3 mt-2"> 
                  {row.map((skill, index) => (
                    <div
                      key={index}
                      className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300"
                    >
                      <img src={skill.image} alt={skill.name} className={skill.name === "TypeScript" ? 'w-8' : 'w-10'} /> {/* Conditional width for TypeScript */}
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;