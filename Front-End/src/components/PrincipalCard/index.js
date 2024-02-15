import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AlinhaLabel, Frase, Prin, Linha, Coluna, Borda, Problema, FraseDe, BordaIn, Select, DivButton, Linguagem, FraseDeMo, FraseMo, CriarPedi, DivDetalhes, LinkButton, Buttom, LogoImg, ConjuntoLogo, EnglobaDivs, ImgButtom, TituloPedido, Especificacoes, Res, AlinhaLabelModal, InputModal, LabelModal, TextAreaModalDes, LabelModalDes, CustoDiv, InputModalCusto, Traco, CriarPediModal, Res2, Delete, BaldeLixo } from "./styled";
import csharp from "../../assents/img/Lingua/csharp.png";
import python from "../../assents/img/Lingua/python.png";
import c from "../../assents/img/Lingua/c++.png";
import java from "../../assents/img/Lingua/java.png";
import js from "../../assents/img/Lingua/js.png";
import balde from "../../assents/img/balde.png";
import mongo from "../../assents/img/Lingua/mongo.png";
import php from "../../assents/img/Lingua/php.png";
import react from "../../assents/img/Lingua/react.png";
import sql from "../../assents/img/Lingua/sql.png";
import setaes from "../../assents/img/setaes.png";
import setadi from "../../assents/img/setadi.png";
import CustomModal from '../ModalCard';
import axios from "axios";
import { i18n } from "../../translate/i18n"


const tiposImagem = {
    "C#": csharp,
    "PYTHON": python,
    "C++": c,
    "JAVA": java,
    "JAVASCRIPT": js,
    "MONGO": mongo,
    "PHP": php,
    "REACT": react,
    "SQL": sql,
};

export default function Principal() {
    
    const navigate = useNavigate();
    const [titleBool, setTitleBool] = useState(false);
    const [precBool, setPrecBool] = useState(false);
    const [descBool, setDescBool] = useState(false);
    const [title, setTitulo] = useState('');
    const [difficulty, setDificuldade] = useState('INICIANTE');
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [language, setLinguagem] = useState('C++');
    const [text, setDescricao] = useState('');
    const [indices, setIndices] = useState({});
    const [problemasDeProgramacao, setProblemasDeProgramacao] = useState([]);
    const [modalVisivel, setModalVisivel] = useState(false);

    const token = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const isAdm = decodedToken.isAdm;

    useEffect(() => {
        const fetchProblemas = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/pedido/pedidos');
                setProblemasDeProgramacao(response.data);
                setIndices(response.data.reduce((acc, problema) => {
                    acc[problema.language] = 0;
                    console.log(acc);
                    return acc;
                }, {}));
            } catch (error) {
                console.error('Erro ao buscar problemas:', error);
            }
        };
        fetchProblemas();
    }, []);



    const toggleModal = () => {
        setModalVisivel(!modalVisivel);
    };

    const deleteClick = async (problemaId) => {
        try {
            await axios.delete(`http://localhost:8080/api/pedido/pedidos/${problemaId}`);
            window.location.reload(true);
        } catch (error) {
            console.error('Erro ao excluir o problema:', error);
        }
    };
    const handleClick = async () => {

        const userId = decodedToken.id;

        if (title.length < 5) {
            setTitleBool(true);
        } else if (precoMax.length < 1 && precoMin.length < 1) {
            setTitleBool(false);
            setPrecBool(true);
        } else if (text.length < 15) {
            setPrecBool(false);
            setDescBool(true);
        }

        const pedidoObj = {
            userId,
            title,
            difficulty,
            precoMin,
            precoMax,
            language,
            text
        };

        try {
            const res = await axios.post('http://localhost:8080/api/pedido/create', pedidoObj);
            setModalVisivel(!modalVisivel);
            window.location.reload(true);
        } catch (error) {
            console.error(error);
        }
    };

    const irParaProximoProblema = (tipo) => {
        setIndices(prevIndices => ({
            ...prevIndices,
            [tipo]: (prevIndices[tipo] + 1) % problemasDeProgramacao.filter(problema => problema.language === tipo).length
        }));
    };

    const irParaProblemaAnterior = (tipo) => {
        setIndices(prevIndices => {
            const totalProblemas = problemasDeProgramacao.filter(problema => problema.language === tipo).length;
            return {
                ...prevIndices,
                [tipo]: (prevIndices[tipo] - 1 + totalProblemas) % totalProblemas
            };
        });
    };

    const renderizarBordaPorTipo = (tipo) => {
        const problemaAtual = problemasDeProgramacao.filter(problema => problema.language === tipo)[indices[tipo]];
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
                            <TituloPedido>
                                {problemaAtual.title.length > 25
                                    ? `${problemaAtual.title.substring(0, 25)}...`
                                    : problemaAtual.title
                                }
                            </TituloPedido>

                            <Especificacoes>{i18n.t("requests.details")}</Especificacoes>
                            <Res>
                                {problemaAtual.text.length > 40
                                    ? `${problemaAtual.text.substring(0, 40)} . . .`
                                    : problemaAtual.text
                                }
                            </Res>
                            <Especificacoes>{i18n.t("requests.difficulty")}:</Especificacoes>
                            <Res>{problemaAtual.difficulty}</Res>
                            <Especificacoes>{i18n.t("requests.cost")}:</Especificacoes>
                            <div style={{ display: 'flex' }}>
                                <Res2 style={{ marginLeft: '1.6em' }}>{problemaAtual.precoMin}</Res2>
                                <Res2>-</Res2>
                                <Res2>{problemaAtual.precoMax}</Res2>
                            </div>
                        </DivDetalhes >
                        <DivButton>
                            {isAdm ? (
                                <Delete onClick={() => deleteClick(problemaAtual._id)}>
                                    <BaldeLixo src={balde} />
                                </Delete>
                            ) : <Delete></Delete>}
                            <LinkButton onClick={() => { navigate(`/pedidos/${problemaAtual._id}`); window.location.reload(true); }}>
                                {i18n.t("requests.button")}
                            </LinkButton>
                        </DivButton>
                    </BordaIn >
                    <Buttom onClick={() => irParaProximoProblema(tipo)}><ImgButtom src={setadi} alt="Próximo" /></Buttom>
                </EnglobaDivs >
            </Borda >
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
                    renderizarBordaPorTipo(tipo) !== null && (
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
                        <InputModal value={title} onChange={(event) => setTitulo(event.target.value)} />
                        <LabelModal>{i18n.t("createRequest.difficulty")}</LabelModal>
                        <Select value={difficulty} onChange={(event) => setDificuldade(event.target.value)}>
                            <option value="INICIANTE">{i18n.t("createRequest.beginner")}</option>
                            <option value="INTERMEDIÁRIO">{i18n.t("createRequest.intermediary")}</option>
                            <option value="AVANÇADO">{i18n.t("createRequest.advanced")}</option>
                            <option value="COMPLEXO">{i18n.t("createRequest.complex")}</option>
                        </Select>
                        <LabelModal>{i18n.t("createRequest.cost")}</LabelModal>
                        <CustoDiv>
                            <InputModalCusto value={precoMin} onChange={(event) => setPrecoMin(event.target.value)} placeholder='PREÇO MIN.' />
                            <Traco>-</Traco>
                            <InputModalCusto value={precoMax} onChange={(event) => setPrecoMax(event.target.value)} placeholder='PREÇO MAX.' />
                        </CustoDiv>
                        <LabelModal>{i18n.t("createRequest.language")}</LabelModal>
                        <Select value={language} onChange={(event) => setLinguagem(event.target.value)}>
                            <option value="C++">C++</option>
                            <option value="C#">C#</option>
                            <option value="PYTHON">PYTHON</option>
                            <option value="JAVA">JAVA</option>
                            <option value="JAVA SCRIPT">JAVA SCRIPT</option>
                            <option value="MONGO">MONGO</option>
                            <option value="PHP">PHP</option>
                            <option value="REACT">REACT</option>
                            <option value="BD">BD</option>
                        </Select>
                    </Coluna>
                    <Coluna style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <LabelModalDes>{i18n.t("createRequest.problemDescription")}</LabelModalDes>
                        <TextAreaModalDes value={text} onChange={(event) => setDescricao(event.target.value)} />
                    </Coluna>
                </Linha>
                {titleBool ? (
                    <Problema>O TÍTULO NÃO PODE SER VAZIO OU CURTO</Problema>
                ) : precBool ? (
                    <Problema>O CUSTO DEVE SER PREENCHIDO</Problema>
                ) : descBool ? (
                    <Problema>A DESCRIÇÃO DEVE TER PELO MENOS 15 CARACTERES</Problema>
                ) : (
                    <div>.</div>
                )}

                <CriarPediModal onClick={handleClick}>{i18n.t("createRequest.button")}</CriarPediModal>

            </CustomModal>
        </Prin>
    );
}
