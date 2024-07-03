import { Button } from "flowbite-react";

function Home() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;

  return (
    <div
      id="home"
      style={{ backgroundColor: bgcolor }}
      className={`h-screen text-white bg-${bgcolor} bg-[url('laptop-image.jpg')]  bg-cover   flex flex-col justify-center m-6 rounded-md sm:flex-row `}
    >
      {/* leftside */}

      <div className="text-4xl lg:text-7xl  w-full lg:w-[55%] self-center mx-auto font-mono">
        <h1>Hey, I am </h1>
        <h1 className=" text-cyan-400 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white md:pr-5   md:text-7xl font-bold">
          Samual Halder
        </h1>{" "}
        <h1> a Full Stack Web Developer</h1>
        <p className="text-sm">
          build websites using Next, React, node, express & mongodb.
        </p>
        <a href="https://drive.google.com/file/d/1JOAHfmx_2XjlGvH153-6eQQolTzPP6Q9/view">
          <Button
            className="m-5 w-40 text-3xl"
            gradientDuoTone="purpleToPink"
            size={"lg"}
          >
            {" "}
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Home;
