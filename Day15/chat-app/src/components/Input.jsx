import React from 'react'

export default function Input() {
    return (
        <div className='input'>
            <input type='text' placeholder='Type something...' />
            <div className='send'>
                <img src={"https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/attach.png"} alt='' />
                <input type='file' style={{ display: "none" }} id='file' />
                <label htmlFor='file'>
                    <img src={"https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/img.png"} alt='' />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}
