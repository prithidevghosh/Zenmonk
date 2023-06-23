import React from 'react'
import "../styles/otpPage.css"
import { Input, Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';
import { useNavigate } from 'react-router-dom';
export default function OtpPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        let contact = location.state.phoneNumber;
        // let prevData = JSON.parse(localStorage.getItem("user_detail")) || [];
        //    prevData.length>0?
        //    (
        //     prevData.find((item)=> item==contact)
        //    )
        //    :
        // localStorage.setItem("user_detail", JSON.stringify([...prevData, contact]));
        dispatch(addUser(contact));
        navigate("/dashboard", { state: { phone: contact } })
    }
    return (
        <>
            {console.log(location.state.phoneNumber)}
            {/* <Input placeholder="Basic usage" />
            <Button onClick={handleClick} type="primary">Primary Button</Button> */}

            <div className='container'>
                <h2>verify your account</h2>
                <p>
                    Enter the otp below
                </p>

                <div className='code-container'>
                    <input type='number' className='code' placeholder='0' min='0' max='9' required />
                    <input type='number' className='code' placeholder='0' min='0' max='9' required />
                    <input type='number' className='code' placeholder='0' min='0' max='9' required />
                    <input type='number' className='code' placeholder='0' min='0' max='9' required />

                </div>

                <div>
                    <button onClick={handleClick} type='button' className='btn btn-primary'>Verify</button>
                </div>


            </div>

        </>
    )
}
