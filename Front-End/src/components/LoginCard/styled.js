import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const LoginBord = styled(Container)`
  display: flex;
  align-items: center;
  margin-top: 5em;
  width: 60em;
  height: 40em;
  background-color: black;
`;

export const Linha = styled(Row)`
    width: 100%;
    height: 100%;
`;

export const Coluna = styled(Col)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: solid #f0444a 2px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
`;

export const Coluna2 = styled(Col)`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid #f0444a 2px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
`;

export const LogoImg = styled.img`
    height: 7em; 
    @media (max-width: 1400px) {
      height: 8em; 
    }
    @media (max-width: 992px) {
        height: 1.5em;
    }
    @media (max-width: 768px) {
        height: 1.5em;
    }
`;

export const Frase = styled.label`
    margin-top: 2em;
    margin-bottom: 3em !important;
    text-align: center;
    font-size: 2em;
    margin-bottom: 0.5em;
    color: white;
    font-family: "Redriver"; 
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const FraseDe = styled.label`
    margin-top: 1em;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #f0444a;
    font-family: "Redriver"; 
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const InputModal = styled.input`
    background-color: transparent;
    border: solid 2px #f0444a;
    width: 70%;
    height: 3em;
    color: white;
    margin-bottom: 1.5em;
    font-family: "Gotham"; 
    border-radius: 3px;
    @media (max-width: 1400px) {
        font-size: 1.3em;
    }
    @media (max-width: 992px) {
        font-size: 0.8em;
    }
    @media (max-width: 768px) {
        font-size: 0.5em;
    }
`;

export const LabelLogin = styled.label`
    text-align: center;
    font-size: 1em;
    margin-bottom: 0.5em;
    color: white;
    font-family: "Gotham"; 
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const LinkButton = styled.a`
    background-color: #f0444a;
    width: 10em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    transition: box-shadow 0.3s ease-in-out; 
    font-family: "Redriver";
    text-decoration: none;
    color: black;
    cursor: pointer;
    
    &:hover {
        box-shadow: 0 0 15px 3px rgba(255, 0, 0, 0.6); 
    }

    @media (max-width: 1400px) {
        font-size: 0.9em;
    }
    @media (max-width: 992px) {
        font-size: 1EM;
    }
    @media (max-width: 768px) {
        font-size: 0.6em;
    }
`;

