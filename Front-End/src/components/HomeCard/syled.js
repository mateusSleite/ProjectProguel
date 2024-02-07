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
    margin-top: 15em;
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
    padding: 0;
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
    font-size: 3em;
    color: #f0444a;
    margin: 3em 0 3em 0;
    font-family: "Wardrum"; 
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 1em;
        margin: 0;
    }
`;

export const EtapasDiv = styled.div`
    width: 99.3%;
`;

export const PowerImg = styled.img`
    width: 1.5em;
    margin-bottom: 2.5em;
    margin-top: 2.5em;
    padding: 0;
    @media (max-width: 1400px) {
        width: 1em;
    }
    @media (max-width: 992px) {
        width: 1em;
    }
    @media (max-width: 750px) {
        width: 0.5em;
    }
`;

export const PowerImgP = styled.img`
    width: 1.5em;
    margin-bottom: 2.5em;
    margin-top: 1em;
    padding: 0;
    @media (max-width: 1400px) {
        width: 1em;
    }
    @media (max-width: 992px) {
        width: 1em;
    }
    @media (max-width: 750px) {
        width: 0.5em;
    }
`;


export const PowerImgDeitado = styled.img`
    width: 10em;
    position: relative;
    left: 80px;
    padding: 0;
    @media (max-width: 1400px) {
        width: 5em;
        left: 35px;
    }
    @media (max-width: 992px) {
        width: 4em;
        left: 27px;
    }
    @media (max-width: 750px) {
        width: 3em;
        left: 21px;
    }
`;

export const PowerImgDeitadoEsq = styled.img`
    width: 10em;
    position: relative;
    right: 80px;
    padding: 0;
    @media (max-width: 1400px) {
        width: 5em;
        right: 35px;
    }
    @media (max-width: 992px) {
        width: 4em;
        right: 30px;
    }
    @media (max-width: 750px) {
        right: 21px;
        width: 3em;
    }
`;

export const TitulosEtapas = styled.label`
    font-size: 2.5em;
    color: #f0444a;
    font-family: "Redriver"; 
    @media (max-width: 1400px) {
        font-size: 1.7em;
    }
    @media (max-width: 992px) {
        font-size: 0.8em;
    }
    @media (max-width: 750px) {
        font-size: 0.7em;
    }
`

export const ProcessoEtapas = styled.label`
    text-align: center;
    position: relative;
    right: 3em;
    margin-top: 8.5em;
    font-size: 1.7em;
    color: white;
    font-family: "Gotham"; 
    @media (max-width: 1400px) {
        margin-top: 8em;
        font-size: 1.2em;
        right: 4em;
    }
    @media (max-width: 992px) {
        margin-top: 20em;
        font-size: 0.6em;
        right: 4.5em;
    }
    @media (max-width: 750px) {
        margin-top: 16em;
        font-size: 0.5em;
        right: 2em;
    }
`

export const ProcessoEtapasEsq = styled.label`
    text-align: center;
    position: relative;
    left: 3.5em;
    margin-top: 4em;
    font-size: 2em;
    color: white;
    font-family: "Gotham"; 
    @media (max-width: 1400px) {
        margin-top: 5em;
        font-size: 1.2em;
        right: 4em;
    }
    @media (max-width: 992px) {
        margin-top: 16em;
        font-size: 0.6em;
        left: 5em;
    }
    @media (max-width: 750px) {
        margin-top: 11em;
        font-size: 0.5em;
        left: 2.5em;
    }
`

export const ProcessoEtapasUlt = styled.label`
    text-align: center;
    position: relative;
    right: 3em;
    margin-top: 3em;
    font-size: 2em;
    color: white;
    font-family: "Gotham"; 
    @media (max-width: 1400px) {
        margin-top: 5em;
        font-size: 1.2em;
        right: 4em;
    }
    @media (max-width: 992px) {
        margin-top: 16em;
        font-size: 0.6em;
        right: 4.5em;
    }
    @media (max-width: 750px) {
        margin-top: 12em;
        font-size: 0.5em;
        right: 2em;
    }
`

export const TituloDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 11em;
    position: relative;
    left: 15em;
    @media (max-width: 1400px) {
        margin-top: 10.5em;
        left: 9em;
    }
    @media (max-width: 992px) {
        margin-top: 11.5em;
        left: 11em;
    }
    @media (max-width: 750px) {

        margin-top: 8em;
        left: 3em;
    }
`;

export const TituloDivDi = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 7em;
    position: relative;
    right: 15em;
    @media (max-width: 1400px) {
        margin-top: 5.5em;
        left: -8em;
    }
    @media (max-width: 992px) {
        margin-top: 10em;
        left: -8em;
    }
    @media (max-width: 750px) {

        margin-top: 5em;
        left: -2em;
    }
`;

export const TituloDivUl = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 4.5em;
    position: relative;
    left: 15em;
    @media (max-width: 1400px) {
        margin-top: 3em;
        left: 9em;
    }
    @media (max-width: 992px) {
        margin-top: 9.5em;
        left: 11em;
    }
    @media (max-width: 750px) {
        margin-top: 5em;
        left: 3em;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Volta = styled.div`
    border-radius: 50%;
    width: 4em;
    height: 4em;
    background-color: rgb(0, 0, 0);
    border: 2px solid #f0444a;
    overflow: hidden;
    margin: 3em 1em 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2em 3em 5em 3em;
    cursor: pointer;

    @media (max-width: 1400px) {
        width: 3em;
        height: 3em;
        margin: 2em 1em 5em 1em;
        border: 1px solid #f0444a;
    }
    @media (max-width: 992px) {
        
    }
    @media (max-width: 750px) {
       margin: 0;
       width: 2em;
       height: 2em;
       border: 1px solid #f0444a;
       margin: 2em 0.8em 5em 0.8em;
    }

    &:hover {
        background-color: #f0444a;

        img {
            filter: grayscale(100%) brightness(0);
        }
    }
`;

export const Contatos = styled.label`
    color: #f0444a;
    font-family: "Redriver"; 
    font-size: 2em;
    margin-top: 8em;

    @media (max-width: 1400px) {
        margin-top: 5em;
        font-size: 1em;
    }
    @media (max-width: 992px) {
        
    }
    @media (max-width: 750px) {
        margin-top: 5em;
        font-size: 0.7em;
    }
`
export const FooterImg = styled.img`
    width: 2em;
    transition: filter 0.5s ease;
    @media (max-width: 1400px) {
        width: 1.5em;
    }
    @media (max-width: 992px) {
        
    }
    @media (max-width: 750px) {
        width: 1em;
    }
`;