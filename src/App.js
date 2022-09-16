import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
