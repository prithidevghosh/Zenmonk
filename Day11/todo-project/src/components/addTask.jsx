import React from 'react'
import "../styles/addTask.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../feature/usersSlice';
import { addTask } from "../feature/taskSlice"
import "../styles/addTask.css"

export default function AddTask() {
    const users = useSelector(selectUser);
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState({
        user: "",
        deadline: "",
        task_desc: ""
    })

    const [error, setError] = useState("")

    const handleClick = (e) => {
        e.preventDefault();

        (userInput.user == "") ? setError("*user is required") : (userInput.deadline == "") ?
            setError("*deadline is required") : (userInput.task_desc == "") ? setError("*task description is required") :
                dispatch(addTask({ ...userInput }))



    }

    const handleChange = (e) => {

        let { name, value } = e.target;

        setUserInput(() => {
            return {
                ...userInput,
                [name]: value
            }
        })
        // console.log(userInput);
    }
    // const [componentDisabled, setComponentDisabled] = useState(true);
    return (
        <>

            <div className='task_container'>
                <Form>
                    <Form.Group className="mb-3 lg-6" controlId="formBasicEmail">

                        <Form.Control name='task_desc' onChange={handleChange} type="textarea" placeholder="enter task" />

                    </Form.Group>
                    <Form.Group className="mb-3">

                        <Form.Select name='user' onChange={handleChange} >
                            {users.map((user) => {
                                return <option>{user.username}</option>
                            })}

                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 lg-6" controlId="formBasicEmail">

                        <Form.Control name='deadline' onChange={handleChange} type="date" placeholder="enter task" />

                    </Form.Group>


                    <Button onClick={(e) => handleClick(e)} variant="primary" type="submit">
                        Submit
                    </Button>
                    <strong style={{ color: "red" }}>{error}</strong>
                </Form>
            </div>
        </>
    )
}
