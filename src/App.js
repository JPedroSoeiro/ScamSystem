import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lista from "./pages/Lista";
import Home from "./pages/Home";
import Entrada from "./pages/Entrada";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Lista" element={<Lista />} />
        <Route path="/" element={<Entrada />} />
      </Routes>
    </Router>
  );
};

export default App;
