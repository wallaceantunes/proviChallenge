import '../../assets/scss/utils/button.scss';
import Icon from 'material-icons-react';

function ButtonIcon({icon}) {
    return (
        <>
            <button className="btn-icon">
                <Icon icon={icon} size={20}/>
            </button>
        </>
    );
}

export default ButtonIcon;
