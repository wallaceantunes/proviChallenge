import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import '../assets/scss/register.scss';
import Input from '../components/utils/Input'
import Checkbox from '../components/utils/Checkbox'
import Button from '../components/utils/Button'
import logoBlack from '../assets/img/logo-black.png'


function Register() {
  return (
    <Container fluid className="register">
        <Row className="row rowLogo" justify="center">
            <img src={logoBlack} width="136" height="39" />
        </Row>
        <Row className="row" justify="center">
            <Col className="text-center" xs={4} sm={4} md={4} lg={4}>
                <span className="register-title">Inscreva-se grátis e comece a curtir.</span>
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col xs={4} sm={4} md={4} lg={4}>
                <Input
                    label="Qual seu e-mail?"
                    type="email"
                    placeholder="Insira seu email"
                />
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col xs={4} sm={4} md={4} lg={4}>
                <Input
                    label="Confirme seu e-mail"
                    type="email"
                    placeholder="Insira seu email"
                />
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col xs={4} sm={4} md={4} lg={4}>
                <Input
                    label="Criar uma senha"
                    type="password"
                    placeholder="Crie uma senha"
                />
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col xs={4} sm={4} md={4} lg={4}>
                <Input
                    label="Como deveremos te chamar?"
                    type="text"
                    placeholder="Insira o nome de perfil"
                />
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col xs={4} sm={4} md={4} lg={4}>
                <Checkbox
                    label="Eu concordo com os"
                    labelLink="Termos e Condições de Uso do Spotify."
                    link="https://www.spotify.com/br/legal/end-user-agreement/"
                    checked={true}
                />
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col className="text-center" xs={4} sm={4} md={4} lg={4}>
                <span className="politic-text">
                    Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a 
                    <a className="link-green" href="https://www.spotify.com/br/legal/privacy-policy/" target="_blank"> Política de Privacidade do Spotify.</a>
                </span>
            </Col>
        </Row>
        <Row className="row" justify="center">
            <Col xs={3} sm={3} md={3} lg={3}>
                <Button block="true" color="primary" text="Inscrever-se"/>
            </Col>
        </Row>
        <Row className="row rowDivision" justify="center">
            <Col className="text-center" xs={4} sm={4} md={4} lg={4}>
                <span className="h6">
                    Já tem uma conta? <a className="link-green" href="#">Faça login.</a>
                </span>
            </Col>
        </Row>
    </Container>
  );
}

export default Register;
