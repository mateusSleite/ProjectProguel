import React, { useState } from 'react';
import { Img, LogoGlobal, Nav, Nav2, ImgText, LinkNav, DivNav, DivNav2, LinkButton, LinkButton2, Suporte, MenuButton, DivButton, ImgToggle, Centralize } from "./syled";
import logo from "../../assents/img/Logo.png"
import textlogo from "../../assents/img/TextLogo.png"
import toggle from "../../assents/img/toggle.png"


export default function NavBar() {

    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <>
            <Nav>
                <LogoGlobal>
                    <Img src={logo}></Img>
                    <ImgText src={textlogo}></ImgText>
                </LogoGlobal>
                <DivNav><LinkNav href="">PEDIDOS</LinkNav></DivNav>
                <DivNav><LinkNav href="">SOBRE</LinkNav></DivNav>
                <DivNav><LinkNav href="">CONTATOS</LinkNav></DivNav>
                <DivButton>
                    <LinkButton href="/">INSCREVA-SE</LinkButton>
                    <MenuButton onClick={() => setIsNavVisible(!isNavVisible)}><ImgToggle src={toggle}></ImgToggle></MenuButton>
                </DivButton>
            </Nav>
            {isNavVisible && <Nav2>
                <Centralize>
                    <DivNav2><LinkNav href="">PEDIDOS</LinkNav></DivNav2>
                    <DivNav2><LinkNav href="">SOBRE</LinkNav></DivNav2>
                    <DivNav2><LinkNav href="">CONTATOS</LinkNav></DivNav2>
                    <LinkButton2 href="/">INSCREVA-SE</LinkButton2>
                </Centralize>
                <Suporte></Suporte>
            </Nav2>}
        </>
    )
}
