import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Cartao } from "./styled";
import { useState } from "react";

export default function CadastroCard() {

  var [name, setName] = useState("");
  var [cpf, setCPF] = useState("");
  var [date, setDate] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(){
    // Implementar função
  }



  return (
    <Cartao>
      <Form>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        
        <Col xs={12} sm={6} controlId="formGridCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="cpf" value={cpf} onChange={(e) => setCPF(e.target.value)}/>
          </Col>

          <Col xs={12} sm={6} controlId="formGridDate">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} sm={6} controlId="formGridSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Col>

          <Col xs={12} sm={6} controlId="formGridConfirmSenha">
            <Form.Label>Confirmar Senha</Form.Label>
            <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Col>
        </Row>     

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Cartao>
  );
}

