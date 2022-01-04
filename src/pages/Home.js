import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Typed from "typed.js";

const Home = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [ `A Front-End Developer`, `UI/UX Designer`, `Programmer`],
      startDelay: 500,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay: 2000,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container className="Home">
      <div className="Home__text">
        <h2>I' am</h2>
        <h1 className="Home__name">
          Lixuan <br /> Luo
        </h1>
        <span className='Home__typed' ref={typeTarget} />
      </div>
    </Container>
  );
};

export default Home;
