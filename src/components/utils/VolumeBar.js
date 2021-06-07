import '../../assets/scss/utils/progressBar.scss';
import Icon from 'material-icons-react';

function VolumeBar() {
    return (
        <div className="progress-bar-content-volume">
            <span className="progress-bar-time">
                <Icon icon="volume_up" size={20} color="#b3b3b3"/>
            </span>
            <div className="progress-bar-border">
                <div className="progress-bar" />
            </div>
        </div>
    );
}

export default VolumeBar;
