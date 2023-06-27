import React from 'react'
import { } from "../../src/"
export default function Navbar() {
    return (
        <div className='navbar'>
            <span className='logo'>Prithvi chat</span>
            <div className='user'>
                <img src='../logo.jpg' alt='' />
                <span>John</span>
                <button>log out</button>
            </div>
        </div>
    )
}
