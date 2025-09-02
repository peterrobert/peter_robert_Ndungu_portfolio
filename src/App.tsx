import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./Pages/Projects";
import AboutPage from "./Pages/About";

function App() {
  return (
    <>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
