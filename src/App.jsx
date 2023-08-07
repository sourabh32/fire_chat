import { useContext, useRef, useState } from "react"
import Auth from "./Auth"

import Chat from "./Chat"
import { userContext } from "./contexts/UserContext"
import { handleAddRoom, logOut } from "./firebase-functions"


function App() {
const {user} = useContext(userContext)
const [room,setRoom] = useState("")
console.log(user)
console.log(room)
const InputRef = useRef(null)
const handleRoomSubmit = async () =>{
  setRoom(InputRef.current.value)
  await handleAddRoom(InputRef.current.value,user.uid)
}
  

      if(!user){
        return(<Auth  />)
      }
      else{
      return(
        <div className="main-container">
      {room ? (
        <div className="chat-container">
          <Chat room={room} />
          <button className="logout-button" onClick={logOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="room-selection">
          <h2>Welcome to My Chat App</h2>
          <label>Enter room number:</label>
          <input className="room-input" ref={InputRef} />
          <button className="enter-button" onClick={handleRoomSubmit}>
            Enter Room
          </button>
          <button className="logout-button" onClick={logOut}>
            Log Out
          </button>
        </div>
      )}
    </div>
      )
          }
    
    
    
   
  
}

export default App
