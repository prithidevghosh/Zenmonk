import React, { useEffect } from 'react'
import "../styles/dashboard.css"
import JsPDF from 'jspdf';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addResume } from '../features/resumeSlice';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import Template1 from '../templates/template1/template1';
import Template2 from '../templates/template2';
import Template3 from '../templates/template3';
const { Meta } = Card;
export default function Dashboard() {
  const location = useLocation();
  const dispatch = useDispatch();
  let contact = location.state.phone;
  const users = useSelector((state) => state.app)
  const resumes = useSelector((state) => state.resume.resumes).filter((resume) => {
    return resume.createdBy == users.users.contact
  });

  // console.log("users state", users.users);

  const [localResumes, setLocalResumes] = useState(resumes);

  // const filterResumes = () => {
  //   let arr = resumes.filter((resume) => {
  //     return resume.createdBy == users.users.contact
  //   })
  //   // console.log("resumes", arr);
  // }
  // filterResumes();

  const [render, setRender] = useState([]);

  const [maxModalSize, setMaxModalSize] = useState(1200);

  // console.log(resume);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [isModalOpen_1, setIsModalOpen_1] = useState(false);
  const [isModalOpen_2, setIsModalOpen_2] = useState(false);
  const [isModalOpen_3, setIsModalOpen_3] = useState(false);
  const [cardInfo, setCardInfo] = useState("")
  const [formData, setFormData] = useState({ createdBy: contact });
  const handleOverview = (ele) => {
    if (ele.temp == "temp1") {
      setIsModalOpen_1(true)
    }
    else if (ele.temp == "temp2") {
      setIsModalOpen_2(true)
    }
    else if (ele.temp == "temp3") {
      setIsModalOpen_3(true)
    }
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel_1 = () => {
    setIsModalOpen_1(false);
  };
  const handleCancel_2 = () => {
    setIsModalOpen_2(false);
  };
  const handleCancel_3 = () => {
    setIsModalOpen_3(false);
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

  const handlePreviewClick = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.temp == "temp1") {
      console.log(formData.temp);
      setIsModalOpen_1(true)
    }
    else if (formData.temp == "temp2") {
      setIsModalOpen_2(true)
    }
    else if (formData.temp == "temp3") {
      setIsModalOpen_3(true)
    }
  }
  return (
    <>

      <Modal width={1200} title="Basic Modal" open={isModalOpen_1} onOk={handleOk2} onCancel={handleCancel_1} footer={""}>
        <Template1 data={formData} />
      </Modal>
      <Modal width={1200} title="Basic Modal" open={isModalOpen_2} onOk={handleOk2} onCancel={handleCancel_2} footer={""}>
        <Template2 data={formData} />
      </Modal>
      <Modal width={1200} title="Basic Modal" open={isModalOpen_3} onOk={handleOk2} onCancel={handleCancel_3} footer="">
        <Template3 data={formData} />
      </Modal>





      <Modal title="Basic Modal" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
        <p>{formData.name}</p>
        <p>{formData.dob}</p>
        <p>{formData.college}</p>
      </Modal>



      {/* this modal open on add button */}
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

            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="college" onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Profile"

            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="profile" onChange={handleChange} />

          </Form.Item>

          <Form.Item
            label="Skills"

            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="skills" onChange={handleChange} />

          </Form.Item>


          <Form.Item
            label="Experience"

            rules={[
              {
                required: true,

              },
            ]}
          >
            <Input name="experience" onChange={handleChange} />

          </Form.Item>


          <input type='radio' value="temp1" name='temp' onChange={handleChange} />temp1
          <input type='radio' value="temp2" name='temp' onChange={handleChange} />temp2
          <input type='radio' value="temp3" name='temp' onChange={handleChange} />temp3

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={handleClick} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={handlePreviewClick} type="primary" htmlType="submit">
              Preview
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div>Dashboard</div>
      {users.users.isLoggedIn ? <button onClick={showModal} className='addButton'>+ Add Button</button> : ""}

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {users.users.isLoggedIn ? localResumes.map((ele) => {
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

          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={ele.name}
              description={ele.college}
            />
            {ele.dob}
            <button onClick={() => handleOverview(ele)}>Preview</button>
          </Card>
        }) : <h1>No Data</h1>}</div>
    </>

  )
}
