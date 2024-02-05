import { Card, Col, Container, Row } from "react-bootstrap";
import { BsSignStopFill } from "react-icons/bs";
import styles from "./styles.module.scss";

export default function AccessDenied() {
  return (
    <Row className={styles.container}>
      <Container>
        <Col xs={12} sm={9} md={6}>
          <Card className={styles.card}>
            <Card.Header className={styles.card__header}>
              Acesso Negado
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col>
                    <BsSignStopFill size={90} color="red" />
                  </Col>
                  <Col>
                    Você não tem permissão para acessar essa página ou o token
                    está expirado
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </Row>
  );
}
