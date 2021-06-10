import React, {useEffect, useState} from 'react'
import '../assets/scss/content.scss';
import {Container, Row, Col} from 'react-grid-system'
import Card from './utils/Card'
import { getMyMusics } from '../api/spotifyApi'

function CardScreen() {
    const [musics, setMusics] = useState([])

    const handleMusic = async () => {
        try {
            const resp = await getMyMusics()
            setMusics(resp.data.music)
        } catch (error) {
            alert('erro interno')
        }
    }
    useEffect(() => {
        handleMusic()
    }, [])
    return (
        <Container>
            <Row className="rowTitle" justify="center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="h2">Em alta no momento</span>
                </Col>
            </Row>
            <Row className="rowCard">
                {musics.map((music) => (
                    <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
                        <Card music={music} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardScreen;