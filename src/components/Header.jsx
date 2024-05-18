import { Navbar } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function Header() {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <Navbar
      fluid
      rounded
      color="white"
      className="bg-gray-900 z-10 text-white sticky top-0 mx-[24px]"
    >
      <Navbar.Brand>
        <span className="self-center text-purple-600  whitespace-nowrap text-xl font-bold dark:text-white">
          Samual Halder
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {path === "/home" ? (
          <HashLink smooth to="/home#home" className="text-blue-400">
            Home
          </HashLink>
        ) : (
          <HashLink smooth to="/home#home" active={path === "/home"}>
            Home
          </HashLink>
        )}

        {path === "/about" ? (
          <HashLink smooth to="/about#about" className="text-blue-400">
            About
          </HashLink>
        ) : (
          <HashLink smooth to="/about#about">
            About
          </HashLink>
        )}
        {path === "/skills" ? (
          <HashLink smooth to="/skills#skills" className="text-blue-400">
            Skills
          </HashLink>
        ) : (
          <HashLink smooth to="/skills#skills">
            Skills
          </HashLink>
        )}
        {path === "/project" ? (
          <HashLink smooth to="/project#project" className="text-blue-400">
            Project
          </HashLink>
        ) : (
          <HashLink smooth to="/project#project">
            Project
          </HashLink>
        )}
        {path === "/contact" ? (
          <HashLink smooth to="/contact#contact" className="text-blue-400">
            Contant
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
