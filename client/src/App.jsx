import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Model3 from "./pages/Model3";
import ModelS from "./pages/ModelS";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import SolarRoof from "./pages/SolarRoof";
import SolarPanels from "./pages/SolarPanels";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/models" element={<ModelS />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="/modelx" element={<ModelX />} />
        <Route path="/modely" element={<ModelY />} />
        <Route path="/solarroofs" element={<SolarRoof />} />
        <Route path="/solarpanels" element={<SolarPanels />} />
      </Routes>
    </Router>
  );
}

export default App;
