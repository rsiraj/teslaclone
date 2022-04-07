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
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Account from "./pages/Account";
// import Footer from "./components/Footer";

function App() {
  const [landingData, setLandingData] = useState([]);
  const [solar, setSolar] = useState([]);
  const [carDataX, setCarDataX] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000").then((response) => {
      setLandingData(response.data);
    });
    Axios.get("http://127.0.0.1:8000/solarroofs").then((response) => {
      setSolar(response.data);
    });
    Axios.get("http://127.0.0.1:8000/modelx").then((response) => {
      setCarDataX(response.data);
    });
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing data={landingData} />} />
        <Route path="/models" element={<ModelS data={carDataX} />} />
        <Route path="/model3" element={<Model3 data={carDataX} />} />
        <Route path="/modelx" element={<ModelX data={carDataX} />} />
        <Route path="/modely" element={<ModelY data={carDataX} />} />
        <Route path="/solarroofs" element={<SolarRoof data={solar} />} />
        <Route path="/solarpanels" element={<SolarPanels data={solar} />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
