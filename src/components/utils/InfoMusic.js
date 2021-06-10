import '../../assets/scss/utils/infoMusic.scss';

function InfoMusic({music}) {
    const img = music.thumb
    return (
        <div className="card-music">
            <img src={img} width="50px" height="50px"/>
            <div className="info-music">
                <span className="name-music">{music.name}</span>
                <span className="name-artist">{music.band}</span>
            </div>
        </div>
    );
}

export default InfoMusic;
