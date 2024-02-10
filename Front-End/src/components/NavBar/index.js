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
                <LogoGlobal>
                    <Img src={logo}></Img>
                    <ImgText src={textlogo}></ImgText>
                </LogoGlobal>
                <DivNav><LinkNav href="/pedidos">{i18n.t("navbar.requests")}</LinkNav></DivNav>
                <DivNav><LinkNav href="">{i18n.t("navbar.about")}</LinkNav></DivNav>
                <DivNav><LinkNav href="">{i18n.t("navbar.contacts")}</LinkNav></DivNav>
                <DivButton>
                    <LinkButton href="/">{i18n.t("navbar.singup")}</LinkButton>
                    <MenuButton onClick={() => setIsNavVisible(!isNavVisible)}><ImgToggle src={toggle}></ImgToggle></MenuButton>
                </DivButton>
            </Nav>
            {isNavVisible && <Nav2>
                <Centralize>
                    <DivNav2><LinkNav href="">{i18n.t("navbar.requests")}</LinkNav></DivNav2>
                    <DivNav2><LinkNav href="">{i18n.t("navbar.about")}</LinkNav></DivNav2>
                    <DivNav2><LinkNav href="">{i18n.t("navbar.contacts")}</LinkNav></DivNav2>
                    <LinkButton2 href="/">{i18n.t("navbar.singup")}</LinkButton2>
                </Centralize>
                <Suporte></Suporte>
            </Nav2>}
        </>
    )
}
