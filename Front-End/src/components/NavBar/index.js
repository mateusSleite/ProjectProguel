import React, { useState } from 'react';
import { Img, LogoGlobal, Nav, ImgText, ImgNav, LinkNav, DivNav, LinkButton, ImgButton, MenuButton, DivButton, ImgToggle } from "./syled";
import logo from "../../assents/img/Logo.png"
import textlogo from "../../assents/img/TextLogo.png"
import pedidos from "../../assents/img/pedidos.png"
import sobre from "../../assents/img/sobre.png"
import contatos from "../../assents/img/contatos.png"
import login from "../../assents/img/login.png"
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
                <DivNav><LinkNav href=""><ImgNav src={pedidos}></ImgNav></LinkNav></DivNav>
                <DivNav><LinkNav href=""><ImgNav src={sobre}></ImgNav></LinkNav></DivNav>
                <DivNav><LinkNav href=""><ImgNav src={contatos}></ImgNav></LinkNav></DivNav>
                <DivButton>
                    <LinkButton href="/"><ImgButton src={login}></ImgButton></LinkButton>
                    <MenuButton onClick={() => setIsNavVisible(!isNavVisible)}><ImgToggle src={toggle}></ImgToggle></MenuButton>
                </DivButton>
            </Nav>
            {/* <Nav></Nav> */}
        </>
    )
}
