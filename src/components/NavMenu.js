import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-scroll";

const NavMenu = ({ scroll }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {!show && (
        <div
          className={`NavMenu__menu flex ${scroll && "NavMenu--scroll"}`}
          onClick={handleShow}
        >
          <BiMenu />
        </div>
      )}

      {show && (
        <div className={`content ${show && `showContent`}`}>
          <div
            className="NavMenu__menu NavMenu__menu--close"
            onClick={handleClose}
          >
            <BiX />
          </div>
          <div className="blur-effect"></div>
          <div className="NavMenu__links ">
            <div className="NavMenu__links__link">
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

            <div className="NavMenu__links__link">
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </div>
            <div className="NavMenu__links__link">
              <Link to="projects" spy={true} smooth={true} duration={500}>
                Projects
              </Link>
            </div>

            <div className="NavMenu__links__link">
              <Link to="skills" spy={true} smooth={true} duration={500}>
                Skills
              </Link>
            </div>

            <div className="NavMenu__links__link">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenu;
