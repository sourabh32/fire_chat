import { useRef, useState } from "react"
import Auth from "./Auth"
import Cookies from 'universal-cookie'
import Chat from "./Chat"
const cookies = new Cookies()

function App() {
const [isAuth,setAuth] = useState(cookies.get("auth-token"))
const [room,setRoom] = useState("")
console.log(room)
  const InputRef = useRef(null)

      if(!isAuth){
        return(<Auth  set={setAuth} />)
      }
      else{
      return(
        <div>
          {room ? (<Chat room={room} />):(<div>
            <label>enter room no</label>
            <input ref={InputRef} />
            <button onClick={()=> setRoom(InputRef.current.value)}>enter room</button>
            </div>) }
        </div>
      )
          }
    
    
    
   
  
}

export default App
