import React from 'react'
import "../styles/sidebar.css"
import { Avatar, IconButton } from "@mui/material"
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@mui/icons-material'
import SidebarChats from './SidebarChats'
export default function Sidebar() {
    return (
        <>
            <div className='sidebar'>

                <div className='sidebar_header'>
                    <Avatar />


                    <div className='sidebar_headerRight'>
                        <IconButton>
                            <DonutLarge />
                        </IconButton>
                        <IconButton>
                            <Chat />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>


                    </div>
                </div>
                <div className='sidebar_search'>
                    <div className='sidebar_searchContainer'>
                        <SearchOutlined />
                        <input type='text' placeholder='search or start a new chat' />
                    </div>

                </div>
                <div className='sidebar_chats'>
                    <SidebarChats />
                    <SidebarChats />
                    <SidebarChats />
                    <SidebarChats />
                    <SidebarChats />
                </div>
            </div>

        </>
    )
}
