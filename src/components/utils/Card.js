import '../../assets/scss/utils/card.scss';
function Card() {
    const img = 'https://via.placeholder.com/175x175'
    return (
        <div className="card">
            <img src={img} width="100%"/>
            <div className="card-text">
                <span className="title">Nome da musica</span>
                <span className="sub-title">nome do artista</span>
            </div>
        </div>
    );
}

export default Card;
