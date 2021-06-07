import '../../assets/scss/utils/progressBar.scss';

function ProgressBar({time}) {
    return (
        <div className="progress-bar-content">
            <span className="progress-bar-time">0:00</span>
            <div className="progress-bar-border">
                <div className="progress-bar" />
            </div>
            <span className="progress-bar-time">{time}</span>
        </div>
    );
}

export default ProgressBar;
