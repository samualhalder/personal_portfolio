import { Navbar } from "flowbite-react";
import About from "../pages/About";

function Header() {
  return (
    <Navbar
      fluid
      rounded
      color="white"
      className="bg-gray-900 text-white sticky top-0 mx-[24px]"
    >
      <Navbar.Brand>
        <span className="self-center text-purple-600  whitespace-nowrap text-xl font-bold dark:text-white">
          Samual Halder
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href={<About />}>About</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
