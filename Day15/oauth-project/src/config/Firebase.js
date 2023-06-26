// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCTt9kPUeT955mHToAlasSpDCjBbUfKE1Q",
    authDomain: "oauth-tut-2cc09.firebaseapp.com",
    projectId: "oauth-tut-2cc09",
    storageBucket: "oauth-tut-2cc09.appspot.com",
    messagingSenderId: "163587829758",
    appId: "1:163587829758:web:93d7bb42e1a7534ec71aaf",
    measurementId: "G-K25SX13134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}