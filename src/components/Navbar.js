import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 100 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar navbar flex `}>
      <div
        className={`Navbar__links navbar flex showLinks ${
          scroll ? "Navbar--scroll" : "Navbar--home"
        }`}
      >
        <div>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </div>

        <div>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </div>

        <div>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </div>

        <div>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </div>

        <div>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </div>

      <>
        <NavMenu />
      </>
    </div>
  );
};

export default Navbar;
