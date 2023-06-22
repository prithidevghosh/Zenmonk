import React from 'react'
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
  const handleClick = (e) => {
    e.preventDefault();
    setPhoneNumber("");
    phoneNumber.length == 10 ?
      navigate("/otp", { state: { phoneNumber: phoneNumber } }) :
      alert("enter valid number");

  }


  return (

    <>
      {console.log(phoneNumber)}
      <div>

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
      </div>

    </>
  )
}
