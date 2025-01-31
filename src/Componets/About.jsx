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


const skills = [
  [
    // First row (4 skills)
    { img: Javascript, name: "JavaScript" },
    { img: typescript, name: "TypeScript" },
    { img: NodeLogo, name: "Node.Js" },
    { img: Tailwind, name: "Tailwind.Css" },
  ],
  [
    // Second row (3 skills)
    { img: Express, name: "Express" },
    { img: ReactLogo, name: "React.Js" },
    { img: NextJs, name: "Next.JS" },
    { img: Html, name: "Html" },
  ],

  [
    // Second row (3 skills)
    { img: docker, name: "Docker" },
    { img: kubernetes, name: "Kubernetes" },
    { img: gitC, name: "git" },
  ],
  
  [
    // Third row (2 skills)
    { img: Mongodb, name: "MongoDB" },
    { img: postgre, name: "postgresql" },
  ],

  [
    // Third row (2 skills)
    
    { img: and, name: "More" },
  ],

  
];

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12 flex justify-center items-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 max-w-2xl w-full">
              <h3 className="text-2xl font-semibold">
                <span className="text-blue-400">Code</span>
                <span className="text-red-600"> Skills</span>
              </h3>

              <div className="flex flex-col gap-4">
                {skills.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-4">
                    {row.map((skill, index) => (
                      <div
                        key={index}
                        className="border border-red-300 flex items-center gap-1 px-3 py-2 rounded-lg shadow-md shadow-red-300"
                      >
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-10"
                        />
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
    </div>
  );
};

export default About;
