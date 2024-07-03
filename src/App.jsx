import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./App.css";

function App() {
  return (
    <div className="bg-[#000]    p-2">
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
