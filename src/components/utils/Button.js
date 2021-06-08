import '../../assets/scss/utils/button.scss';
import { useHistory } from 'react-router-dom';

function Button({block, color, text, route}) {
    const history = useHistory()
    return (
        <>
            <button className="btn" block={block} color={color} onClick={() => history.push(`/${route}`)}>{ text }</button>
        </>
    );
}

export default Button;
