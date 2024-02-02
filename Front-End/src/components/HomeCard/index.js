import { ImgCode, Home, DivFrase, Frase, Linha, Coluna, CardImg, DivCard } from "./syled"
import code from "../../assents/img/code.png"
import card1 from "../../assents/img/card1.png"

export default function HomeCard() {
    return (
        <>
            <Home fluid>
                <ImgCode src={code}></ImgCode>
                <DivCard>
                    <Linha>
                        <Coluna>
                            <CardImg src={card1}></CardImg>
                        </Coluna>
                        <Coluna>
                            <CardImg src={card1}></CardImg>
                        </Coluna>
                        <Coluna>
                            <CardImg src={card1}></CardImg>
                        </Coluna>
                    </Linha>
                    <Linha>
                        <Coluna>
                            <CardImg src={card1}></CardImg>
                        </Coluna>
                        <Coluna>
                            <CardImg src={card1}></CardImg>
                        </Coluna>
                        <Coluna>
                            <CardImg src={card1}></CardImg>
                        </Coluna>
                    </Linha>
                </DivCard>
                <DivFrase><Frase>DESAFIOS DE PROGRAMAÇÃO ENCONTRAM SOLUÇÕES INOVADORAS. SE VOCÊ ESTÁ LUTANDO COM UM BUG TEIMOSO, PRECISA DE AJUDA PARA OTIMIZAR SEU CÓDIGO, OU ESTÁ BUSCANDO UMA SOLUÇÃO PERSONALIZADA PARA UM PROJETO COMPLEXO. CONECTAMOS VOCÊ DIRETAMENTE COM PROGRAMADORES EXPERIENTES PRONTOS PARA SOLUCIONAR QUALQUER PROBLEMA DE PROGRAMAÇÃO QUE VOCÊ POSSA TER. SEJA UM SIMPLES AJUSTE OU O DESENVOLVIMENTO DE UMA FUNCIONALIDADE INTEIRA, NOSSA COMUNIDADE DE TALENTOS ESTÁ AQUI PARA AJUDAR.</Frase></DivFrase>
            </Home>
        </>
    )
}
