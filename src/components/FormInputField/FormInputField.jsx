import { FormInputLabel, Input, Group } from './FormInputField.styles.jsx';

const FormInputField = ({ label, ...inputProps }) => {
    return (
        <Group>
            <Input {...inputProps} />
            <FormInputLabel raise={inputProps.value.length}>
                {label}
            </FormInputLabel>
        </Group>
    )
}

export default FormInputField;