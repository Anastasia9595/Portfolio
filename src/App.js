import Navbar from "./components/navbar";
//import About from "./pages/about/about";
import AboutNew from "./pages/aboutme/aboutme";
import Contact from "./pages/contact/contact";
import Experience from "./pages/experience/experience";

import Projects from "./pages/projects/projects";
import Start from "./pages/start/start";

function App() {
  return (
    <div>
      <Navbar />

      <Start />

      <AboutNew />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
