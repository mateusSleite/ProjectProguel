import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const Home = styled(Container)`
   display: flex;
   align-items: center;
   margin-top: 3em;
   flex-direction: column;
   padding: 0;
`;

export const ImgCode = styled.img`
    width: 40em;
    margin-bottom: 7em;
    @media (max-width: 768px) {
        width: 30em;
    }
`;

export const DivFrase = styled.div`
    width: 50em;
    margin-top: 5em;
    margin-bottom: 10em;
`;

export const Frase = styled.label`
    text-align: center;
    font-size: 2em;
    color: white;
    font-family: "Gotham";  
`;

export const Linha = styled(Row)`

`;

export const Coluna = styled(Col)`
  
`;

export const DivCard = styled.div`
    border: solid 3px;
    border-color: #f0444a;
    border-radius: 10px;
`;

export const CardImg = styled.img`
    width:30em;
    border: solid 2px;
    border-color: white;
    border-radius: 5px;
    margin: 2em 2em 2em 2em;
`;




