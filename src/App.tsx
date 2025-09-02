import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./Pages/Projects";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
