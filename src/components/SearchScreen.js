import '../assets/scss/content.scss';
import {Container, Row, Col} from 'react-grid-system'
import CardSearch from './utils/CardSearch'
import ButtonMusicList from './utils/ButtonMusicList'

function CardScreen() {
    return (
        <Container>
            <Row className="rowTitle" justify="center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="h2">Melhor Resultado</span>
                </Col>
            </Row>
            <Row className="rowCard">
                <Col className="text-center" xs={12} sm={6} md={6} lg={6}>
                    <CardSearch />
                </Col>
            </Row>
            <Row className="rowTitle" justify="center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="h2">Músicas</span>
                </Col>
            </Row>
            <Row className="rowCard">
                <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                    <ButtonMusicList />
                </Col>
            </Row>
        </Container>
    );
}

export default CardScreen;