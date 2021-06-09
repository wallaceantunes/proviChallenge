import React, { useState, useRef } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/scss/player.scss';
import Icon from 'material-icons-react';
import '../assets/scss/utils/progressBar.scss';
import {Container, Row, Col} from 'react-grid-system'
import ButtonIcon from './utils/ButtonIcon'
import ButtonCircle from './utils/ButtonCircle'
import InfoMusic from './utils/InfoMusic'

import music from '../assets/mp3/testeMusica.mp3'


function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [durationAtM, setDurationAtM] = useState('0:00')
    const audioRef = useRef()
    
    const playPause =() => {
        setIsPlaying(!isPlaying)
        console.log(audioRef.current);
        if (isPlaying) {
            audioRef.current.pause()
          } else {
            audioRef.current.play();
          }  
    }
    const timeUpdate = (ev) => {
        var currentTime = audioRef.current.currentTime;
        var duration = audioRef.current.duration;
        setProgress((currentTime +.25)/duration*100)
        const min = Math.floor(currentTime/60)
        const sec = parseInt(currentTime%60)
        setDurationAtM(`${min}:${sec.toString().padStart(2,'0')}`);
    }
    const numberToAudioTime = (num) => {
        const min = Math.floor(num/60)
        const sec = parseInt(num%60)
        return `${min}:${sec.toString().padStart(2,'0')}`
    }
    const changeVolume = (ev) => {
        audioRef.current.volume = (ev/100)
    }
    return (
        <div>
            <audio id="audio" src={music} onTimeUpdate={timeUpdate} ref={audioRef}></audio>
            <Container fluid>
                <Row align="center" justify="center">
                    <Col className="row-player" xs={4} sm={4} md={4} lg={4}>
                        <InfoMusic />
                    </Col>
                    <Col className="row-player text-center" xs={4} sm={4} md={4} lg={4}>
                        <Row>
                            <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                                <ButtonIcon icon="shuffle" />
                                <ButtonIcon icon="skip_previous" />
                                <ButtonCircle icon={ isPlaying === true ? 'pause' : 'play_arrow'} playPause={playPause}/>
                                <ButtonIcon icon="skip_next" />
                                <ButtonIcon icon="loop" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                                    
                                <div className="progress-bar-content">
                                    <span className="progress-bar-time">{durationAtM}</span>
                                    <progress id="progress" className="progress-bar-border" min="0" max="100" value={progress} />
                                    <span className="progress-bar-time">
                                        { numberToAudioTime(audioRef.current?.duration || 0)}
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-right" xs={4} sm={4} md={4} lg={4}>
                        <div className="progress-volume-content">
                            <span className="progress-volume-time">
                                <Icon icon="volume_up" size={20} color="#b3b3b3"/>
                            </span>
                                <Slider onChange={changeVolume} min={0} max={100} defaultValue={100} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Player;