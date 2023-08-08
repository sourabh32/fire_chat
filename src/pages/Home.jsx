import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Button,
  VStack,
  Divider,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import { userContext } from "../contexts/UserContext";
import { chatContext } from "../contexts/ChatContext";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import MemoizedChat from "./Chat";



function HomePage() {
  const { selectedRoom, setSelectedRoom,messages } =
    useContext(chatContext);

  console.log("render");
 
  const { user } = useContext(userContext);

  // console.log(messages);
  // console.log(selectedRoom);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    
  };

 

  return (
    <Container minHeight="90vh" minW="100vw">
     <HStack>
        <Box width="50%" p={4} borderWidth={1} borderRadius="md">
          <Text fontWeight="bold">Rooms</Text>
          <Button>Add Room</Button>
          <VStack maxH={"70vh"} spacing="5" overflowY={"scroll"}>
            {user &&
              user.chatRooms.map((room) => (
               
                <Button
                  key={room}
                  onClick={() => handleRoomClick(room)}
                  variant={selectedRoom === room.id ? "solid" : "outline"}
                >
                  {room}
                </Button>
               
              ))}
          </VStack>
        </Box>
        
<MemoizedChat messages={messages} />
      </HStack>
    </Container>
  );
}

export default HomePage;

// const handleSubmit = async  (e) => {
//     e.preventDefault();
//  console.log(message)
//  if(message === "") {
//   const imgUrl = await uploadImageToFirebaseStorage(img)
//   console.log(imgUrl)
//   await addDoc(messageRef,{
//     text:message,
//     createdAt:serverTimestamp(),
//     user:auth.currentUser.displayName,

//    type:"img",
//    imgUrl
//    })
//  };
// await addDoc(messageRef,{
// text:message,
// createdAt:serverTimestamp(),
// user:auth.currentUser.displayName,
// room,
// type:"text"
// })
// setMessage("")
// }
