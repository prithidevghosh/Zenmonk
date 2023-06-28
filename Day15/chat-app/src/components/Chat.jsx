import React from 'react'
import Messages from './Messages'
import Input from "./Input"
export default function Chat() {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={"https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png"} alt='' />
                    <img src={"https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png"} alt='' />
                    <img src={"https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png"} alt='' />
                </div>

            </div>
            <Messages />
            <Input />
        </div>
    )
}
