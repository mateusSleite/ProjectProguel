import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const Prin = styled(Container)`
   
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

export const AlinhaLabel = styled(Container)`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Frase = styled.label`
    margin-top: 1em;
    text-align: center;
    font-size: 2em;
    color: white;
    font-family: "Gotham"; 
`;

export const FraseDe = styled.label`
    text-align: center;
    font-size: 3em;
    color: #f0444a;
    margin-bottom: 1em;
    font-family: "Redriver"; 
    `;

export const ConjuntoLogo = styled.div`
    margin: 1em 0 1em 0;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 2.5em; 
`;

export const Linguagem = styled.label`
    margin: 0.3em 0 0 0.3em;
    text-align: center;
    font-size: 2em;
    color: white;
    font-family: "Gotham"; 
`;

export const Borda = styled.div`
    width: 90%;
    height: 30em;
    margin-bottom: 3em;
    border: solid 2px;
    color: #f0444a;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const BordaIn = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 22em;
    margin: 0 0.5em 0 0.5em;
    border: solid 2px;
    color: white;
`;

export const EnglobaDivs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Buttom = styled.button`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    height: 2em;
    background-color: transparent;
    border: none;
`;
export const ImgButtom = styled.img`
    height: 2em; 
`;

export const TituloPedido = styled.label`
    margin: 1em 0 0.5em 1em;
    font-size: 1.5em;
    color: #f0444a;
    font-family: "Gotham"; 
`;

export const Especificacoes = styled.label`
    margin: 0 0 0 1.3em;
    font-size: 1.2em;
    font-family: "Redriver"; 
`;

export const Res = styled.label`
    width: 89%;
    font-size: 1EM;
    font-family: "Gotham"; 
    margin: 0 0 0.5em 1.6em;
`;

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
`;

export const DivDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
`;

export const LinkButton = styled.a`
    background-color: #f0444a;
        width: 10em;
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

    @media (max-width: 768px) {
        
    }
`;



