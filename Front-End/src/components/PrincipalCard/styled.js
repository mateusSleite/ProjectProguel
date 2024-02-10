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
    text-align: center;
    font-size: 3em;
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

export const ConjuntoLogo = styled.div`
    margin: 1em 0 1em 0;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 2.5em; 
    @media (max-width: 1400px) {
        height: 1.5em;
    }
    @media (max-width: 992px) {
        height: 1.5em;
    }
    @media (max-width: 768px) {
        height: 1.5em;
    }
`;

export const Linguagem = styled.label`
    margin: 0.3em 0 0 0.3em;
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
        font-size: 1em;
    }
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
    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        height: 20em;
    }
`;


export const BordaIn = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 22em;
    margin: 0 0.5em 0 0.5em;
    border: solid 2px;
    color: white;
    @media (max-width: 1400px) {
        height: 23em;
    }
    @media (max-width: 992px) {
        height: 23em;
    }
    @media (max-width: 768px) {
        height: 15em;
    }
    
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
    @media (max-width: 1400px) {
        font-size: 1.2em;
    }
    @media (max-width: 992px) {
        height: 17em;
    }
    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;

export const Especificacoes = styled.label`
    margin: 0 0 0 1.3em;
    font-size: 1.2em;
    font-family: "Redriver"; 
    @media (max-width: 1400px) {
        font-size: 1em;
    }
    @media (max-width: 992px) {
        font-size: 1.2EM;
    }
    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`;

export const Res = styled.label`
    width: 89%;
    font-size: 1EM;
    font-family: "Gotham"; 
    margin: 0 0 0.5em 1.6em;
    @media (max-width: 1400px) {
        font-size: 0.8em;
    }
    @media (max-width: 992px) {
        font-size: 1EM;
    }
    @media (max-width: 768px) {
        font-size: 0.6em;
    }
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

export const CriarPedi = styled.a`
    background-color: #f0444a;
    width: 10em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out; 
    font-family: "Gotham";
    text-decoration: none;
    margin-bottom: 2em;
    color: black;
    cursor: pointer;
    
    &:hover {
        box-shadow: 0 0 15px 3px rgba(255, 0, 0, 0.6); 
    }

    @media (max-width: 1400px) {
        font-size: 1.5em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`;

export const FraseMo = styled.label`
    margin-top: 0.5EM;
    text-align: center;
    font-size: 1.5em;
    color: white;
    font-family: "Gotham"; 
     @media (max-width: 1400px) {
        font-size: 1.2em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`;

export const FraseDeMo = styled.label`
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #f0444a;
    font-family: "Redriver"; 
    @media (max-width: 1400px) {
        font-size: 1.2em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
    }
    @media (max-width: 768px) {
        font-size: 0.8  em;
    }
    
`;

export const AlinhaLabelModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px; 
    border-bottom-left-radius: 10px; 
    border-bottom-right-radius: 10px; 
    border-top: 2px solid #fff; 
    border-bottom: 2px solid #fff; 
    border-left: 0; 
    border-right: 0;
    height: auto;
    margin-bottom: 6em;
    width: 20em;
    @media (max-width: 1400px) {
        width: 15em;
        font-size: 1.5em;
        margin-bottom: 2em;
    }
    @media (max-width: 992px) {
        font-size: 1.0em;
        margin-bottom: 2em;
    }
    @media (max-width: 768px) {
        width: 10em;
        margin-bottom: 2em;
    }
`;

export const LabelModal = styled.label`
    text-align: center;
    color: white;
    font-family: "Redriver"; 
    font-size: 1.1em;
    margin-bottom: 0.5em;
    @media (max-width: 1400px) {
        font-size: 1.1em;
    }
    @media (max-width: 992px) {
        font-size: 0.6em;
    }
    @media (max-width: 768px) {
        font-size: 0.5em;
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

export const Select = styled.select`
    text-align: center;
    font-size: 16px;
    color: white;
    margin-bottom: 1.5em;
    font-family: "Gotham"; 
    width: 70%;
    height: 3em;
    border: 2px solid #f0444a;
    background-color: transparent;
    border-radius: 3px;
    outline: none;
    appearance: none; 

    &:checked {
        background-color: #f0444a;
        color: #f0444a;
        size: 1;
    }

    option {
        color: white;
        background-color: black; 
        border: 2px solid #f0444a;
    }
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


export const LabelModalDes = styled.label`
    color: white;
    font-family: "Redriver"; 
    font-size: 1.1em;
    margin-bottom: 0.5em;
    @media (max-width: 1400px) {
        font-size: 1.1em;
    }
    @media (max-width: 992px) {
        font-size: 0.6em;
    }
    @media (max-width: 768px) {
        font-size: 0.5em;
    }
`;

export const TextAreaModalDes = styled.textarea`
    display: block;
    background-color: transparent;
    border: solid 2px #f0444a;
    width: 90%;
    height: 86%;
    color: white;   
    font-family: "Gotham";
    border-radius: 3px;
    resize: none; 
    overflow: auto;
    @media (max-width: 1400px) {
        font-size: 1.2em;
    }
    @media (max-width: 992px) {
        font-size: 0.9em;
    }
    @media (max-width: 768px) {
        font-size: 0.6em;
    }
`;

export const CustoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Traco = styled.label`
    color: white;
    font-family: "Redriver"; 
    font-size: 1.1em;
    margin: 0 0.5em 0 0.5em;
    @media (max-width: 992px) {
        font-size: 1.0em;
        margin: 0 0.3em 0 0.3em;
    }
    @media (max-width: 768px) {
        height: 2em;
        margin: 0 0.3em 0 0.3em;
        font-size: 0.6em;
    }
`;

export const InputModalCusto = styled.input`
    background-color: transparent;
    text-align: center;
    border: solid 2px #f0444a;
    width: 36%;
    height: 8em;
    color: white;
    margin-bottom: 1.5em;
    font-family: "Gotham"; 
    border-radius: 3px;
    @media (max-width: 1400px) {
        width: 31%;
        height: 2em;
        font-size: 1.1em;
    }
    @media (max-width: 992px) {
        width: 31%;
        height: 3em;
        font-size: 0.5em;
    }
    @media (max-width: 768px) {
        width: 31%;
        height: 2em;
        font-size: 0.6em;
    }
`;

export const CriarPediModal = styled.a`
    background-color: #f0444a;
        width: 10em;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: box-shadow 0.3s ease-in-out; 
        font-family: "Gotham";
        text-decoration: none;
        margin-top: 2em;
        color: black;
        cursor: pointer;
        
        &:hover {
            box-shadow: 0 0 15px 3px rgba(255, 0, 0, 0.6); 
        }

    @media (max-width: 1400px) {
        font-size: 1.1em;
        margin-top: 1em;
    }
    @media (max-width: 992px) {
        margin-top: 1.5em;
        font-size: 0.7em;
    }
    @media (max-width: 768px) {
        font-size: 0.6em;
    }
`;