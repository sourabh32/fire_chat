
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Header"
import HomePage from "./pages/Home"
import AuthenticationPage from "./pages/Authentication"
import Chat from "./pages/Chat"



function App() {


// const InputRef = useRef(null)



return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path ="/auth" element={<AuthenticationPage />} />
  
    <Route path ="/room/:id" element={<Chat />} />
    <Route path ="/" element={<HomePage />} />
   
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
