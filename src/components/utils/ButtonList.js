import '../../assets/scss/utils/button.scss';
import Icon from 'material-icons-react';

function ButtonList({text, icon, active}) {
    return (
        <>
            <button className="btn-list" active={active}>
                <Icon icon={icon} size={35}/>
                <span className="text-btn-list">{ text }</span>
            </button>
        </>
    );
}

export default ButtonList;
