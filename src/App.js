import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

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
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
