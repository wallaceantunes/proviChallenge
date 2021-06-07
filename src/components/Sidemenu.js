import '../assets/scss/sidemenu.scss';
import {Container, Row, Col} from 'react-grid-system'
import ButtonList from '../components/utils/ButtonList'
import logoWhite from '../assets/img/logo-white.png' 
function Sidemenu() {
    return (
        <div className="sidemenu">
            <Container>
                <Row justify="center">
                    <Col className="row-logo" xs={12} sm={12} md={12} lg={12}>
                        <img src={logoWhite} width="131" height="40" />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ButtonList text="Home" icon="home_filled" active="true"/>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ButtonList text="Search" icon="search" active="false"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sidemenu;