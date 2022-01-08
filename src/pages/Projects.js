import { Box, Tab, Tabs, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../components/TabPanel";
import todo_website from "../img/todo_website.png";
import sunnyside_landing_page from "../img/sunnyside_landing_page.png";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const [value, setValue] = useState(0);
  const [reactJSProjects, setProjectsArray] = useState([
    { title: "Todo App", img: todo_website },
    { title: "Todo App", img: todo_website },
    { title: "Todo App", img: todo_website },
    { title: "Todo App", img: todo_website },
  ]);
  const [htmlProjects, setHtmlProjects] = useState([
    { title: "sunnyside landing page", img: sunnyside_landing_page },
  ]);



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
    <div className="Projects mycontainer flex flex-col flex-center">
      <h1 className="Projects__title">Projects</h1>
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
        <TabPanel
          value={value}
          index={0}
          projectsArray={reactJSProjects}
        >
          Item One
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          projectsArray={htmlProjects}
        >
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </ThemeProvider>
    </div>
  );
};

export default Projects;
