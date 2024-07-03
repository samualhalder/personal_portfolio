import { Navbar } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function Header() {
  const path = useLocation().pathname;
  const bgcolor = import.meta.env.VITE_BGCOLOR;
  return (
    <Navbar
      fluid
      rounded
      color="white"
      style={{ backgroundColor: bgcolor }}
      className={`z-10 text-white sticky top-0 mx-[24px] opacity-55`}
    >
      <Navbar.Brand>
        <span className="self-center hover:text-cyan-800 cursor-none  whitespace-nowrap text-3xl font-lobster dark:text-white">
          Samual Halder
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {path === "/home" ? (
          <HashLink smooth to="/home#home" className="text-cyan-700">
            Home
          </HashLink>
        ) : (
          <HashLink smooth to="/home#home" active={path === "/home"}>
            Home
          </HashLink>
        )}

        {path === "/about" ? (
          <HashLink smooth to="/about#about" className="text-cyan-700">
            About
          </HashLink>
        ) : (
          <HashLink smooth to="/about#about">
            About
          </HashLink>
        )}
        {path === "/skills" ? (
          <HashLink smooth to="/skills#skills" className="text-cyan-700">
            Skills
          </HashLink>
        ) : (
          <HashLink smooth to="/skills#skills">
            Skills
          </HashLink>
        )}
        {path === "/project" ? (
          <HashLink smooth to="/project#project" className="text-cyan-700">
            Project
          </HashLink>
        ) : (
          <HashLink smooth to="/project#project">
            Project
          </HashLink>
        )}
        {path === "/contact" ? (
          <HashLink smooth to="/contact#contact" className="text-cyan-700">
            Contact
          </HashLink>
        ) : (
          <HashLink smooth to="/contact#contact">
            Contact
          </HashLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
