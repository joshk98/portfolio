import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
