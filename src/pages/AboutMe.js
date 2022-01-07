import React from "react";
import me from "../img/me.png";
import { BsGithub, BsEnvelope, BsLinkedin } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="AboutMe mycontainer">
      <section className="  AboutMe__content">
        <div className="flex flex-col flex-center">
          <img src={me} alt="me" />
          <h1 className="AboutMe__title">Hi, I'm Lixuan Luo</h1>
        </div>

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
      </section>
      <section className="AboutMe__contactInfo flex flex-center">
        <div className="AboutMe__link">
          <BsEnvelope />
        </div>
        <div className="AboutMe__link">
          <BsGithub />
        </div>
        <div className="AboutMe__link">
          <BsLinkedin />
        </div>

        <div>
          {/* <BsGithub /> */}
          {/* <a
            href="https://github.com/YourNeptune"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/YourNeptune
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
