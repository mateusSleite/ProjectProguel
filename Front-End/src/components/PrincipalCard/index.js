import React, { useState } from 'react';
import { AlinhaLabel, Frase, Prin, Linha, Coluna, Borda, FraseDe, BordaIn, DivButton, Linguagem, DivDetalhes, LinkButton, Buttom, LogoImg, ConjuntoLogo, EnglobaDivs, ImgButtom, TituloPedido, Especificacoes, Res } from "./styled";
import csharp from "../../assents/img/Lingua/csharp.png";
import python from "../../assents/img/Lingua/python.png";
import c from "../../assents/img/Lingua/c++.png";
import java from "../../assents/img/Lingua/java.png";
import js from "../../assents/img/Lingua/js.png";
import mongo from "../../assents/img/Lingua/mongo.png";
import php from "../../assents/img/Lingua/php.png";
import react from "../../assents/img/Lingua/react.png";
import sql from "../../assents/img/Lingua/sql.png";
import setaes from "../../assents/img/setaes.png";
import setadi from "../../assents/img/setadi.png";

const problemasDeProgramacao = [
    {
        titulo: "PROBLEMA COM NÃO SEI OQ",
        detalhes: "EU TAVA COM PROBLEMA TAL AI ACONTECEU ISSO TAVA TUDO DEU MERDA . . .",
        dificuldade: "INTERMEDIÁRIO",
        custo: "R$ 100 - 800",
        tipo: "c#"
    },
    {
        titulo: "A NÃO SEI OQ, NÃO SEI OQ, QUE TA LÁ",
        detalhes: "A MAS TA BOM ENTÃO KKKKK",
        dificuldade: "AVANÇADO",
        custo: "R$ 200 - 900",
        tipo: "python"
    },
    {
        titulo: "A PAIL SEI OQ, NÃO SEI OQ, QUE TA LÁ",
        detalhes: "A MAS TA BOM ENTÃO KKKKK",
        dificuldade: "AVANÇADO",
        custo: "R$ 200 - 900",
        tipo: "python"
    },
    {
        titulo: "A PAIL SEI OQ, NÃO SEI OQ, QUE TA LÁ",
        detalhes: "A MAS TA BOM ENTÃO KKKKK",
        dificuldade: "AVANÇADO",
        custo: "R$ 200 - 900",
        tipo: "mongo"
    },
    {
        titulo: "A PAIL SEI OQ, NÃO SEI OQ, QUE TA LÁ",
        detalhes: "A MAS TA BOM ENTÃO KKKKK",
        dificuldade: "AVANÇADO",
        custo: "R$ 200 - 900",
        tipo: "react"
    },
];

const tiposImagem = {
    "c#": csharp,
    "python": python,
    "c++": c,
    "java": java,
    "javascript": js,
    "mongo": mongo,
    "php": php,
    "react": react,
    "sql": sql,
};

export default function Principal() {
    const [indices, setIndices] = useState(problemasDeProgramacao.reduce((acc, problema) => {
        acc[problema.tipo] = 0;
        return acc;
    }, {}));

    const irParaProximoProblema = (tipo) => {
        setIndices(prevIndices => ({
            ...prevIndices,
            [tipo]: (prevIndices[tipo] + 1) % problemasDeProgramacao.filter(problema => problema.tipo === tipo).length
        }));
    };

    const irParaProblemaAnterior = (tipo) => {
        setIndices(prevIndices => {
            const totalProblemas = problemasDeProgramacao.filter(problema => problema.tipo === tipo).length;
            return {
                ...prevIndices,
                [tipo]: (prevIndices[tipo] - 1 + totalProblemas) % totalProblemas
            };
        });
    };

    const renderizarBordaPorTipo = (tipo) => {
        const problemaAtual = problemasDeProgramacao.filter(problema => problema.tipo === tipo)[indices[tipo]];

        if (!problemaAtual) {
            return;
        }

        return (
            <Borda>
                <ConjuntoLogo>
                    <LogoImg src={tiposImagem[tipo]}></LogoImg>
                    <Linguagem>{tipo.toUpperCase()}</Linguagem>
                </ConjuntoLogo>
                <EnglobaDivs>
                    <Buttom onClick={() => irParaProblemaAnterior(tipo)}><ImgButtom src={setaes} alt="Anterior" /></Buttom>
                    <BordaIn>
                        <DivDetalhes>
                            <TituloPedido>{problemaAtual.titulo}</TituloPedido>
                            <Especificacoes>Detalhes:</Especificacoes>
                            <Res>{problemaAtual.detalhes}</Res>
                            <Especificacoes>Dificuldade:</Especificacoes>
                            <Res>{problemaAtual.dificuldade}</Res>
                            <Especificacoes>Custo:</Especificacoes>
                            <Res>{problemaAtual.custo}</Res>
                        </DivDetalhes>
                        <DivButton>
                            <LinkButton>DETALHES</LinkButton>
                        </DivButton>
                    </BordaIn>
                    <Buttom onClick={() => irParaProximoProblema(tipo)}><ImgButtom src={setadi} alt="Próximo" /></Buttom>
                </EnglobaDivs>
            </Borda>
        );
    };

    return (
        <Prin fluid>
            <AlinhaLabel>
                <Frase>SOLUCIONE SEUS</Frase>
                <FraseDe>DESAFIOS</FraseDe>
            </AlinhaLabel>
            <Linha>
                {Object.keys(tiposImagem).map((tipo, index) => (
                    <Coluna key={index} xxl={4} xl={6} lg={6} xs={12} md={12}>
                        {renderizarBordaPorTipo(tipo)}
                    </Coluna>
                ))}
            </Linha>

        </Prin>
    );
}
