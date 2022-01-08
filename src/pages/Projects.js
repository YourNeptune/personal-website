import { Box, Tab, Tabs, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import TabPanel from "../components/TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const [value, setValue] = React.useState(0);

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
    <div className="Projects mycontainer">
      <h1 className="Projects__title flex flex-center">Projects</h1>
      <ThemeProvider theme={theme} className="Projects__tabs">
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="ReactJS" {...a11yProps(0)} />
            <Tab label="Javascript" {...a11yProps(1)} />
            <Tab label="Web design" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
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
