import React from "react";
import { Container } from "react-bootstrap";
import me from "../img/me.png";

const AboutMe = () => {
  return (
    <div className="AboutMe mycontainer">
      <section className="flex flex-center AboutMe__content">
        <img src={me} alt="me" />
        <h1 className="AboutMe__title">Hi, I'm Lixuan Luo</h1>
        <p className="AboutMe__description">
          I am a Front-End Web Developer and Designer based in Toronto, with a
          passion for creating engaging, entertaining user experiences. I have
          developed a strong understanding of JavaScript, HTML, CSS, ReactJS and
          more!
        </p>
        <br />
        <p className="AboutMe__description">
          I'm excited to make the leap and continue refining my skills with the
          right company.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
