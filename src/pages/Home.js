import React, { useState } from "react";
import Input from "../services/inputForm";
import { useNavigate } from "react-router-dom";
import "../style.css";
import "../input.css";
import { postLodges } from "../services/lodges";

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    NAME: "",
    NUMBER: "",
    PROFILE_ID: 1,
    EMAIL: "",
    URL_IMAGE: "",
    PASSWORD: "",
    FOUNDATION_DATE: "",
    MEETING_DAY: "",
    MEETING_TIME: "",
    PHONE: "",
    CNPJ: "",
    JURISDICTION: "",
    STREET: "",
    ADDRESS_NUMBER: "",
    COMPLEMENT: "",
    UF: "",
    CITY: "",
    ZIP_CODE: "",
    NEIGHBORHOOD: "",
    REPONSIBLE_NAME: "",
    REPONSIBLE_DEGREE: "",
    REPONSIBLE_EMAIL: "",
    REPONSIBLE_PHONE: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const goToLista = () => {
    navigate("/lista");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const requiredFields = [
      { name: "NAME", label: "Nome" },
      { name: "NUMBER", label: "Número" },
      { name: "PROFILE_ID", label: "ID do Perfil" },
      { name: "EMAIL", label: "E-mail" },
      { name: "PASSWORD", label: "Senha" },
    ];

    for (let field of requiredFields) {
      if (!formData[field.name]) {
        alert(`Preencha o campo ${field.label}`);
        return;
      }
    }

    if (typeof formData.NAME !== "string" || formData.NAME.trim() === "") {
      alert("O campo Nome deve ser um texto válido.");
      return;
    }

    if (typeof formData.NUMBER !== "string" || formData.NUMBER.trim() === "") {
      alert("O campo Número deve ser um texto válido.");
      return;
    }

    if (formData.PASSWORD.length < 6) {
      alert("A senha deve conter pelo menos 6 caracteres.");
      return;
    }

    if (formData.NAME.length > 100) {
      alert("O nome deve conter menos que 100 caracteres.");
      return;
    }

    try {
      await postLodges(formData);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar.");
    }
  }

  return (
    <div className="container">
      <div className="formulario">
        <form className="containerInfo" onSubmit={handleSubmit}>
          <div className="division1">
            <Input
              label="Nome"
              name="NAME"
              value={formData.NAME}
              onChange={handleChange}
              required
            />
            <Input
              label="Número"
              name="NUMBER"
              value={formData.NUMBER}
              onChange={handleChange}
              required
            />
            <Input
              label="ID do Perfil"
              name="PROFILE_ID"
              type="number"
              value={formData.PROFILE_ID}
              onChange={handleChange}
              required
            />
            <Input
              label="E-mail"
              name="EMAIL"
              type="email"
              value={formData.EMAIL}
              onChange={handleChange}
              required
            />
            <Input
              label="Telefone"
              name="PHONE"
              type="tel"
              value={formData.PHONE}
              onChange={handleChange}
              required
            />
            <Input
              label="CNPJ"
              name="CNPJ"
              value={formData.CNPJ}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="division2">
            <Input
              label="CEP"
              name="ZIP_CODE"
              value={formData.ZIP_CODE}
              onChange={handleChange}
              required
            />
            <Input
              label="Rua"
              name="STREET"
              value={formData.STREET}
              onChange={handleChange}
              required
            />
            <Input
              label="Número do Endereço"
              name="ADDRESS_NUMBER"
              value={formData.ADDRESS_NUMBER}
              onChange={handleChange}
              required
            />
            <Input
              label="Complemento"
              name="COMPLEMENT"
              value={formData.COMPLEMENT}
              onChange={handleChange}
              required
            />
          </div>
          <div className="division2">
            <Input
              label="UF"
              name="UF"
              value={formData.UF}
              onChange={handleChange}
              required
            />
            <Input
              label="Cidade"
              name="CITY"
              value={formData.CITY}
              onChange={handleChange}
              required
            />
            <Input
              label="Bairro"
              name="NEIGHBORHOOD"
              value={formData.NEIGHBORHOOD}
              onChange={handleChange}
              required
            />
            <Input
              label="GOB"
              name="JURISDICTION"
              value={formData.JURISDICTION}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="division3">
            <Input
              label="URL da Imagem"
              name="URL_IMAGE"
              type="url"
              value={formData.URL_IMAGE}
              onChange={handleChange}
              required
            />
            <Input
              label="Senha"
              name="PASSWORD"
              type="password"
              value={formData.PASSWORD}
              onChange={handleChange}
              required
            />
            <Input
              label="Data de Fundação"
              name="FOUNDATION_DATE"
              type="date"
              value={formData.FOUNDATION_DATE}
              onChange={handleChange}
              required
            />
            <Input
              label="Dia da Reunião"
              name="MEETING_DAY"
              value={formData.MEETING_DAY}
              onChange={handleChange}
              required
            />
            <Input
              label="Hora da Reunião"
              name="MEETING_TIME"
              type="time"
              value={formData.MEETING_TIME}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="division4">
            <Input
              label="Nome do Responsável"
              name="REPONSIBLE_NAME"
              value={formData.REPONSIBLE_NAME}
              onChange={handleChange}
              required
            />
            <Input
              label="Grau do Responsável"
              name="REPONSIBLE_DEGREE"
              value={formData.REPONSIBLE_DEGREE}
              onChange={handleChange}
              required
            />
            <Input
              label="E-mail do Responsável"
              name="REPONSIBLE_EMAIL"
              type="email"
              value={formData.REPONSIBLE_EMAIL}
              onChange={handleChange}
              required
            />
            <Input
              label="Telefone do Responsável"
              name="REPONSIBLE_PHONE"
              type="tel"
              value={formData.REPONSIBLE_PHONE}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <form onSubmit={handleSubmit}>
          <div className="org2">
            <button className="visualizeButton" onClick={goToLista}>
              Retornar
            </button>
            <button
              type="submit"
              className="visualizeButton"
              onClick={handleSubmit}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
