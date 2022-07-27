import {
    BaseButton,
    GoogleButton,
    InvertedButton,
    ButtonSpinner
} from './Button.styles';

const getButton = (buttonType) => {
    switch (buttonType) {
        case 'google':
            return GoogleButton;
        case 'inverted':
            return InvertedButton;
        default:
            return BaseButton;
    }
}

const Button = ({ children, buttonType, isLoading, ...buttonProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isLoading} {...buttonProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
};

export default Button;