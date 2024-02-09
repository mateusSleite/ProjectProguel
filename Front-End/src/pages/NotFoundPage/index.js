import { Title, Container, Description } from "./styled"
import { i18n } from "../../translate/i18n"

export default function NotFoundPage(){
    return(
        <Container>
            <Title>{i18n.t("NotFoundPage.title")}</Title>
            <Description>
                <p>{i18n.t("NotFoundPage.notFound")}</p>
            </Description>
        </Container>
    )
};