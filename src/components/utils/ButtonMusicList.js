import '../../assets/scss/utils/button.scss';

function ButtonMusicList({ music }) {
    const img = music.thumb
    return (
        <>
            <button className="btn-music-list">
                <div className="list-music-content">
                    <img src={img} className="list-music-img" width="50px" height="50px" />
                    <div className="list-music-info">
                        <span className="title">{music.name}</span>
                        <span className="sub-title">{music.band}</span>
                    </div>
                    <span className="list-music-time">3:35</span>
                </div>
            </button>
        </>
    );
}

export default ButtonMusicList;
