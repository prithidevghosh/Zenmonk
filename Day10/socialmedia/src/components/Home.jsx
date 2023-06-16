import React, { useEffect } from 'react'
import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import "../styles/Home.css"
import { product_card } from '../../src/product'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState([]);
    const [userRole, setUserRole] = useState(false);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    console.log(product.length);
    useEffect(() => {

        setProduct(product_card);
    }, [product])

    const addProduct = (product_name, product_price) => {
        let id = product.length + 1;
        let newProduct = {
            id,
            name: product_name,
            price: product_price,
            currency: "$"
        }
        product.push(newProduct);
        console.log(product);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {

        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const findSessionUser = () => {
        let user = JSON.parse(localStorage.getItem("session"));

        if (user) {
            if (user.radio == "admin" || user.radio == "vendor") {
                console.log("hi");
                setUserRole(true)
                return true
            }
            else { return false }
        }
    }
    useEffect(() => {
        findSessionUser()
    }, [userRole])
    return (
        <>

            {userRole == true ? <Button className='m-5' type="primary" onClick={showModal}>
                + Add Product
            </Button> : console.log("no session user")}
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
                        label="Product Name"
                        name="product_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product name',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setProductName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Product Price"
                        name="product_price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setProductPrice(e.target.value)} />
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
                        <Button onClick={addProduct(productName, productPrice)} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className='cards' >
                {product.map((item) => {

                    return (
                        <Card
                            style={{
                                width: 300,
                                margin: "1em"
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[

                                <EditOutlined key="edit" />,

                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title={item.name}
                                description={item.price}
                            />
                        </Card>)
                })}
            </div>
        </>

    )
}
