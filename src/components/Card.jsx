import React from "react";
import { Link } from "react-router-dom";

function Card({ project }) {
  return (
    <Link to={project.link} target="_blank">
      <div className=" font-sans m-10 max-w-[400px] mx-auto border-2 border-cyan-600 p-5 rounded-lg flex  flex-wrap items-center justify-center transform transition duration-1000 hover:scale-110 ">
        <img className="m-5" src={project.photoURL} alt="image" />
        <h1 className=" font-lobster text-3xl">{project.title}</h1>
        <p className="text-xl text-gray-500 m-5">{project.about}</p>
      </div>
    </Link>
  );
}

export default Card;
90;
