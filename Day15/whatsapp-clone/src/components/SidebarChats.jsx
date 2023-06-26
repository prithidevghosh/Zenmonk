import React, { useEffect, useState } from 'react'
import "../styles/sidebarchat.css"
import { Avatar } from '@mui/material'
export default function SidebarChats({ addNewChat }) {
    const [seed, setSeed] = useState("");

    // useEffect(() => {
    //     setSeed(Math.floor(Math.random() * 5000));
    // }, [])

    const createChat=()=>{
        const roomName=prompt("Please enter name for chat")
        
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat_info'>
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new chat</h2>
        </div>
    )
}
