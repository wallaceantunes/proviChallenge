import '../assets/scss/artistProfile.scss';
import ButtonMusicList from './utils/ButtonMusicList'
import {Container, Row, Col} from 'react-grid-system'

function ArtistProfile() {
    const img = 'https://via.placeholder.com/1000x340'
    return (
        <>
            <img src={img} />
            <div className="text-img">
                <span>Nome do artista</span>
            </div>
            <Container>
                <Row className="rowTitle" justify="center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <span className="h2">Popular</span>
                    </Col>
                </Row>
                <Row className="rowCard">
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <ButtonMusicList />
                    </Col>
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <ButtonMusicList />
                    </Col>
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <ButtonMusicList />
                    </Col>
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <ButtonMusicList />
                    </Col>
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <ButtonMusicList />
                    </Col>
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <ButtonMusicList />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ArtistProfile;