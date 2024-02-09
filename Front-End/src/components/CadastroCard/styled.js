import Form from "react-bootstrap/Form";
import styled from "styled-components";

export const Cartao = styled(Form)`
  font-family: "Gotham";
  background-color: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;

  input {
    background-color: blue;
    color: white;
    border: 1px solid #555;
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    margin-bottom: 10px;
  }

  input[type="name"],
  input[type="password"],
  input[type="CPF"],
  input[type="date"],
  input[type="email"] {
    background-color: #333;
    color: white;
  }

  button {
    background-color: #333;
    border: 1px solid #555;
    color: white;
    padding: 8px 15px;
    cursor: pointer;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    max-width: 90%;
    padding: 15px;
    margin-top: 20%;
    input {
      margin-bottom: 8px;
    }
  }
`;
