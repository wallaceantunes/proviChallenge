import '../../assets/scss/utils/button.scss';
import Icon from 'material-icons-react';
import { useHistory } from 'react-router-dom';

function ButtonList({text, icon, active, route}) {
    const history = useHistory()
    return (
        <>
            <button className="btn-list" active={active} onClick={() => history.push(`/${route}`)}>
                <Icon icon={icon} size={35}/>
                <span className="text-btn-list hidden-xs">{ text }</span>
            </button>
        </>
    );
}

export default ButtonList;
