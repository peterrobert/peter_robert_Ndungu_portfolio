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
      <HomePage />
      <AboutPage />
      {/* Routes */}
      <Routes>
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
