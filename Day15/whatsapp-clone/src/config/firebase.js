// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfGu9ksY9tKsQuEL_JPoZz8ddRENrdZ1A",
    authDomain: "whatsapp-clone-ed4b2.firebaseapp.com",
    projectId: "whatsapp-clone-ed4b2",
    storageBucket: "whatsapp-clone-ed4b2.appspot.com",
    messagingSenderId: "944364413754",
    appId: "1:944364413754:web:1592e8f40f5c31c95ba603",
    measurementId: "G-SZ0F8JMMBQ"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);