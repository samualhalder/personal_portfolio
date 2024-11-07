import { FaFileCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

function Home() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;

  return (
    <div
      id="home"
      style={{ backgroundColor: bgcolor }}
      className={`h-screen text-white md:text-3xl lg:text-4xl bg-${bgcolor} bg-[url('/laptop-image.jpg')]  bg-cover   flex flex-col justify-center items-center  rounded-md`}
    >
      <div className=" md:hidden mt-0">
        <img src="laptop-image.jpg" alt="image" />
      </div>
      <div className=" mb-8 font-mono text-lg">
        {" "}
        <h1 className="text-xl">Hey i am</h1>{" "}
      </div>
      <div>
        <TypeAnimation
          className="font-mono font-bold"
          sequence={[
            // Same substring at the start will only be typed out once, initially

            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Samual Halder.",
            1000,
            "a Fullstack web developer.",
            1000,
            "building new things for the web.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "2em",
            display: "block",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="flex md:m-20 gap-2 font-mono">
        <a
          className="inline-block"
          href="https://drive.google.com/file/d/1bz1iRdcYwFns8TCXDrlOB5iKC8SerodS/view?usp=sharing"
        >
          <button className=" text-lg   rounded-3xl p-2 bg-white text-black hover:bg-slate-200">
            Resume
            <MdArrowOutward className="inline ml-1" />
          </button>
        </a>
        <HashLink smooth to={"/project/#project"}>
          <button className="  text-lg   rounded-3xl p-2 bg-white text-black hover:bg-slate-200">
            Projects
            <FaFileCode className="inline ml-1" size={15} />
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default Home;
