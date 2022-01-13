import React, { useState } from "react";
import me from "../img/me.png";
import { BsGithub, BsEnvelopeFill, BsLinkedin } from "react-icons/bs";
import { IconButton, Tooltip } from "@mui/material";

const AboutMe = () => {
  const [copyEmailMessage, setCopyEmailMessage] = useState("Copy");

  const copyEmailAddress = () => {
    navigator.clipboard.writeText("lixuanluo@hotmail.com");
    setCopyEmailMessage("Copied!");
    setTimeout(() => {
      setCopyEmailMessage("Copy");
    }, 2000);
  };

  return (
    <div className="AboutMe mycontainer flex flex-center">
      <section className=" AboutMe__img">
        <img src={me} alt="me" />
      </section>
      <section className="AboutMe__text">
        <h1 className="AboutMe__title">Hi, I'm Lixuan Luo</h1>
        <p className="AboutMe__description">
          I am a Front-End Web Developer and Designer based in Toronto, with a
          passion for creating engaging, entertaining user experiences.
        </p>
        <br />
        <p className="AboutMe__description">
          I have developed a strong understanding of JavaScript, HTML, CSS,
          ReactJS and more!
        </p>
        <br />
        <p className="AboutMe__description">
          I'm excited to make the leap and continue refining my skills with the
          right company.
        </p>
        <section className="AboutMe__contactInfo flex">
          <Tooltip className="AboutMe__link" title={copyEmailMessage}>
            <IconButton>
              <BsEnvelopeFill onClick={copyEmailAddress} />
            </IconButton>
          </Tooltip>

          <Tooltip className="AboutMe__link" title="Github">
            <IconButton
              href="https://github.com/YourNeptune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </IconButton>
          </Tooltip>
          <Tooltip className="AboutMe__link" title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/lixuan-l-5b68a31aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </IconButton>
          </Tooltip>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
