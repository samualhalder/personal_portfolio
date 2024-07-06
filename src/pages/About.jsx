function About() {
  const bgcolor = import.meta.env.VITE_BGCOLOR;
  return (
    <div
      id="about"
      style={{ backgroundColor: bgcolor }}
      className={`md:h-screen  p-5 m-6 mt-8 flex flex-col -z-10 justify-center rounded-md`}
    >
      <div className="text-white text-5xl font-lobster self-center ">About</div>
      <div className="md:flex p-6 justify-between mt-5">
        <div className="rounded-full overflow-hidden md:w-[40%]">
          <img src="my-image.png" alt="my-image" />
        </div>
        <div className="text-white ml-5 md:w-[50%] mt-5 md:mt-0">
          <span className="text-blue-700 text-2xl font-bold">@whoami/:</span>
          <p className="mt-5 font-mono">
            Hi, I'm Samual Halder, a passionate{" "}
            <span className="text-purple-600">Full Stack Developer</span>{" "}
            specializing in the MERN stack. Currently, I'm a 4th year Computer
            Science and Engineering student, combining my academic knowledge
            with practical skills to build dynamic and responsive web
            applications.
          </p>
          <p className="mt-5 font-mono">
            With a strong foundation in JavaScript and proficiency in C++, I've
            tackled over 600 coding challenges and am ranked in the top 25% on
            LeetCode. My journey as a developer has been driven by my enthusiasm
            for problem-solving and continuous learning.
          </p>
          <p className="mt-5 font-mono">
            I enjoy working on both the front-end and back-end, ensuring
            seamless user experiences and robust functionalities. From designing
            intuitive user interfaces to developing efficient server-side logic,
            I strive to create comprehensive solutions that meet user needs and
            industry standards.
          </p>
          <p className="mt-5 font-mono">
            In addition to my expertise in the MERN stack, I am also proficient
            in TypeScript and Next.js, which enable me to build scalable and
            maintainable applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
