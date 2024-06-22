function Home() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;

  return (
    <div
      id="home"
      style={{ backgroundColor: bgcolor }}
      className={`h-screan text-white bg-${bgcolor} flex flex-col justify-around m-6 rounded-md sm:flex-row`}
    >
      {/* leftside */}
      <div className="m-4 flex">
        <div className="text-4xl md:text-5xl  w-full md:w-[55%] self-center mx-auto font-mono">
          Hey, I am{" "}
          <h1 className="text-[#1A8CD8] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white md:pr-5   md:text-5xl font-bold">
            Samual Halder
          </h1>{" "}
          a Full Stack Web Developer
          <p className="text-sm">
            I build website using React, node, express & mongodb.
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="max-h-[500px] max-w-[500px] rounded-full m-8 overflow-hidden ">
        <img
          className="w-full h-full "
          src="../../public/my-image-ylw.png"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Home;
