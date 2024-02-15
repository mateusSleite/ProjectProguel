import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Nav = styled(Container)`
    display: flex;
    width: 100%;
    height: 6em;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        height: 5em;
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




