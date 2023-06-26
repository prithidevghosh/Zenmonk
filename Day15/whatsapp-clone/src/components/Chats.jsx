import React, { useState } from 'react'
import "../styles/chat.css"
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material'
export default function Chats() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>last seen at ...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat_body'>
                <p className={`chat_message ${true &&
                    "chat_reciever"}`}>
                    <span className='chat_name'>
                        My Name
                    </span>


                    Hey guys

                    <span className='chat_timestamp'>
                        3:52pm
                    </span>


                </p>

            </div>

            <div className='chat_footer'>

                <InsertEmoticon />
                <form>
                    <input value={input} type='text'
                        onChange={(e) => setInput(e.target.value)} />
                    <button onClick={sendMessage}>send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}
