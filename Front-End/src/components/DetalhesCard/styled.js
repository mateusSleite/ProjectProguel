import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const Details = styled(Container)`
   
`;

export const Linha = styled(Row)`
    display: flex;
    flex-wrap: wrap;
`;

export const Coluna = styled(Col)`
    display: flex;
    justify-content: center;
    padding: 0;
`;

export const Problema = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    

`;

export const Titulo = styled.label`
    font-size: 2em;
    font-family: "Redriver"; 
    color: #f0444a;
    margin-top: 7em;
    @media (max-width: 1400px) {
        margin-top: 4em;
    }
    @media (max-width: 992px) {
        
    }
    @media (max-width: 768px) {
        font-size: 1.5em;
        margin-top: 1em;
    }
    
`;

export const Desc = styled.label`
    font-size: 1.5em;
    font-family: "Gotham"; 
    color: white;
    margin-top: 1em;
    margin-bottom: 2em;
    @media (max-width: 768px) {
        font-size: 1.0em;
        margin-bottom: 0em;
        margin-top: 1em;
    }
`;

export const Border = styled.div`
    width: 50%;
    height: 36em;
    display: flex;
    flex-direction: column;
    background-color: black;
    border: 2px solid #f0444a;
    margin-top: 10em;
    border-radius: 20px;

    @media (max-width: 1400px) {
        width: 70%;
    }
    @media (max-width: 992px) {
        margin-top: 1em;
        margin-bottom: 2em;
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 90%;
        height: 27em;
        margin-bottom: 2em;
        margin-top: 2em;
    }
    
`;

export const CustoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Custo = styled.label`
    font-size: 2em;
    font-family: "Redriver"; 
    color: #f0444a;
    margin-top: 1em;
    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

export const Precos = styled.div`
    
`;

export const CustoInput = styled.label`
    font-size: 2em;
    font-family: "Gotham"; 
    color: white;
    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

export const DetalhesInput = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 3em;
    
`;

export const DetalhesLabel = styled.label`
    font-size: 1.5em;
    font-family: "Redriver"; 
    color: #f0444a;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const ResLabel = styled.label`
    font-size: 1.5em;
    font-family: "Gotham"; 
    color: white;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const DivInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ResChat = styled.label`
    margin-top: 2em;
    margin-bottom: 1em;
    text-align: center;
    font-size: 1.5em;
    font-family: "Gotham"; 
    color: white;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const LinkButton = styled.a`
    background-color: #f0444a;
    width: 11em;
    font-size: 1.1em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out; 
    font-family: "Gotham";
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
        font-size: 0.8em;
    }
`;


