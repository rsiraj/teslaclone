import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import Landing from "./pages/Landing";
import "./App.css";
import Model3 from "./pages/Model3";
import ModelS from "./pages/ModelS";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import SolarRoof from "./pages/SolarRoof";
import SolarPanels from "./pages/SolarPanels";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing data={data} />} />
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
