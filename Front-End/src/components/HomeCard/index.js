import { ImgCode, Home, DivFrase, Frase, Linha, Coluna, CardImg, EtapasDiv, Etapas, PowerImg, Footer, PowerImgP, Contatos, Volta, FooterImg, TituloDiv, TituloDivUl, ProcessoEtapasUlt, TituloDivDi, PowerImgDeitado, ProcessoEtapasEsq, PowerImgDeitadoEsq, TitulosEtapas, ProcessoEtapas, Cop } from "./syled"
import code from "../../assents/img/code.png"
import back from "../../assents/img/back.png"
import powerreto from "../../assents/img/powerreto.png"
import powerDireita from "../../assents/img/powerdireita.png"
import powerEsquerda from "../../assents/img/powerEsquerda.png"
import whats from "../../assents/img/whats.png"
import insta from "../../assents/img/insta.png"
import tel from "../../assents/img/tel.png"
import email from "../../assents/img/email.png"

export default function HomeCard() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Home fluid>
                    <ImgCode src={code}></ImgCode>

                    <Linha>
                        <Coluna>
                            <CardImg src={back}></CardImg>
                        </Coluna>
                    </Linha>
                    <DivFrase><Frase>DESAFIOS DE PROGRAMAÇÃO ENCONTRAM SOLUÇÕES INOVADORAS. SE VOCÊ ESTÁ LUTANDO COM UM BUG TEIMOSO, PRECISA DE AJUDA PARA OTIMIZAR SEU CÓDIGO, OU ESTÁ BUSCANDO UMA SOLUÇÃO PERSONALIZADA PARA UM PROJETO COMPLEXO. CONECTAMOS VOCÊ DIRETAMENTE COM PROGRAMADORES EXPERIENTES PRONTOS PARA SOLUCIONAR QUALQUER PROBLEMA DE PROGRAMAÇÃO QUE VOCÊ POSSA TER. SEJA UM SIMPLES AJUSTE OU O DESENVOLVIMENTO DE UMA FUNCIONALIDADE INTEIRA, NOSSA COMUNIDADE DE TALENTOS ESTÁ AQUI PARA AJUDAR</Frase></DivFrase>
                    <Etapas>COMO FUNCIONA?</Etapas>
                </Home>
            </div>
            <EtapasDiv>
                <Linha>
                    <Coluna>
                        <TituloDiv>
                            <TitulosEtapas>POSTAGEM</TitulosEtapas>
                            <TitulosEtapas>DO</TitulosEtapas>
                            <TitulosEtapas>PROBLEMA</TitulosEtapas>
                        </TituloDiv>
                        <ProcessoEtapasEsq>UM CANAL DE CHAT PRIVADO É ABERTO ENTRE O CLIENTE E O PROGRAMADOR PARA DISCUTIR DETALHES ADICIONAIS, INCLUINDO PAGAMENTO, PRAZOS, E ENTREGAS ESPECÍFICAS</ProcessoEtapasEsq>
                        <TituloDivUl>
                            <TitulosEtapas>ENTREGA</TitulosEtapas>
                            <TitulosEtapas>E</TitulosEtapas>
                            <TitulosEtapas>PAGAMENTO</TitulosEtapas>
                        </TituloDivUl>
                    </Coluna>
                    <Coluna style={{display: "flex", alignItems: "center", marginTop:"2em", flexDirection: "column"}}>
                        <PowerImgP src={powerreto}></PowerImgP>
                        <PowerImgDeitado src={powerDireita}></PowerImgDeitado>
                        <PowerImg src={powerreto}></PowerImg>
                        <PowerImgDeitadoEsq src={powerEsquerda}></PowerImgDeitadoEsq>
                        <PowerImg src={powerreto}></PowerImg>
                        <PowerImgDeitado src={powerDireita}></PowerImgDeitado>
                        <PowerImg src={powerreto}></PowerImg>
                    </Coluna>
                    <Coluna>
                        <ProcessoEtapas>O CLIENTE DESCREVE O PROBLEMA DE PROGRAMAÇÃO, INCLUINDO DETALHES TÉCNICOS, REQUISITOS ESPECÍFICOS, E PRAZO DESEJADO</ProcessoEtapas>
                        <TituloDivDi>
                            <TitulosEtapas>COMUNICAÇÃO</TitulosEtapas>
                            <TitulosEtapas>E</TitulosEtapas>
                            <TitulosEtapas>DESENVOLVIMENTO</TitulosEtapas>
                        </TituloDivDi>
                        <ProcessoEtapasUlt>O PROGRAMADOR ENVIA A SOLUÇÃO CONCLUÍDA ATRAVÉS DA PLATAFORMA, UMA VEZ QUE A SOLUÇÃO É ACEITA, O PAGAMENTO É LIBERADO PARA O PROGRAMADOR.</ProcessoEtapasUlt>
                    </Coluna>
                </Linha>
            </EtapasDiv>
            <Footer>
                <Contatos>PARA MAIS INFORMAÇÕES</Contatos>
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
