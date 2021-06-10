import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import '../assets/scss/login.scss';
import Input from '../components/utils/Input'
import Checkbox from '../components/utils/Checkbox'
import Button from '../components/utils/Button'
import logoBlack from '../assets/img/logo-black.png'


function Login() {
    return (
        <Container fluid className="login">
            <Row className="row rowLogo" justify="center">
                <img src={logoBlack} width="200" height="58" />
            </Row>
            <Row className="row" justify="center">
                <Col className="text-center" xs={12} sm={12} md={6} lg={4}>
                    <span className="h5">Para continuar, faça login no Spotify.</span>
                </Col>
            </Row>
            <Row className="row" justify="center">
                <Col xs={12} sm={12} md={6} lg={4}>
                    <Input
                        label="Endereço de e-mail ou nome de usuário"
                        type="text"
                        placeholder="Endereço de e-mail ou nome de usuário"
                    />
                </Col>
            </Row>
            <Row className="row" justify="center">
                <Col xs={12} sm={12} md={6} lg={4}>
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Senha"
                    />
                </Col>
            </Row>
            <Row className="row rowDivision" justify="center">
                <Col xs={6} sm={6} md={2} lg={2}>
                    <Checkbox label="Lembrar de mim" checked={true} />
                </Col>
                <Col xs={6} sm={6} md={2} lg={2}>
                    <Button block="true" color="primary" text="Entrar" route="app"/>
                </Col>
            </Row>
            <Row className="row" justify="center">
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="divider" />
                </Col>
            </Row>
            <Row className="row rowDivision" justify="center">
                <Col className="text-center" xs={12} sm={12} md={6} lg={4}>
                    <span className="h4">Não tem uma conta?</span>
                </Col>
            </Row>
            <Row className="row" justify="center">
                <Col xs={12} sm={12} md={6} lg={4}>
                    <Button block="true" color="outline" text="Inscrever-se no spotify" route="cadastro"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
