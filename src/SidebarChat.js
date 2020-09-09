import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'

function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
                <div className="sidebarchat__info">
                    <h2>Room Name</h2>
                    <p>this is the last message i received</p>   
                </div> 
        </div>
    )
}

export default SidebarChat
