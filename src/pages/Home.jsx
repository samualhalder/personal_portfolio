import { Button } from "flowbite-react";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";

function Home() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;

  return (
    <div
      id="home"
      style={{ backgroundColor: bgcolor }}
      className={`h-screen text-white md:text-3xl lg:text-4xl bg-${bgcolor} bg-[url('laptop-image.jpg')]  bg-cover   flex flex-col justify-center items-center  rounded-md`}
    >
      <div className=" md:hidden mt-0">
        <img src="laptop-image.jpg" alt="image" />
      </div>
      <div className=" mb-8 font-mono text-lg">
        {" "}
        <h1>Hey i am</h1>{" "}
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
            "building for the web.",
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
      <a
        className="inline-block"
        href="https://drive.google.com/file/d/1JOAHfmx_2XjlGvH153-6eQQolTzPP6Q9/view?usp=sharing"
      >
        <button className="m-8 text-lg md:m-20  rounded-3xl p-2 bg-white text-black hover:bg-slate-200">
          Resume
          <MdArrowOutward className="inline" />
        </button>
      </a>
    </div>
  );
}

export default Home;
