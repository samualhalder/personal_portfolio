import { Button } from "flowbite-react";

function Home() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;

  return (
    <div
      id="home"
      style={{ backgroundColor: bgcolor }}
      className={` text-white bg-${bgcolor} bg-[url('laptop-image.jpg')] object-center bg-cover flex flex-col justify-start md:h-[600px] m-6 rounded-md sm:flex-row `}
    >
      {/* leftside */}
      <div className="m-4 flex ">
        <div className="text-4xl lg:text-7xl  w-full lg:w-[55%] self-center mx-auto font-mono">
          Hey, I am{" "}
          <h1 className="text-cyan-400 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white md:pr-5   md:text-7xl font-bold">
            Samual Halder
          </h1>{" "}
          a Full Stack Web Developer
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
      {/* right side */}
      {/* <div className="max-h-[500px] max-w-[500px] rounded-full m-8 overflow-hidden ">
        <img
          className="w-full h-full "
          src="../../public/my-image-ylw.png"
          alt="image"
        />
      </div> */}
    </div>
  );
}

export default Home;
