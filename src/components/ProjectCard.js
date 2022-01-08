import * as React from "react";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="ProjectCard flex flex-center">
      <img src={img} alt="img" />
    </div>
  );
};

export default ProjectCard;
