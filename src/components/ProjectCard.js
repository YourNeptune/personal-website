import * as React from "react";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="ProjectCard">
      <section className="ProjectCard__img">
        <img src={img} alt="img" />
      </section>
      <section className="ProjectCard__label ">
        <p>{title}</p>
      </section>
    </div>
  );
};

export default ProjectCard;
