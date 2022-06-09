import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            user.displayName = displayName;
            const userDocRef = createUserDocumentFromAuth(user);

            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.log('User creation encountered an error', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />
                <label>Password</label>
                <input type="password" required minLength="6" onChange={handleChange} name="password" value={password} />
                <label>Confirm Password</label>
                <input type="password" required minLength="6" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;