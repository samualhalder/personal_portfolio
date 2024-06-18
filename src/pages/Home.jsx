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
        <div className="text-5xl w-[46%] self-center mx-auto font-mono">
          Hey, I am{" "}
          <span className="text-violet-700 font-bold font-mono">
            Samual Halder
          </span>{" "}
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
