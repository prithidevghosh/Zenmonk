// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useDispatch } from 'react-redux'
// import { createUser } from '../features/userDetailSlice';
// import { useNavigate } from 'react-router-dom';
// export default function CreateForm() {
//     const dispatch = useDispatch();
//     const [formData, setFormData] = useState({})
//     const navigate = useNavigate();
//     const getUserData = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//         console.log(formData);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(createUser(formData));
//         navigate("/read")
//     }

//     return (
//         <>
//             <Form onSubmit={handleSubmit} className='lg-3'>
//                 <Form.Group className="mb-3 " controlId="formBasicEmail">

//                     <Form.Control type="text" name='name' onChange={getUserData} placeholder="Enter name" />

//                 </Form.Group>
//                 <Form.Group className="mb-3 " controlId="formBasicEmail">

//                     <Form.Control type="email" name='email' onChange={getUserData} placeholder="Enter email" />

//                 </Form.Group>
//                 <Form.Group className="mb-3 " controlId="formBasicEmail">

//                     <Form.Control type="number" name='age' onChange={getUserData} placeholder="Enter age" />

//                 </Form.Group>


//                 <input type='radio' onChange={getUserData} value="male" name='gender' />male
//                 <input type='radio' onChange={getUserData} value="female" name='gender' />female
//                 <br></br>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </>
//     )
// }
