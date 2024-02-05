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
  margin-top: 100px;


  input {
    border: 1px solid #555;
    border-radius: 5px;
    padding: 8px;
    width: 100%;
  }

  input[type="email"],
  input[type="password"] {
    background-color: #333;
    color: white;
  }

  button {
    background-color: #333;
    border: 1px solid #555;
    color: white;
    padding: 8px 15px;
    cursor: pointer;
  }
`;