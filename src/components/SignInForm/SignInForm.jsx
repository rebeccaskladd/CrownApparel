import { useState } from 'react';

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utilities/firebase/firebase';

import FormInputField from '../FormInputField/FormInputField';
import Button from '../Button/Button';

import { SignInContainer, ButtonsContainer } from './SignInForm.styles';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                alert("Incorrect email or password");
            }
            console.log('User sign in encountered an error', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputField
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInputField
                    label="Password"
                    type="password"
                    required
                    minLength="6"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>
                        Sign In With Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;