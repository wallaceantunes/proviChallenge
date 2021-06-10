import React, {useEffect, useState} from 'react'
import '../assets/scss/artistProfile.scss';
import ButtonMusicList from './utils/ButtonMusicList'
import {Container, Row, Col} from 'react-grid-system'
import { getArtistById } from '../api/spotifyApi'

function ArtistProfile() {
    const [artist, setArtist] = useState([])
    const handleArtist = async () => {
        try {
            const resp = await getArtistById()
            setArtist(resp.data)
        } catch (error) {
            alert('erro interno')
        }
    }
    useEffect(() => {
        handleArtist()
    }, [])
    const img = artist.header
    return (
        <>
            <img src={img} width="1000px" height="340px"/>
            <div className="text-img">
                <span>{artist.name}</span>
            </div>
            <Container>
                <Row className="rowTitle" justify="center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <span className="h2">Popular</span>
                    </Col>
                </Row>
                {artist.music? (
                    <Row className="rowCard">
                        {artist.music.map((music) => (
                            <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                                <ButtonMusicList music={music}/>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <>
                    </>
                )}
            </Container>
        </>
    );
}

export default ArtistProfile;