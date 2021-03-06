import { Fade, Modal, Typography, Backdrop, Box } from "@mui/material";
import * as React from "react";
import { BsFillEyeFill, BsGithub, BsArrowRight } from "react-icons/bs";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ title, img, websiteUrl, githubUrl, value }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ProjectCard">
      <section className="ProjectCard__img">
        <img src={img} alt="img" />
      </section>
      <section className="ProjectCard__label ">
        <section className="ProjectCard__label__container flex flex-col flex-center">
          <h3 className="ProjectCard__label__title">{title}</h3>
          {value === 0 || value === 1 ? (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ProjectCard__label__button flex flex-center"
            >
              <p>View Website</p>
              <BsArrowRight />
            </a>
          ) : (
            <>
              <div
                className="ProjectCard__label__button flex flex-center"
                onClick={handleOpen}
              >
                <p>View</p>
                <BsArrowRight />
              </div>
              <ProjectModal open={open} handleClose={handleClose} img={img} />
            </>
          )}
        </section>

        {(value === 0 || value === 1) && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ProjectCard__label__githubLogo"
          >
            <BsGithub />
          </a>
        )}
      </section>
    </div>
  );
};

export default ProjectCard;
