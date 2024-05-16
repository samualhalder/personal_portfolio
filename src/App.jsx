import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-[#15202B] p-2">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
