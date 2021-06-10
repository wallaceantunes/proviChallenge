import '../../assets/scss/utils/button.scss';
import Icon from 'material-icons-react';

function Dropdown() {
    return (
        <div className="dropdown">
            <button className="btn-dropdown">
                Nome
                <Icon icon="expand_more" size={20} color="#ffffff"/>
            </button>
            <div className="dropdown-content">
                <div className="dropdown-item">Sair</div>
            </div>
        </div>
    );
}

export default Dropdown;
