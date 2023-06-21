import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../features/userDetailSlice';
import { showCourse } from '../features/courseDetail';

export default function Readform() {
    const dispatch = useDispatch();
    const loading1 = false;

    const users = useSelector((state) => state.app.users)
    const courses = useSelector((state) => state.course.courses)
    console.log('data: ', users, courses)
    if (loading1) {
        return <h2>{loading1}</h2>

    }
    const getData = (e) => {
        e.preventDefault()
        dispatch(showUser())
    }
    const getCourseData = (e) => {
        e.preventDefault();
        dispatch(showCourse())
        console.log(courses);
    }
    return (
        <>
            <button onClick={getData}>Get User Data</button>   <button onClick={getCourseData}>Get Course Data</button>
            <h2>USER DETAILS:</h2>
            {users &&
                users.map((ele) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><strong>user id: </strong>{ele.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><strong>user name: </strong>{ele.name}</Card.Subtitle>
                            <Card.Text>
                                <strong>user email: </strong>  {ele.email}
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
            <h2>COURSE DETAILS:</h2>
            {courses &&
                courses.map((ele) => (

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><strong>course id: </strong>{ele.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><strong>course name: </strong>{ele.course}</Card.Subtitle>
                            <Card.Text>
                                <strong>lecturer name: </strong>  {ele.lecturer}
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    )
}
