import coder from "../assets/coder.png";
import SpicyBites from "../assets/SpicyBites.png";
import sensei from "../assets/sensei.png"
import employee from "../assets/employee.png";
import Supercar from "../assets/Supercar.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Sensei-Ai",
      desc: " Built an AI Career Coach with 📄 resume tools, 🎯 quizzes, and 📊 market insights — boosted efficiency ⚡60% & retention 📈35%.",
      image: sensei,
      live: "https://sensei-ai-two.vercel.app/",
      github: "https://github.com/adityAmedipelly/Sensei-Ai",
    },
    {
      title: "AI Code Reviewer",
      desc: "Build an AI code reviewer with the MERN stack! 🚀 Use AI to analyze, review, and improve code, enhancing development efficiency.",
      image: coder,
      live: "https://ai-code-reviewer-cyp8.vercel.app/",
      github: "https://github.com/adityAmedipelly/AI-Code-Reviewer",
    },
    {
      title: "Employee Management System",
      desc: "Built an Employee Management System with React JS and Local Storage, allowing admins to assign tasks 📝 and employees to mark them as complete ✅",
      image: employee,
      live: "https://aditec.netlify.app/",
      github: "https://github.com/adityAmedipelly/employee-management-system",
    },
    {
      title: "Spicy Bites",
      desc: "The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!",
      image: SpicyBites,
      live: "https://spicybites.netlify.app/",
      github: "https://github.com/adityAmedipelly",
    },
    {
      title: "Super Car",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Supercar,
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/adityAmedipelly",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((item) => (
            <Cards key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
