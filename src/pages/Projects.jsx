import React from "react";
import Card from "../components/Card";

function Projects() {
  const bgColor = import.meta.env.VITE_BGCOLOR;
  const projects = [
    {
      id: 4,
      title: "Mail chat",
      photoURL: "mail-chat.png",
      about: "Take feedback from your user and share them as a testimoianl.",
      link: "https://mail-chat-rose.vercel.app/",
    },
    {
      id: 3,
      title: "Feedback Hub",
      photoURL: "feedback-hub.png",
      about: "Take feedback from your user and share them as a testimoianl.",
      link: "https://feedback-hub-kung.onrender.com/",
    },
    {
      id: 2,
      title: "TechNuze",
      photoURL: "techNuze-project.png",
      about: "its a fully functional news site build witd MERN.",
      link: "https://technuze.onrender.com/",
    },
    {
      id: 1,
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
      className={` text-white font-lobster text-5xl flex flex-col justify-center items-center  rounded-md`}
    >
      <h1>Projects</h1>
      <div className="flex flex-col">
        {projects.map((project, ind) => (
          <Card key={ind} project={project}></Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
