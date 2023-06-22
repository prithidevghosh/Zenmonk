import React, { useEffect } from 'react'
import "../styles/dashboard.css"
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addResume } from '../features/resumeSlice';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
const { Meta } = Card;
export default function Dashboard() {
  const location = useLocation();
  const dispatch = useDispatch();
  let contact = location.state.phone;
  const resumes = useSelector((state) => state.resume.resumes);
  const [localResumes, setLocalResumes] = useState(resumes);
  const [render, setRender] = useState([]);
  // console.log(resume);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ createdBy: contact });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const handleChange = (e) => {

    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value
      }
    })

  }
  // const filterResumes = () => {
  //   // console.log(resume[0][1]);
  //   // let out = resume[0][1].filter((ele) => {
  //   //   return ele.createdBy == contact;
  //   // })
  //   console.log(out);
  //   setRender(out);
  // }
  useEffect(() => {
    // filterResumes()
    setLocalResumes(resumes);
  }, [resumes])
  const handleClick = () => {
    setIsModalOpen(false)
    dispatch(addResume(formData));
    // filterResumes()
  }
  return (
    <>
      {console.log(render)}
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={notInitialized}>
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
          <h6>Personal Information: </h6>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="name" onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="DOB"
            name="dob"
            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="dob" type='date' onChange={handleChange} />


          </Form.Item>
          <Form.Item
            label="College Name"
            name="college"
            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="college" onChange={handleChange} />
          </Form.Item>



          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={handleClick} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div>Dashboard</div>
      <button onClick={showModal} className='addButton'>+ Add Button</button>


      {localResumes.map((ele) => {
        return <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={ele.name}
            description={ele.college}
          />
          {ele.dob}
        </Card>
      })}
    </>

  )
}
