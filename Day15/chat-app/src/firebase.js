// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCfRK6KYMVM_fzNk9llZ3-QiUWji072bxw",
    authDomain: "chat-app-46bfa.firebaseapp.com",
    projectId: "chat-app-46bfa",
    storageBucket: "chat-app-46bfa.appspot.com",
    messagingSenderId: "688584207406",
    appId: "1:688584207406:web:95903a700699bbfa8d03bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();