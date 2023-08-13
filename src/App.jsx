import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import { Suspense } from "react"
import LazyLoder from "./Components/LazyLoder"
import { Toaster } from "react-hot-toast"

const HomePage  = React.lazy(()=> import("./pages/Home"))
const Chat = React.lazy(()=> import("./pages/Chat"))
const AuthenticationPage = React.lazy(()=> import("./pages/Authentication"))




function App() {


// const InputRef = useRef(null)



return (
  <BrowserRouter>
  <Toaster />
  <Header />
  <Suspense fallback={<LazyLoder />}>
  <Routes>
  
    <Route path ="/auth" element={<AuthenticationPage />} />
  
    <Route path ="/room/:id" element={<Chat />} />
    <Route path ="/" element={<HomePage />} />
   
  </Routes>
  </Suspense>
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
