import '../assets/scss/sidemenu.scss';
import {Container, Row, Col} from 'react-grid-system'
import { useLocation } from "react-router-dom";
import ButtonList from '../components/utils/ButtonList'
import logoWhite from '../assets/img/logo-white.png' 
import logoWhiteNoText from '../assets/img/logo-no-text.png' 
function Sidemenu() {
    const location = useLocation();
    console.log(location.pathname);
    let activeHome = 'false'
    let activeSearch = 'false'
    if(location.pathname === '/app/busca') {
        activeSearch = 'true'
        activeHome = 'false'
    } else {
        activeHome = 'true'
        activeSearch = 'false'
    }
    return (
        <div className="sidemenu">
            <Container>
                <Row justify="center">
                    <Col className="row-logo hidden-xs" xs={12} sm={12} md={12} lg={12}>
                        <img src={logoWhite} width="131" height="40" />
                    </Col>
                    <Col className="row-logo hidden-md" xs={12} sm={12} md={12} lg={12}>
                        <img src={logoWhiteNoText} width="40" height="40" />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ButtonList text="Home" icon="home_filled" active={activeHome} route="app/"/>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ButtonList text="Search" icon="search" active={activeSearch} route="app/busca"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sidemenu;