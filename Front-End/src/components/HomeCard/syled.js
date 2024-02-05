import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const Home = styled(Container)`
   display: flex;
   align-items: center;
   margin-top: 3em;
   flex-direction: column;
   padding: 0;
   @media (max-width: 768px) {
        width: 17em;
        margin: 1em 0 0 0;
    }
`;

export const ImgCode = styled.img`
    width: 35em;
    margin-bottom: 5em;
    @media (max-width: 1400px) {
        width: 25em;
    }
    @media (max-width: 768px) {
        width: 14em;
        margin-bottom: 2em;
    }
`;

export const DivFrase = styled.div`
    width: 50em;
    margin-top: 5em;
    margin-bottom: 5em;
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
        width: 30em;
    }
    @media (max-width: 768px) {
        margin-top: 2em;
        width: 17em;
    }
`;

export const Frase = styled.label`
    text-align: center;
    font-size: 2em;
    color: white;
    font-family: "Gotham"; 
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 0.6em;
    }
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
    width: 75em;
    padding: 0;
    @media (max-width: 1400px) {
        width: 60em;
    }
    @media (max-width: 992px) {
        width: 35em;
    }
    @media (max-width: 750px) {
        width: 18em;
    }
`;

export const Etapas = styled.label`
    text-align: center;
    font-size: 2em;
    color: #f0444a;
    font-family: "Wardrum"; 
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 0.6em;
    }
`;

export const EtapasDiv = styled.div`
    
`;

export const PowerImg = styled.img`
    width: 1.5em;
    padding: 0;
    @media (max-width: 1400px) {
        width: 3em;
    }
    @media (max-width: 992px) {
        width: 3em;
    }
    @media (max-width: 750px) {
        width: 3em;
    }
`;

export const PowerImgDeitado = styled.img`
    width: 10em;
    position: relative;
    left: 80px;
    padding: 0;
    @media (max-width: 1400px) {
        width: 3em;
    }
    @media (max-width: 992px) {
        width: 3em;
    }
    @media (max-width: 750px) {
        width: 3em;
    }
`;

export const PowerImgDeitadoEsq = styled.img`
    width: 10em;
    position: relative;
    right: 80px;
    padding: 0;
    @media (max-width: 1400px) {
        width: 3em;
    }
    @media (max-width: 992px) {
        width: 3em;
    }
    @media (max-width: 750px) {
        width: 3em;
    }
`;

export const TitulosEtapas = styled.label`
    font-size: 3em;
    color: #f0444a;
    font-family: "Redriver"; 
`

export const ProcessoEtapas = styled.label`
    position: relative;
    right: 4em;
    margin-top: 4em;
    font-size: 2em;
    color: white;
    font-family: "Gotham"; 
`



