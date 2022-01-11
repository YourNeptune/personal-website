import "./css/main.min.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll/modules";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about" className="">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
}

export default App;
