import React, { useState } from "react";
import {
  Img,
  LogoGlobal,
  Nav,
  Nav2,
  ImgText,
  LinkNav,
  DivNav,
  DivNav2,
  LinkButton,
  LinkButton2,
  Suporte,
  MenuButton,
  DivButton,
  ImgToggle,
  Centralize,
  Name,
  Sair,
  SairImg,
} from "./syled";
import logo from "../../assents/img/Logo.png";
import textlogo from "../../assents/img/TextLogo.png";
import toggle from "../../assents/img/toggle.png";
import sair from "../../assents/img/exit.png"
import { i18n } from "../../translate/i18n";
import SwitchEN from "../SwitchEN";
import { jwtDecode } from "jwt-decode";

export default function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  let name = null;

  const handleLogout = () => {
    sessionStorage.removeItem('token'); 
    window.location.reload(true);
  };
  

  const token = sessionStorage.getItem('token');
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      name = decodedToken.name;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
    }
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Nav fluid>
        <LogoGlobal>
          <Img src={logo}></Img>
          <ImgText src={textlogo}></ImgText>
        </LogoGlobal>
        <DivNav>
          <LinkNav href="/pedidos">{i18n.t("navbar.requests")}</LinkNav>
        </DivNav>
        <DivNav>
          <LinkNav href="">{i18n.t("navbar.about")}</LinkNav>
        </DivNav>
        <DivNav>
          <LinkNav href="">{i18n.t("navbar.contacts")}</LinkNav>
        </DivNav>

        <SwitchEN></SwitchEN>
        <DivButton>
          {name ? (
            <div style={{display: 'flex', alignItems: 'baseline'}}>
              <Name>OLÁ, {name.split(" ")[0].toUpperCase()}</Name>
              <Sair onClick={handleLogout}>
                <SairImg src={sair}></SairImg>
              </Sair>
              
            </div>
          ) : (
            <>
              <LinkButton href="/cadastro">{i18n.t("navbar.singup")}</LinkButton>
              <MenuButton onClick={() => setIsNavVisible(!isNavVisible)}>
                <ImgToggle src={toggle}></ImgToggle>
              </MenuButton>
            </>
          )}
        </DivButton>

      </Nav>
      {isNavVisible && (
        <Nav2>
          <Centralize>
            <DivNav2>
              <LinkNav href="">{i18n.t("navbar.requests")}</LinkNav>
            </DivNav2>
            <DivNav2>
              <LinkNav href="">{i18n.t("navbar.about")}</LinkNav>
            </DivNav2>
            <DivNav2>
              <LinkNav href="">{i18n.t("navbar.contacts")}</LinkNav>
            </DivNav2>
            <LinkButton2 href="/cadastro">{i18n.t("navbar.singup")}</LinkButton2>
          </Centralize>
          <Suporte></Suporte>
        </Nav2>
      )}
    </>
  );
}
