import Navbar from "./components/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Experience from "./pages/experience/experience";

import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Start from "./pages/start/start";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Start />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
