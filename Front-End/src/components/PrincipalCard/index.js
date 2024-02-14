import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { AlinhaLabel, Frase, Prin, Linha, Coluna, Borda, FraseDe, BordaIn, Select, DivButton, Linguagem, FraseDeMo, FraseMo, CriarPedi, DivDetalhes, LinkButton, Buttom, LogoImg, ConjuntoLogo, EnglobaDivs, ImgButtom, TituloPedido, Especificacoes, Res, AlinhaLabelModal, InputModal, LabelModal, TextAreaModalDes, LabelModalDes, CustoDiv, InputModalCusto, Traco, CriarPediModal } from "./styled";
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
import CustomModal from '../ModalCard';
import { i18n } from "../../translate/i18n"

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

    const [titulo, setTitulo] = useState('');
    const [dificuldade, setDificuldade] = useState('1');
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [linguagem, setLinguagem] = useState('1');
    const [descricao, setDescricao] = useState('');

    const [modalVisivel, setModalVisivel] = useState(false);

    const [indices, setIndices] = useState(problemasDeProgramacao.reduce((acc, problema) => {
        acc[problema.tipo] = 0;
        return acc;
    }, {}));

    const toggleModal = () => {
        setModalVisivel(!modalVisivel);
    };

    const handleClick = () => {
        const token = sessionStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        console.log(userId);
    };

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
            return null;
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
                            <Especificacoes>{i18n.t("requests.details")}</Especificacoes>
                            <Res>{problemaAtual.detalhes}</Res>
                            <Especificacoes>{i18n.t("requests.difficulty")}:</Especificacoes>
                            <Res>{problemaAtual.dificuldade}</Res>
                            <Especificacoes>{i18n.t("requests.cost")}:</Especificacoes>
                            <Res>{problemaAtual.custo}</Res>
                        </DivDetalhes>
                        <DivButton>
                            <LinkButton>{i18n.t("requests.button")}</LinkButton>
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
                <Frase>{i18n.t("mainRequests.title")}</Frase>
                <FraseDe>{i18n.t("mainRequests.subTitle")}</FraseDe>
                <CriarPedi onClick={toggleModal}>{i18n.t("mainRequests.buttonTitle")}</CriarPedi>
            </AlinhaLabel>
            <Linha>
                {Object.keys(tiposImagem).map((tipo, index) => (
                    renderizarBordaPorTipo(tipo) != null && (
                        <Coluna key={index} xxl={4} xl={6} lg={6} xs={12} md={12}>
                            {renderizarBordaPorTipo(tipo)}
                        </Coluna>
                    )
                ))}
            </Linha>
            <CustomModal
                isOpen={modalVisivel}
                onRequestClose={toggleModal}>
                <AlinhaLabelModal>
                    <FraseMo>{i18n.t("createRequest.title")}</FraseMo>
                    <FraseDeMo>{i18n.t("createRequest.subTitle")}</FraseDeMo>
                </AlinhaLabelModal>
                <Linha style={{ width: '100%' }}>
                    <Coluna style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <LabelModal>{i18n.t("createRequest.problemTitle")}</LabelModal>
                        <InputModal value={titulo} onChange={(event) => setTitulo(event.target.value)} />
                        <LabelModal>{i18n.t("createRequest.difficulty")}</LabelModal>
                        <Select value={dificuldade} onChange={(event) => setDificuldade(event.target.value)}>
                            <option value="1">{i18n.t("createRequest.beginner")}</option>
                            <option value="2">{i18n.t("createRequest.intermediary")}</option>
                            <option value="3">{i18n.t("createRequest.advanced")}</option>
                            <option value="4">{i18n.t("createRequest.complex")}</option>
                        </Select>
                        <LabelModal>{i18n.t("createRequest.cost")}</LabelModal>
                        <CustoDiv>
                            <InputModalCusto value={precoMin} onChange={(event) => setPrecoMin(event.target.value)} placeholder='PREÇO MIN.' />
                            <Traco>-</Traco>
                            <InputModalCusto value={precoMax} onChange={(event) => setPrecoMax(event.target.value)} placeholder='PREÇO MAX.' />
                        </CustoDiv>
                        <LabelModal>{i18n.t("createRequest.language")}</LabelModal>
                        <Select value={linguagem} onChange={(event) => setLinguagem(event.target.value)}>
                            <option value="1">C++</option>
                            <option value="2">C#</option>
                            <option value="3">PYTHON</option>
                            <option value="4">JAVA</option>
                            <option value="5">JAVA SCRIPT</option>
                            <option value="6">MONGO</option>
                            <option value="7">PHP</option>
                            <option value="8">REACT</option>
                            <option value="9">BD</option>
                        </Select>
                    </Coluna>
                    <Coluna style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <LabelModalDes>{i18n.t("createRequest.problemDescription")}</LabelModalDes>
                        <TextAreaModalDes value={descricao} onChange={(event) => setDescricao(event.target.value)} />
                    </Coluna>
                </Linha>
                <CriarPediModal onClick={handleClick}>{i18n.t("createRequest.button")}</CriarPediModal>
            </CustomModal>
        </Prin>
    );
}
