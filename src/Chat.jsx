// import React, { useContext, useEffect, useState } from 'react'
// import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, } from 'firebase/firestore'
// import { auth, db, uploadImageToFirebaseStorage } from './firebase-config'
// import { userContext } from './contexts/UserContext'


// const Chat = ({room}) => {
//     const [message,setMessage] = useState("")
//     const messageRef = collection(db,room)
//     const [messages,setMessages] = useState([])
//     const [img,setImg] = useState(null)
//    const {name} = useContext(userContext)

   
// console.log(name)
//     useEffect(()=>{
//         const queryMessage = query(messageRef,orderBy("createdAt"))
//        const unsubscribe = onSnapshot(queryMessage,(snapshot)=>{
//             let messages = []
//             snapshot.forEach(doc => messages.push({...doc.data(),id:doc.id,}))
//             setMessages(messages)
//         })
//         return ()=> unsubscribe();
//     },[])
//     const handleSubmit = async  (e) => {
//         e.preventDefault();
//      console.log(message)
//      if(message === "") {
//       const imgUrl = await uploadImageToFirebaseStorage(img)
//       console.log(imgUrl)
//       await addDoc(messageRef,{
//         text:message,
//         createdAt:serverTimestamp(),
//         user:auth.currentUser.displayName,
        
//        type:"img",
//        imgUrl
//        })
//      };
//    await addDoc(messageRef,{
//     text:message,
//     createdAt:serverTimestamp(),
//     user:auth.currentUser.displayName,
//     room,
//     type:"text"
//    })
//    setMessage("")
//     }
//   return (
    
//          <div className="chat-app">
//       <div className="header">
//         <h1>Welcome to: {room.toUpperCase()}</h1>
//       </div>
//       <div className="messages">
//         {
//             messages.map((message) => <div key={message.id}>
//                   { message.type === "text" ? (<> <p><span style={{fontSize:"10px",color:"blue"}}>{message.user}</span> :
//               {message.text}</p></>):(<img style={{width:"50px", height:"50px"}} src={message.imgUrl} />)
           
// }
//               </div>)
//         }
//       </div>
//       <form onSubmit={handleSubmit} className="new-message-form">
//         <input
//           type="text"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//           className="new-message-input"
//           placeholder="Type your message here..."
//         />
//        <input
//        onChange={(e)=> setImg(e.target.files[0])}
//         type="file" accept="image/*" />
//         <button type="submit" className="send-button">
//           Send
//         </button>
//       </form>

//         </div>
//   )
// }

// export default Chat