import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Lista = () => {
  const navigate = useNavigate();
  const returnToLista = () => {
    navigate("/Home");
  };

  return (
    <div className="container2">
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Número</th>
              <th>CEP</th>
              <th>Número</th>
              <th>E-mail</th>
              <th>Senha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pedro Soeiro</td>
              <td>22</td>
              <td>60416000</td>
              <td>(85)981300575</td>
              <td>joaopedro@grupoavp.com.br</td>
              <td>123456</td>
              <td>
                <button className="changeButton">
                  <FaRegEdit color="#00ffff" />
                </button>
                <button className="changeButton">
                  <MdDeleteOutline color="#00ffff" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="visualizeButton" onClick={returnToLista}>
          Realizar novo cadastro
        </button>
      </div>
    </div>
  );
};

export default Lista;
