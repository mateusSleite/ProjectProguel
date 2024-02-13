import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Cartao } from "./styled";
import { useState } from "react";
import { SECRET } from "../../env";
import CryptoJS from "crypto-js";
import axios from "axios";
import { i18n } from "../../translate/i18n"

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
      var res = await axios.post("http://localhost:8080/api/user/login", {jsonCrypt});
      sessionStorage.setItem("token", res.data.token);
      navigate("/asdsadd");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Cartao onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>{i18n.t("login.login")}</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{i18n.t("login.password")}</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" className="mb-3" onClick={handleSubmit}>
      {i18n.t("login.button")}
      </Button>
    </Cartao>
  );
}
