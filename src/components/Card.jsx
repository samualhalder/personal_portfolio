import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Card({ project }) {
  return (
    <div className="font-sans m-10 max-w-[400px] mx-auto border-2 border-cyan-600 p-5 rounded-lg flex  flex-wrap  justify-center transform transition duration-1000 hover:scale-110 ">
      <img className="m-5" src={project?.photoURL} alt="image" />
      <div className="flex  justify-between w-full">
        <h1 className=" font-font-Arial text-3xl">{project?.title}</h1>
        <div className=" flex gap-1">
          <Link to={project?.link}>
            <Button className=" rounded-2xl">
              <MdLiveTv size={20} />
            </Button>
          </Link>
          <Link to={project?.github}>
            <Button className="rounded-2xl">
              <FaGithub size={20} />{" "}
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-3 w-full my-2">
        {project.tech.includes("react") && <FaReact size={20} />}
        {project.tech.includes("next") && <RiNextjsFill size={20} />}
        {project.tech.includes("js") && <FaJs size={20} />}
        {project.tech.includes("ts") && <SiTypescript size={20} />}
        {project.tech.includes("node") && <FaNodeJs size={20} />}
        {project.tech.includes("express") && <SiExpress size={20} />}
        {project.tech.includes("mongo") && <SiMongodb size={20} />}
        {project.tech.includes("redis") && <SiRedis size={20} />}
        {project.tech.includes("docker") && <FaDocker size={20} />}
        {project.tech.includes("tailwind") && <RiTailwindCssFill size={20} />}
      </div>
      <p className="text-lg text-gray-500 my-5">{project?.about}</p>
    </div>
  );
}

export default Card;
6;
