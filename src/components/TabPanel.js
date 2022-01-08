import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
          <ProjectCard />
          <ProjectCard />
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
