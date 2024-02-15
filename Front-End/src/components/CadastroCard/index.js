import logo from "../../assents/img/Logo.png";
import { Coluna, Coluna2, Frase, Linha, LoginBord, LabelLogin, LogoImg, FraseDe, InputModal, LinkButton, Centraliza, ToLogin } from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { SECRET } from "../../env";
import axios from "axios";
import { i18n } from "../../translate/i18n";
import NavBar from "../NavbarLogin";

export default function CadastroCard() {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const json = {
      name,
      cpf,
      email,
      password,
      confirmPassword,
    };
    const jsonCrypt = CryptoJS.AES.encrypt(
      JSON.stringify(json),
      SECRET
    ).toString();
    console.log(json);
    try {
      var res = await axios.post("http://localhost:8080/api/user/register", {
        jsonCrypt,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <Centraliza>
      <NavBar />
      <LoginBord fluid>
        <Linha>
          <Coluna xxl={5} xl={5} lg={5} xs={5} md={5}>
            <LogoImg src={logo}></LogoImg>
            <FraseDe>{i18n.t("cadastro.welcome")}</FraseDe>
          </Coluna>
          <Coluna2 xxl={7} xl={7} lg={7} xs={7} md={7}>
            <Frase>{i18n.t("cadastro.button")}</Frase>
            <LabelLogin>{i18n.t("cadastro.name")}</LabelLogin>
            <InputModal value={name} onChange={(e) => setName(e.target.value)}></InputModal>
            <LabelLogin>{i18n.t("cadastro.email")}</LabelLogin>
            <InputModal value={email} onChange={(e) => setEmail(e.target.value)}></InputModal>
            <LabelLogin>{i18n.t("cadastro.cpf")}</LabelLogin>
            <InputModal value={cpf} onChange={(e) => setCPF(e.target.value)}></InputModal>
            <LabelLogin>{i18n.t("cadastro.password")}</LabelLogin>
            <InputModal type="password" value={password} onChange={(e) => setPassword(e.target.value)}></InputModal>
            <LabelLogin>{i18n.t("cadastro.passConfirm")}</LabelLogin>
            <InputModal type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></InputModal>
            <LinkButton onClick={handleSubmit}>{i18n.t("cadastro.button")}</LinkButton>
            <ToLogin href="/login">LOGIN</ToLogin>
          </Coluna2>
        </Linha>
      </LoginBord>
    </Centraliza>


  );
}
