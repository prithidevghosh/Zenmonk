import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [user, setUser] = useState("");
    const findSessionUser = () => {

        let sessionUser = JSON.parse(localStorage.getItem("session"));
        if (sessionUser) {
            setUser(true)
            return true

        }

        return false;
    }

    const handleClick = () => {
        setUser(false)
        let sessionUser = JSON.parse(localStorage.getItem("session"));
        if (sessionUser) {
            localStorage.removeItem("session");
        }
    }
    useEffect(() => {
        findSessionUser()
    }, [user])


    return (<> <Navbar bg="dark" variant="dark">
        <Container> <NavLink to={"/"}>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand></NavLink>
            <Nav className="me-auto">
                {user == true ? (<><NavLink onClick={handleClick}>Sign Out</NavLink><NavLink style={{ textDecoration: "none", color: "white" }} to={"/profile"}>Profile</NavLink></>) :
                    (<><NavLink style={{ textDecoration: "none", color: "white" }} to={"/signIn"}>
                        Sign In</NavLink>
                        
                        <NavLink style={{ textDecoration: "none", color: "white" }}
                            to={"/signUp"}>Sign Up</NavLink></>
                    )} </Nav> </Container> </Navbar> </>)
}
