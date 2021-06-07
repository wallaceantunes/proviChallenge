import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import '../assets/scss/inside.scss';
import Sidemenu from '../components/Sidemenu'
import Content from '../components/Content'
import Player from '../components/Player'


function Inside() {
  return (
    <Container className="inside">
        <Row className="content">
            <Col className="no-padding" xs={3} sm={3} md={3} lg={3}>
                <Sidemenu />
            </Col>
            <Col className="no-padding" xs={9} sm={9} md={9} lg={9}>
                <Content />
            </Col>
        </Row>
        <Row className="player">
            <Col className="no-padding" xs={12} sm={12} md={12} lg={12}>
                <Player />
            </Col>
        </Row>
    </Container>
  );
}

export default Inside;
