// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import { auth, signInWithGoogleRedirect } from '../../utilities/firebase/firebase';

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utilities/firebase/firebase';

const SignIn = () => {
    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);

    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     })();
    // }, []); // empty array means run when component mounts for the first time and only then

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGooglePopupUser}>
                Sign In With Google Popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn;