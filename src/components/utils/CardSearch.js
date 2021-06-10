import '../../assets/scss/utils/card.scss';
function Card({ artist }) {
    const img = artist.photo
    return (
        <div className="card-search" >
            <div className="img-border">
                <img src={img} className="img-cricle" />
            </div>
            <div className="card-text">
                <span className="title">{artist.name}</span>
            </div>
            <div className="card-text">
                <span className="badge-title">ARTISTA</span>
            </div>
        </div>
    );
}

export default Card;
