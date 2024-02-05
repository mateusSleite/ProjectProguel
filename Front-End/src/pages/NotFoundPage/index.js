import { Title, Container, Description } from "./styled"

export default function NotFoundPage(){
    return(
        <Container>
            <Title>Erro 404</Title>
            <Description>
                <p>O erro 404 é um código de resposta HTTP que indica que o cliente pôde comunicar com o servidor, 
                    mas o servidor não pôde encontrar o que foi pedido, ou foi configurado para não cumprir o pedido e não revelar a razão, 
                    a página não existe mais ou a URL foi inserida incorretamente.</p>
            </Description>
        </Container>
    )
};