import React from 'react'
import "../styles/login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const notify = () => toast("Invalid Number");
  const handleClick = (e) => {
    e.preventDefault();
    setPhoneNumber("");
    phoneNumber.length == 10 ?
      navigate("/otp", { state: { phoneNumber: phoneNumber } }) :
      notify();

  }



  return (

    <>
      {console.log(phoneNumber)}
      {/* <div>

        <Form.Item
          name="phone"

          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            onChange={(e) => setPhoneNumber(e.target.value)}
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Button onClick={handleClick} type="primary">Primary Button</Button>
      </div> */}
      <section>
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2>Login</h2>
              <div class="inputbox">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <input onChange={(e) => setPhoneNumber(e.target.value)}
                  type="number" required />
                <label for="">Phone Number</label>
              </div>


              <button onClick={handleClick}>Log in</button>

            </form>
          </div>
        </div>
      </section>

    </>
  )
}
