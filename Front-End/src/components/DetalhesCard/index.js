import { Border, Coluna, Custo, CustoDiv, CustoInput, Desc, Details, DetalhesInput, DetalhesLabel, DivInput, Linha, LinkButton, Precos, Problema, ResChat, ResLabel, Titulo } from "./styled";
import { useParams } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from 'react';

export default function Detalhes() {

    const { id } = useParams();

    const [dadosDoProblema, setDadosDoProblema] = useState(null);

    useEffect(() => {
        const fetchDadosDoProblema = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/pedido/pedidos/${id}`);
                setDadosDoProblema(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados do problema:', error);
            }
        };

        fetchDadosDoProblema();
    }, [id]);

    if (!dadosDoProblema) {
        return <div></div>;
    }

    return (
        <Details fluid>
            <Linha>
                <Coluna xxl={6} xl={6} lg={6} xs={12} md={12}>
                    <Problema>
                        <Titulo>{dadosDoProblema.title}</Titulo>
                        <Desc>{dadosDoProblema.text}</Desc>
                    </Problema>
                </Coluna>
                <Coluna>
                    <Border>
                        <CustoDiv>
                            <Custo>VALOR</Custo>
                            <Precos>
                                <CustoInput style={{ marginRight: '0.2em' }}>R$</CustoInput><CustoInput>{dadosDoProblema.precoMin}</CustoInput><CustoInput>-</CustoInput><CustoInput>{dadosDoProblema.precoMax}</CustoInput>
                            </Precos>
                        </CustoDiv>
                        <DetalhesInput>
                            <DivInput>
                                <DetalhesLabel>LINGUAGEM</DetalhesLabel>
                                <ResLabel>{dadosDoProblema.language}</ResLabel>
                            </DivInput>
                            <DivInput>
                                <DetalhesLabel>DIFICULDADE</DetalhesLabel>
                                <ResLabel>{dadosDoProblema.difficulty}</ResLabel>
                            </DivInput>
                        </DetalhesInput>
                        <CustoDiv>
                            <ResChat>QUER RESOLVER ESTE PROBLEMA?</ResChat>
                            <LinkButton>CHAT</LinkButton>
                        </CustoDiv>
                    </Border>
                </Coluna>
            </Linha>
        </Details>
    );
}
