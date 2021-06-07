import '../../assets/scss/utils/button.scss';

function ButtonMusicList() {
    const img = 'https://via.placeholder.com/40x40'
    return (
        <>
            <button className="btn-music-list">
                <div className="list-music-content">
                    <img src={img} className="list-music-img" />
                    <div class="list-music-info">
                        <span class="title">Nome de musica</span>
                        <span class="sub-title">Nome do artita</span>
                    </div>
                    <span class="list-music-time">0:00</span>
                </div>
            </button>
        </>
    );
}

export default ButtonMusicList;
