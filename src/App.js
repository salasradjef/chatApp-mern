import React, {useEffect,useState} from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios'



function App() {
  const [messages,setMessages] = useState([])
  useEffect(()=> {
    

    axios.get('/message/sync')
    .then(response => {  
      setMessages(response.data)
    })

  })
  
 /* useEffect(() => {
    const pusher = new Pusher('37339221484911185dda', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
      
    });
    


  }, [messages])*/
  

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>  
    </div>

  );
}

export default App;
