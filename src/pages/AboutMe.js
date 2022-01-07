import React from "react";
import me from "../img/me.png";
import { BsGithub, BsEnvelopeFill, BsLinkedin } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="AboutMe mycontainer flex">
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
          <div className="AboutMe__link">
            <BsEnvelopeFill />
          </div>
          <div className="AboutMe__link">
            <BsGithub />
          </div>
          <div className="AboutMe__link">
            <BsLinkedin />
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
