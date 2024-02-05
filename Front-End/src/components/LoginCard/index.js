import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Cartao } from "./styled";

export default function LoginCard() {
  return (
    <Cartao>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Button variant="primary" className="mb-3">
        Login
      </Button>
    </Cartao>
  );
}
