import React from "react";
import { Container } from "react-bootstrap";
import me from "../img/me.png";

const AboutMe = () => {
  return (
    <Container className="AboutMe container">
      {/* <h1>About Me</h1> */}
      <section className="flex flex-center AboutMe__content">
        <img src={me} alt="me" />
        <h1>Hi, I'm Lixuan Luo</h1>
      </section>
    </Container>
  );
};

export default AboutMe;
