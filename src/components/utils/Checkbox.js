import '../../assets/scss/utils/input.scss';

function Checkbox({label, checked, labelLink, link}) {
    return (
        <>
            <label className="checkbox">
                { label } <a className="link-green" href={link} target="_blank">{labelLink}</a>
                <input type="checkbox" defaultChecked={checked}/>
                <span className="checkmark"></span>
            </label>
        </>
    );
}

export default Checkbox;
