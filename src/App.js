import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
