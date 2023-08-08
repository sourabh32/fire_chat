import { useContext, useRef, useState } from "react"
import Auth from "./Auth"

import Chat from "./pages/Chat"
import { userContext } from "./contexts/UserContext"
import { handleAddRoom, logOut } from "./firebase-functions"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthenticationPage from "./pages/Authentication"
import Header from "./Header"
import HomePage from "./pages/Home"
import ChatProvider from "./contexts/ChatContext"


function App() {
const {user} = useContext(userContext)

console.log(user)

// const InputRef = useRef(null)



return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path ="/" element={<AuthenticationPage />} />
  
    <Route path ="/room/:id" element={<Chat />} />
    <Route path ="/auth" element={<HomePage />} />
   
  </Routes>
  </BrowserRouter>
)
  

    //   if(!user){
    //     return(<Auth  />)
    //   }
    //   else{
    //   return(
    //     <div className="main-container">
    //   {room ? (
    //     <div className="chat-container">
    //       <Chat room={room} />
    //       <button className="logout-button" onClick={logOut}>
    //         Log Out
    //       </button>
    //     </div>
    //   ) : (
    //     <div className="room-selection">
    //       <h2>Welcome to My Chat App</h2>
    //       <label>Enter room number:</label>
    //       <input className="room-input" ref={InputRef} />
    //       <button className="enter-button" onClick={handleRoomSubmit}>
    //         Enter Room
    //       </button>
    //       <button className="logout-button" onClick={logOut}>
    //         Log Out
    //       </button>
    //     </div>
    //   )}
    // </div>
    //   )
    //       }
    
    
    
   
  
}

export default App
