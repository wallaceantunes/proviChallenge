import '../../assets/scss/utils/infoMusic.scss';

function InfoMusic() {
    const img = 'https://via.placeholder.com/50x50'
    return (
        <div className="card-music">
            <img src={img} />
            <div className="info-music">
                <span className="name-music">Nome da musica</span>
                <span className="name-artist">Nome do cantor</span>
            </div>
        </div>
    );
}

export default InfoMusic;
