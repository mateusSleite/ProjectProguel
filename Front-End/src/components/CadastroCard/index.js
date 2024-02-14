import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Cartao } from "./styled";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { SECRET } from "../../env";
import axios from "axios";
import { i18n } from "../../translate/i18n";
import NavBar from "../NavbarLogin";

export default function CadastroCard() {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const json = {
      name,
      cpf,
      date,
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />
      <Cartao onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>{i18n.t("cadastro.name")}</Form.Label>
            <Form.Control
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{i18n.t("cadastro.email")}</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Col xs={12} sm={6}>
            <Form.Label>{i18n.t("cadastro.cpf")}</Form.Label>
            <Form.Control
              type="cpf"
              value={cpf}
              onChange={(e) => setCPF(e.target.value)}
            />
          </Col>

          <Col xs={12} sm={6}>
            <Form.Label>{i18n.t("cadastro.date")}.</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Label>{i18n.t("cadastro.password")}</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>

          <Col xs={12} sm={6}>
            <Form.Label>{i18n.t("cadastro.passConfirm")}</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          {i18n.t("cadastro.button")}
        </Button>
      </Cartao>
    </>
  );
}
