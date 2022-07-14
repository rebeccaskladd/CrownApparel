import {
    BaseButton,
    GoogleButton,
    InvertedButton
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

const Button = ({ children, buttonType, ...buttonProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton {...buttonProps}>{children}</CustomButton>
    )
};

export default Button;