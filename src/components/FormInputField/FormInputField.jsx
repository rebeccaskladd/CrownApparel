import './FormInputField.scss';

const FormInputField = ({ label, ...inputProps }) => {
    return (
        <div className="form-group">
            <input
                className="form-input"
                {...inputProps}
            />
            <label className={`${inputProps.value.length ? 'raise' : ''} form-input-label`}>{label}</label>
        </div>
    )
}

export default FormInputField;