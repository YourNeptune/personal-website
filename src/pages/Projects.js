import { Box, Tab, Tabs, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../components/TabPanel";
import {
  reactJSProjects,
  htmlProjects,
  designProjects,
} from "../doc/projects_File";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#db9a68",
      },
    },
  });

  return (
    <div className="Projects mycontainer ">
      <h1 className="Title flex flex-col flex-center">Projects</h1>
      <p className="Subtitle flex flex-col flex-center">
        Here are some projects that I have made
      </p>
      <ThemeProvider theme={theme}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="ReactJS" {...a11yProps(0)} />
            <Tab label="HTML/CSS" {...a11yProps(1)} />
            <Tab label="Web design" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} projectsArray={reactJSProjects}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} projectsArray={htmlProjects}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} projectsArray={designProjects}>
          Item Three
        </TabPanel>
      </ThemeProvider>
    </div>
  );
};

export default Projects;
