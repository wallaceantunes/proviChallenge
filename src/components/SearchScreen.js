import React, {useEffect, useState} from 'react'
import '../assets/scss/content.scss';
import {Container, Row, Col} from 'react-grid-system'
import CardSearch from './utils/CardSearch'
import ButtonMusicList from './utils/ButtonMusicList'
import { getArtist } from '../api/spotifyApi'
import { useHistory } from 'react-router-dom';

function CardScreen() {
    const history = useHistory()
    const [artists, setArtists] = useState([])
    const handleArtists = async () => {
        try {
            const resp = await getArtist()
            setArtists(resp.data)
        } catch (error) {
            alert('erro interno')
        }
    }
    useEffect(() => {
        handleArtists()
    }, [])
    return (
        <Container>
            <Row className="rowTitle" justify="center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="h2">Melhor Resultado</span>
                </Col>
            </Row>
            <Row className="rowCard">
                {artists.map((artist) => (
                    <Col className="text-center" xs={12} sm={6} md={6} lg={6}>
                        <a className="noDecoration" onClick={() => history.push('/app/perfil')}>
                            <CardSearch artist={artist}/>
                        </a>
                    </Col>
                ))}
            </Row>
            <Row className="rowTitle" justify="center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="h2">Músicas</span>
                </Col>
            </Row>

            {artists.map((artist) => {
                return artist.music.map((music) => (
                    <Row className="rowCard">
                        <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                            <ButtonMusicList music={music}/>
                        </Col>
                    </Row>
                ))
            })}
        </Container>
    );
}

export default CardScreen;