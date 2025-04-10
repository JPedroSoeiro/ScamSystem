import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

function Entrada() {
  const navigate = useNavigate();
  const goToLista = () => {
    navigate("/Lista");
  };

  return (
    <div className="container">
      <div className="entrada">
        <h1>Scam System</h1>
        <button className="visualizeButton" onClick={goToLista}>
          Avançar
        </button>
      </div>
    </div>
  );
}
export default Entrada;
