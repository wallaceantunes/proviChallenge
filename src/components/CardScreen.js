import '../assets/scss/content.scss';
import {Container, Row, Col} from 'react-grid-system'
import Card from './utils/Card'

function CardScreen() {
    return (
        <Container>
            <Row className="rowTitle" justify="center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="h2">Em alta agora</span>
                </Col>
            </Row>
            <Row className="rowCard">
                <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
                    <Card />
                </Col>
                <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
                    <Card />
                </Col>
                <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
                    <Card />
                </Col>
                <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
                    <Card />
                </Col>
            </Row>
        </Container>
    );
}

export default CardScreen;