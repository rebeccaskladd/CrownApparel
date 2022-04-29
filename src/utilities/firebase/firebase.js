// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaimyG9i0DpQSSuPUGgYoYicskjtxiR0Q",
    authDomain: "crwn-clothing-db-33879.firebaseapp.com",
    projectId: "crwn-clothing-db-33879",
    storageBucket: "crwn-clothing-db-33879.appspot.com",
    messagingSenderId: "583964416999",
    appId: "1:583964416999:web:9f7d8da866d2d0cd613b42"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);