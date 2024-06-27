import React from "react";
import Card from "../components/Card";

function Projects() {
  const bgColor = import.meta.env.VITE_BGCOLOR;
  const projects = [
    {
      id: 1,
      title: "TechNuze",
      photoURL: "techNuze-project.png",
      about: "its a fully functional news site build witd MERN.",
      link: "https://technuze.onrender.com/",
    },
    {
      id: 2,
      title: "Hello mall",
      photoURL: "hellomall-project.png",
      about: "its a fully functional e-commerce site build witd MERN.",
      link: "https://mern-ecommerce-delta-one.vercel.app/",
    },
  ];

  return (
    <div
      style={{ backgroundColor: bgColor }}
      id="project"
      className={` text-white font-lobster text-5xl flex flex-col justify-center items-center m-6 rounded-md`}
    >
      Projects
      <div className="flex flex-col">
        {projects.map((project, ind) => (
          <Card key={ind} project={project}></Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
