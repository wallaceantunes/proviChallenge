import '../../assets/scss/utils/input.scss';

function Input({label, type, placeholder}) {
    return (
        <>
            <label className="label-control">{ label }</label>
            <input className="input-control" type={type} placeholder={placeholder} />
        </>
    );
}

export default Input;
