import React from 'react'
import { IconButton , Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'
function Chat(){
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Kind of information about </p>

                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>    
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Salas</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Salas</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>


                </p>
                <p className="chat__message receiver">
                    <span className="chat__name">Salas</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>


                </p>
            </div>



            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>
                <form>  
                    <input type="text" placeholder="Aa"></input>
                    <button type="submit">send</button>
                </form>
                    
                <IconButton>    
                    <MicIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat