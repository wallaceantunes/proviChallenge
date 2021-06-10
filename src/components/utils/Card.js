import '../../assets/scss/utils/card.scss';

function Card({music}) {
    const img = music.thumb
    return (
        <div className="card">
            <img src={img} width="175px" height="175px"/>
            <div className="card-text">
                <span className="title">{music.name}</span>
                <span className="sub-title">{music.band}</span>
            </div>
        </div>
    );
}

export default Card;
