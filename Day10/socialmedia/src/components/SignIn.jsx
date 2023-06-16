import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {} from "../../public/assets/sign.svg"
import Image_comp from './Image_comp';
import bcrypt from 'bcryptjs-react'
import { Radio } from 'antd';

import { useNavigate } from 'react-router-dom';
export default function SignIn() {
    let history = useNavigate();
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        // console.log(name,value);
        setInputValue(() => {
            return {
                ...inputValue,
                [name]: value
            }
        })
        console.log(inputValue);
    }
    const comparePassword = (hash, password) => {
        let ans = bcrypt.compareSync(password, hash);
        return ans;
    }

    const addData = (e) => {
        e.preventDefault();
        let { email, password } = inputValue;
        // localStorage.setItem("logInDetail", JSON.stringify([...data, inputValue]));
        let users = JSON.parse(localStorage.getItem("user_detail"));
        console.log(users);
        let current_useer = users.filter((user) => {
            return user.email == email;

        })
        // console.log(current_useer);
        if (current_useer.length == 0) {
            history("/signUp")
        }
        else {
            let ans = comparePassword(current_useer[0].password, password);
        
            console.log("erro");
            if (ans) {
                localStorage.setItem("session", JSON.stringify(current_useer[0]));
                history("/");
            } else {
                console.log("invalid credentials");
            }
        }

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
                        <h3 className='text-center col-lg-6' >Sign In</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control name='email' onChange={handleChange} type="email" placeholder="Enter email" />

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
                        <p>Don't yet have an account ? Sign Up</p>
                    </div>
                    <Image_comp />
                </section>

            </div>
        </>
    )
}
