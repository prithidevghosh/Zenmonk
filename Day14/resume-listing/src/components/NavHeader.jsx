import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

import { logOutUser } from '../features/usersSlice';
import { useDispatch } from 'react-redux';
export default function NavHeader() {
    let dispatch = useDispatch();
    let data = useSelector((state) => state.app);
    let login = data.users.isLoggedIn;
    const handleClick = () => {
        dispatch(logOutUser());
    }
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
                        Resume
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    {(login) ? <button onClick={handleClick}>Sign Out</button> : <Link style={{ textDecoration: "none", color: "black" }} to={"/login"}>
                        <FaSignInAlt /> Sign In
                    </Link>
                    }
                </Nav>
            </Container>
        </Navbar>

    )
}
