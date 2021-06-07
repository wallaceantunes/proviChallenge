import '../../assets/scss/utils/card.scss';
function Card() {
    const img = 'https://via.placeholder.com/92x92'
    return (
        <div className="card-search">
            <img src={img} className="img-cricle" />
            <div className="card-text">
                <span className="title">Nome da musica</span>
            </div>
            <div className="card-text">
                <span className="badge-title">ARTISTA</span>
            </div>
        </div>
    );
}

export default Card;
