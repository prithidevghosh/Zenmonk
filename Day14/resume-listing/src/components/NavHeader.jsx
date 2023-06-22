import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavHeader() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
                        Resume
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/login"}>
                        <FaSignInAlt /> Sign In
                    </Link>

                </Nav>
            </Container>
        </Navbar>

    )
}
