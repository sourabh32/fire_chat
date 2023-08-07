
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase-config";




export const chatContext = createContext()



export const ChatProvider = ({children})=>{
    const [selectedRoom,setSelectedRoom] = useState("z")
    const [messages,setMessages] = useState([])
    const messageRef = collection(db,selectedRoom)


    useEffect(()=>{
        if(selectedRoom !== "z"){
        const queryMessage = query(messageRef,orderBy("createdAt"))
       const unsubscribe = onSnapshot(queryMessage,(snapshot)=>{
            let messages = []
            snapshot.forEach(doc => messages.push({...doc.data(),id:doc.id,}))
            setMessages(messages)
            // console.log(messages)
        })
        return ()=> unsubscribe();
        }
    },[selectedRoom])
      
    const value = {selectedRoom,setSelectedRoom,messages,messageRef}
    return(
        <chatContext.Provider value={value}>
            {children}
        </chatContext.Provider>
    )
}
export default ChatProvider