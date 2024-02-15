import { ImgCode, Home, DivFrase, Frase, Linha, Coluna, CardImg, EtapasDiv, Etapas, PowerImg, Footer, PowerImgP, Contatos, Volta, FooterImg, TituloDiv, TituloDivUl, ProcessoEtapasUlt, TituloDivDi, PowerImgDeitado, ProcessoEtapasEsq, PowerImgDeitadoEsq, TitulosEtapas, ProcessoEtapas, Cop } from "./syled"
import code from "../../assents/img/code.png"
import back from "../../assents/img/back.png"
import backin from "../../assents/img/backin.png"
import powerreto from "../../assents/img/powerreto.png"
import powerDireita from "../../assents/img/powerdireita.png"
import powerEsquerda from "../../assents/img/powerEsquerda.png"
import whats from "../../assents/img/whats.png"
import insta from "../../assents/img/insta.png"
import tel from "../../assents/img/tel.png"
import email from "../../assents/img/email.png"
import { i18n } from "../../translate/i18n"

export default function HomeCard() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Home fluid>
                    <ImgCode src={code}></ImgCode>

                    <Linha>
                        <Coluna>
                            {i18n.t("home.title2") === "OF" ? (
                                <CardImg src={backin}></CardImg>
                            ) : (
                                <CardImg src={back}></CardImg>
                            )}
                        </Coluna>

                    </Linha>
                    <DivFrase><Frase>{i18n.t("home.phrase")}</Frase></DivFrase>
                    <Etapas>{i18n.t("home.stage")}</Etapas>
                </Home>
            </div>
            <EtapasDiv>
                <Linha>
                    <Coluna>
                        <TituloDiv>
                            <TitulosEtapas>{i18n.t("home.title1")}</TitulosEtapas>
                            <TitulosEtapas>{i18n.t("home.title2")}</TitulosEtapas>
                            <TitulosEtapas>{i18n.t("home.title3")}</TitulosEtapas>
                        </TituloDiv>
                        <ProcessoEtapasEsq>{i18n.t("home.process")}</ProcessoEtapasEsq>
                        <TituloDivUl>
                            <TitulosEtapas>{i18n.t("home.title4")}</TitulosEtapas>
                            <TitulosEtapas>{i18n.t("home.title5")}</TitulosEtapas>
                            <TitulosEtapas>{i18n.t("home.title6")}</TitulosEtapas>
                        </TituloDivUl>
                    </Coluna>
                    <Coluna style={{ display: "flex", alignItems: "center", marginTop: "2em", flexDirection: "column" }}>
                        <PowerImgP src={powerreto}></PowerImgP>
                        <PowerImgDeitado src={powerDireita}></PowerImgDeitado>
                        <PowerImg src={powerreto}></PowerImg>
                        <PowerImgDeitadoEsq src={powerEsquerda}></PowerImgDeitadoEsq>
                        <PowerImg src={powerreto}></PowerImg>
                        <PowerImgDeitado src={powerDireita}></PowerImgDeitado>
                        <PowerImg src={powerreto}></PowerImg>
                    </Coluna>
                    <Coluna>
                        <ProcessoEtapas>{i18n.t("home.process2")}</ProcessoEtapas>
                        <TituloDivDi>
                            <TitulosEtapas>{i18n.t("home.title7")}</TitulosEtapas>
                            <TitulosEtapas>{i18n.t("home.title5")}</TitulosEtapas>
                            <TitulosEtapas>{i18n.t("home.title8")}</TitulosEtapas>
                        </TituloDivDi>
                        <ProcessoEtapasUlt>{i18n.t("home.process3")}</ProcessoEtapasUlt>
                    </Coluna>
                </Linha>
            </EtapasDiv>
            <Footer>
                <Contatos>{i18n.t("home.contacts")}</Contatos>
            </Footer>
            <Footer>
                <Volta><FooterImg src={tel}></FooterImg></Volta>
                <Volta><FooterImg src={email}></FooterImg></Volta>
                <Volta><FooterImg src={whats}></FooterImg></Volta>
                <Volta><FooterImg src={insta}></FooterImg></Volta>
            </Footer>
        </>
    )
}
