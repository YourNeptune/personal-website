import { Box, Grid, Grow, Stack, Typography } from "@mui/material";
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
      {value === index && (
        <div className="TabPanel__projects">
          {projectsArray.map((_, index) => {
            //   style={{transitionDelay: `${index} * 0.2s`}}
            return (
              <div className="TabPanel__project" >
                <ProjectCard title={_.title} img={_.img} />
                {console.log(index)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TabPanel;
