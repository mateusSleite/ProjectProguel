import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Coluna, Coluna2, Frase, Linha, LoginBord, LabelLogin, LogoImg, FraseDe, InputModal, LinkButton } from "./styled";
import { useState } from "react";
import { SECRET } from "../../env";
import logo from "../../assents/img/Logo.png";
import CryptoJS from "crypto-js";
import axios from "axios";
import { i18n } from "../../translate/i18n";
import NavBar from "../NavbarLogin";

export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const json = {
      email,
      password,
    };
    const jsonCrypt = CryptoJS.AES.encrypt(
      JSON.stringify(json),
      SECRET
    ).toString();

    try {
      var res = await axios.post("http://localhost:8080/api/user/login", {
        jsonCrypt,
      });
      sessionStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  function navigateCadastro() {
    navigate("/cadastro");
  }

  return (
    <>
      <NavBar />
      <LoginBord fluid>
        <Linha>
          <Coluna xxl={5} xl={5} lg={5} xs={5} md={5}>
            {/* <Frase>SEJA</Frase> */}
            <LogoImg src={logo}></LogoImg>
            <FraseDe>{i18n.t("login.welcome")}</FraseDe>
          </Coluna>
          <Coluna2 xxl={7} xl={7} lg={7} xs={7} md={7}>
            <Frase>{i18n.t("login.button")}</Frase>
            <LabelLogin>{i18n.t("login.login")}</LabelLogin>
            <InputModal value={email} onChange={(e) => setEmail(e.target.value)}></InputModal>
            <LabelLogin>{i18n.t("login.password")}</LabelLogin>
            <InputModal type="password" value={password} onChange={(e) => setPassword(e.target.value)}></InputModal>
            <LinkButton onClick={handleSubmit}>{i18n.t("login.button")}</LinkButton>
          </Coluna2>
        </Linha>
      </LoginBord>
    </>
  );
}
