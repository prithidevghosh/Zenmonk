import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {} from "../../public/assets/sign.svg"
import Image_comp from './Image_comp';
import { NavLink, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs-react'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Radio } from 'antd';

export default function Signup() {
    const history = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        date: "",
        password: "",
        radio: ""
    })
    const hashPassword = () => {
        console.log("hello");
        try {
            let hash = bcrypt.hashSync(inputValue.password, 8);
            inputValue.password = hash;

            console.log(inputValue);
        } catch (error) { console.log("error in encryption", error); }
    }

    const handleChange = (e) => {
        let { name, value } = e.target;

        setInputValue(() => {
            return {
                ...inputValue,
                [name]: value
            }
        })
        console.log(inputValue);
    }

    const addData = (e) => {
        e.preventDefault();
        let { name, email, date, password } = inputValue;
        name == "" ? setError("name field is empty") :
            email == "" || !email.includes("@") ?
                setError("email fiels is empty/format is invalid") : date == "" ? setError("date field is empty") :
                    password == "" ? setError("password field is empty") :
                        hashPassword();

        history("/signIn");
        let prevData = JSON.parse(localStorage.getItem("user_detail")) || [];
        localStorage.setItem("user_detail", JSON.stringify([...prevData, inputValue]));
    }
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        handleChange(e);
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <div className='container mt-3' >
                <section className='d-flex justify-content-between'>
                    {/* below div represents left part of the form */}
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6' >Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control name='name' onChange={handleChange} type="text" placeholder="Enter name" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control name='email' onChange={handleChange} type="email" placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control name='date' onChange={handleChange} type="date" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control name='password' onChange={handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Radio.Group name="radio" onChange={onChange} value={value}>
                                    <Radio value={"admin"}>Admin</Radio>
                                    <Radio value={"vendor"}>Vendor</Radio>
                                    <Radio value={"customer"}>Customer</Radio>

                                </Radio.Group>
                            </Form.Group>


                            <Button onClick={addData} style={{ backgroundColor: "rgba(67,185,127)" }} className='col-lg-6 mb-3' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <strong style={{ color: "red" }}>{error}</strong>
                        <p>Already have an account ? <NavLink to={"/signIn"}><i>Sign In</i></NavLink></p>
                    </div>
                    <Image_comp />
                </section >

            </div >
        </>
    )
}
