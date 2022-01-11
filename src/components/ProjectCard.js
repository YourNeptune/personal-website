import * as React from "react";
import { BsFillEyeFill, BsGithub, BsArrowRight } from "react-icons/bs";

const ProjectCard = ({ title, img, websiteUrl, githubUrl }) => {
  return (
    <div className="ProjectCard">
      <section className="ProjectCard__img">
        <img src={img} alt="img" />
      </section>
      <section className="ProjectCard__label ">
        <section className="ProjectCard__label__container flex flex-col flex-center">
          <h3 className="ProjectCard__label__title">{title}</h3>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ProjectCard__label__button flex flex-center"
          >
            <p>View Website</p>
            <BsArrowRight />
          </a>
        </section>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ProjectCard__label__githubLogo"
        >
          <BsGithub />
        </a>
      </section>
    </div>
  );
};

export default ProjectCard;
