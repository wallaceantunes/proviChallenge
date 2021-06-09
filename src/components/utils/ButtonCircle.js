import React from 'react';
import '../../assets/scss/utils/button.scss';

function ButtonCircle({icon, playPause}) {
    return (
        <>
            <button className="btn-circle-icon" onClick={playPause}>
                <i className="material-icons 20 md-dark">{icon}</i>
            </button>
        </>
    );
}

export default ButtonCircle;
