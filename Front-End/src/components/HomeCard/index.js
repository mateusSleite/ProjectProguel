import { ImgCode, Home, DivFrase, Frase, Linha, Coluna, CardImg, EtapasDiv, Etapas, PowerImg, PowerImgDeitado, PowerImgDeitadoEsq, TitulosEtapas, ProcessoEtapas } from "./syled"
import code from "../../assents/img/code.png"
import back from "../../assents/img/back.png"
import power from "../../assents/img/power.png"
import powerreto from "../../assents/img/powerreto.png"
import powerDireita from "../../assents/img/powerdireita.png"
import powerEsquerda from "../../assents/img/powerEsquerda.png"

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
                    <Coluna style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", marginTop:'7em', position: 'relative', left:'15em'}}>
                            <TitulosEtapas>POSTAGEM</TitulosEtapas>
                            <TitulosEtapas>DO</TitulosEtapas>
                            <TitulosEtapas>PROBLEMA</TitulosEtapas>
                        </div>
                    </Coluna>
                    <Coluna style={{display: "flex", alignItems: "center", marginTop:"2em", flexDirection: "column"}}>
                        <PowerImg src={powerreto}></PowerImg>
                        <PowerImgDeitado src={powerDireita}></PowerImgDeitado>
                        <PowerImg src={powerreto}></PowerImg>
                        <PowerImgDeitadoEsq src={powerEsquerda}></PowerImgDeitadoEsq>
                        <PowerImg src={powerreto}></PowerImg>
                    </Coluna>
                    <Coluna>
                        <ProcessoEtapas>O CLIENTE DESCREVE O PROBLEMA DE PROGRAMAÇÃO, INCLUINDO DETALHES TÉCNICOS, REQUISITOS ESPECÍFICOS, E PRAZO DESEJADO.</ProcessoEtapas>
                    </Coluna>
                </Linha>
            </EtapasDiv>
        </>
    )
}
