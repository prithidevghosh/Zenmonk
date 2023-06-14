import React from 'react'
import "../styles/songDisplay.css"
export default function SongDisplay(props) {
    return (
        <div className='songdisplay_container'>

            <i class="fa-solid fa-music"></i><span>{props.song}</span>
        
        </div>
    )
}
