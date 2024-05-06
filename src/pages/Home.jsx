function Home() {
  return (
    <div className="h-screan bg-violet-200 flex flex-col justify-between m-6 rounded-md sm:flex-row">
      {/* leftside */}
      <div className="m-4 flex">
        <p className="text-3xl w-80 justify-center text-center my-auto">
          Hi' I am{" "}
          <span className="text-violet-500 font-mono">Samual Halder</span> a
          Full Stack Web Developer
        </p>
      </div>
      {/* right side */}
      <div className="overflow-hidden">
        <img
          className="max-h-[500px] rounded-full m-8"
          src="https://media.licdn.com/dms/image/D5603AQGlPCjqnYqRMQ/profile-displayphoto-shrink_800_800/0/1712389050466?e=1720656000&v=beta&t=xiQTRIhcJ9blIfelV6T1gix8HIUsmlvWP2abTyCeqk8"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Home;
