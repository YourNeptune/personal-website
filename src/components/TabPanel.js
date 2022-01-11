import React from "react";
import ProjectCard from "./ProjectCard";

const TabPanel = (props) => {
  const { children, value, index, projectsArray, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="TabPanel"
    >
      {value === index && (value === 0 || value === 1) && (
        <div className="TabPanel__projects">
          {projectsArray.map((_, index) => {
            return (
              <div
                key={index}
                className="TabPanel__project"
                // style={{ transitionDelay: `${index * 500}ms` }}
              >
                <ProjectCard
                  img={_.img}
                  title={_.title}
                  websiteUrl={_.websiteUrl}
                  githubUrl={_.githubUrl}
                />
              </div>
            );
          })}
        </div>
      )}

      {value === index && value === 2 && (
        <div className="TabPanel__designs">
          {projectsArray.map((_) => {
            return (
              <div className="TabPanel__design">
                <img src={_.img} alt={_.title} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TabPanel;
