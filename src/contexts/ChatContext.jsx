
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase-config";





export const chatContext = createContext()



export const ChatProvider = ({children})=>{
    const [selectedRoom,setSelectedRoom] = useState("undefined")
    const [messages,setMessages] = useState([])
    
    const messageRef = collection(db,selectedRoom)
    
 

    useEffect(()=>{
        if(selectedRoom !== "undefined"){
            
        const queryMessage = query(messageRef,orderBy("createdAt"))
       const unsubscribe =  onSnapshot(queryMessage, async(snapshot)=>{
            let newMessages = []
             snapshot.forEach(doc => newMessages.push({...doc.data(),id:doc.id,}))
            setMessages(newMessages)
            // console.log(messages)
        }
        )
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