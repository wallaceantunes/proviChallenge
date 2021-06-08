import '../assets/scss/player.scss';
import {Container, Row, Col} from 'react-grid-system'
import ButtonIcon from './utils/ButtonIcon'
import ButtonCircle from './utils/ButtonCircle'
import ProgressBar from './utils/ProgressBar'
import VolumeBar from './utils/VolumeBar'
import InfoMusic from './utils/InfoMusic'
function Player() {
    return (
        <div>
            <Container fluid>
                <Row align="center" justify="center">
                    <Col className="row-player" xs={4} sm={4} md={4} lg={4}>
                        <InfoMusic />
                    </Col>
                    <Col className="row-player text-center" xs={4} sm={4} md={4} lg={4}>
                        <Row>
                            <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                                <audio class="audio" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Common_Pauraque_VOL_11-05_Dudley_T._Dougherty_Natural_Sounds_Collection.ogg" loop={false} />
                                <ButtonIcon icon="shuffle" />
                                <ButtonIcon icon="skip_previous" />
                                <ButtonCircle icon="play_arrow" />
                                <ButtonIcon icon="skip_next" />
                                <ButtonIcon icon="loop" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                                <ProgressBar time="3:39"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-right" xs={4} sm={4} md={4} lg={4}>
                        <VolumeBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Player;