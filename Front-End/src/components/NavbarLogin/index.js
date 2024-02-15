import React, { useState } from 'react';
import { Img, LogoGlobal, Nav, Nav2, ImgText, LinkNav, DivNav, DivNav2, LinkButton, LinkButton2, Suporte, MenuButton, DivButton, ImgToggle, Centralize } from "./syled";
import logo from "../../assents/img/Logo.png"
import textlogo from "../../assents/img/TextLogo.png"
import toggle from "../../assents/img/toggle.png"
import { i18n } from "../../translate/i18n"


export default function NavBar() {

    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <>
            <Nav fluid>
                <LogoGlobal href='/'>
                    <Img src={logo}></Img>
                    <ImgText src={textlogo}></ImgText>
                </LogoGlobal>
            </Nav>
        </>
    )
}
