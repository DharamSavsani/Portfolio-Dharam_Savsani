import Contact from "./components/Contact.js";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./css/app.css";

 // eslint-disable-next-line

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
