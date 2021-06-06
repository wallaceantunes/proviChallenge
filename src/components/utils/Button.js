import '../../assets/scss/utils/button.scss';

function Button({block, color, text}) {
    return (
        <>
            <button className="btn" block={block} color={color}>{ text }</button>
        </>
    );
}

export default Button;
