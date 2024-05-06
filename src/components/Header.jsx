import { Navbar } from "flowbite-react";

function Header() {
  return (
    <>
      <Navbar fluid rounded>
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
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
