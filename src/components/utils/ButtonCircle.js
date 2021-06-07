import '../../assets/scss/utils/button.scss';
import Icon from 'material-icons-react';

function ButtonCircle({icon}) {
    return (
        <>
            <button className="btn-circle-icon">
                <Icon icon={icon} size={20}/>
            </button>
        </>
    );
}

export default ButtonCircle;
