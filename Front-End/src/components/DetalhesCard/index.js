import { Border, Coluna, Custo, CustoDiv, CustoInput, Desc, Details, DetalhesInput, DetalhesLabel, DivInput, Linha, LinkButton, Precos, Problema, ResChat, ResLabel, Titulo } from "./styled";

export default function Detalhes() {

    return (
        <Details fluid>
            <Linha>
                <Coluna xxl={6} xl={6} lg={6} xs={12} md={12}>
                <Problema>
                    <Titulo>PROBLEMA COM NÃO SEI OQ PQ NÃO SEI OQ</Titulo>
                    <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Desc>
                </Problema>
                </Coluna>
                <Coluna>
                    <Border>
                        <CustoDiv>
                            <Custo>VALOR</Custo>
                            <Precos>
                            <CustoInput style={{marginRight: '0.2em'}}>R$</CustoInput><CustoInput>800</CustoInput><CustoInput>-</CustoInput><CustoInput>800</CustoInput>
                            </Precos>
                        </CustoDiv>
                        <DetalhesInput>
                            <DivInput>
                                <DetalhesLabel>LINGUAGEM</DetalhesLabel>
                                <ResLabel>PYTHON</ResLabel>
                            </DivInput>
                            <DivInput>
                                <DetalhesLabel>DIFICULDADE</DetalhesLabel>
                                <ResLabel>INICIANTE</ResLabel>
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
