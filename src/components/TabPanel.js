import React from "react";
import ProjectCard from "./ProjectCard";

const TabPanel = (props) => {
  const { children, value, index, projectsArray, showProjects, ...other } =
    props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="TabPanel"
    >
      {value === index && (
        <div className="TabPanel__projects">
          {projectsArray.map((_, index) => {
            return (
              <div
                key={index}
                className="TabPanel__project"
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                <ProjectCard title={_.title} img={_.img} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TabPanel;
