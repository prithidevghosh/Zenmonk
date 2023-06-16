import React, { useEffect } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';

const { Meta } = Card;


export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true)

  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const fetchUserDetail = () => {
    let session = localStorage.getItem("session");
    if (session) {
      let { name, email } = JSON.parse(session)
      setUserName(name); setUserEmail(email);
    }
  }
  useEffect(()=>{
     fetchUserDetail()
  },[userName])
  return (
    <>
      
      <Card
        style={{
          width: 400,
          height: 400,
          margin: "auto"
        }}
        className='mt-5'
        cover={
          <img
            alt="example"
            src="https://th.bing.com/th/id/OIP.OIyEu-ZjyOZSBxKbFvk1-wHaHv?pid=ImgDet&rs=1"
            height={400}
            width={100}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={handleClick} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta style={{fontSize:20}}
         
          title={userName}
          description={userEmail}

        />

      </Card>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >

          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
