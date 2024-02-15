import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Nav = styled(Container)`
    display: flex;
    width: 100%;
    height: 6em;
    align-items: center;
    justify-content: space-around;
    background-color: black;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        height: 5em;
    }
`;

export const Nav2 = styled(Container)`
    position: relative;
    bottom: 1px;
    display: none;
    width: 100%;
    height: 6em;
    align-items: space-between;
    justify-content: space-around;
    background-color: black;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 12em;
    }
`;

export const Img = styled.img`
    height: 3.5em;
    @media (max-width: 768px) {
        height: 2.5em;
    }
`;

export const ImgText = styled.img`
    height: 1.5em;
    margin-left: 1em;

    @media (max-width: 768px) {
        height: 1.2em;
        margin-left: 0.5em;
    }
`;

export const LogoGlobal = styled.a`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-left: 0em;
    }
`;

export const GlobalNav = styled.div`
    display: flex;
`;

export const DivNav = styled.div`
    margin: 0 6em 0 6em;
    @media (max-width: 1140px) {
        margin: 0.5em 0em 0.5em 0em;
    }
    @media (max-width: 768px) {
        display: none;
    }
    
`;

export const DivNav2 = styled.div`
    margin: 0 6em 0 6em;
    @media (max-width: 1140px) {
        margin: 0.5em 0em 0.5em 0em;
    }
    @media (max-width: 768px) {
        margin-bottom: 0.8em;
    }
    
`;

export const LinkNav = styled.a`
    position: relative;
    text-decoration: none;
    color: white;
    font-family: "Gotham";
    
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: #f0444a;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
    &:hover::after {
        transform: scaleX(1);
    }
`;

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

        &:hover {
            box-shadow: 0 0 15px 5px rgba(255, 0, 0, 0.6); 
        }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const LinkButton2 = styled.a`
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
        
        &:hover {
            box-shadow: 0 0 15px 3px rgba(255, 0, 0, 0.6); 
        }

    @media (max-width: 768px) {
        
    }
`;

export const ImgButton = styled.img`
    height: 0.8em;
`;

export const ImgToggle = styled.img`
    height: 1em;
    @media (max-width: 768px) {
        height: 0.8em;
    }
`;

export const MenuButton = styled.button`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        width: auto;
        align-items: center;
        justify-content: center;
        height: auto;
        background-color: transparent;
        border: none;
        color: white;
        margin-right: 1.1em;
        font-size: 2em; 
        cursor: pointer;
    }
    @media (max-width: 768px) {
        margin-right: 0em;
        padding: 0;
    }
`;

export const Centralize = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 10px;

`;

export const Suporte = styled.div`
    width: 3em;
    height: 1px;
    background-color: black;
`;

export const Name = styled.label`
    color: white;
    font-family: "Gotham";
    @media (max-width: 768px) {
        font-size: 0.61em;
    }
`;

export const Sair = styled.a`
    cursor: pointer;
`;

export const SairImg = styled.img`
    height: 1.2em;
    margin-left: 1.5em;
    margin-bottom: 0.3em;
    @media (max-width: 768px) {
        height: 0.8em;
        margin-bottom: 0em;
    }
`;




