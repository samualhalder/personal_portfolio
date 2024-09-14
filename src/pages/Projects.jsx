import React from "react";
import Card from "../components/Card";
import { projects } from "../../lib/projectsDb.js";

function Projects() {
  const bgColor = import.meta.env.VITE_BGCOLOR;

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
