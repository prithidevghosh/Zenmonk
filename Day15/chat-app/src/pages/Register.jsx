import React, { useState } from 'react'
import { auth, storage, db } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;




        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response.user);
            // const storageRef = ref(storage, displayName);
            // const uploadTask = uploadBytesResumable(storageRef, file);
            // uploadTask.on(
            //     (error) => {
            //         setErr(true)
            //     },
            //     () => {

            //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            //         });
            //     }
            // );

            await updateProfile(response.user, {
                displayName,

            });
            await setDoc(doc(db, "users", response.user.uid), {
                uid: response.user.uid,
                displayName,
                email,

            });
            await setDoc(doc(db, "userchats", response.user.uid), {

            });
            navigate("/");

            window.alert("sucess!");

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo' >Prithvi Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <input style={{ display: "none" }} type='file' id='file' />
                    <label htmlFor='file'>
                        <img src='https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png' />
                        <span>Add an image</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong! </span>}
                </form>
                <p>You do have an account? Login </p>
            </div>
        </div>
    )
}
