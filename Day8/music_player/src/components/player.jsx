import React from 'react'
import "../styles/player.css"
import Controls from './controls'
import Search from './search'
import SongLog from './songLog'
import SongDisplay from './songDisplay'
export default function Player() {
    return (
        <div className='container'>
            {/* <Controls /> */}
           
            <SongLog/>
            <Search/>
        </div>
    )
}
