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
import { Link, useNavigate } from "react-router-dom";
import Chat from "./Chat";
import MemoizedChat from "./Chat";
import { handleAddRoom } from "../firebase-functions";



function HomePage() {
  const { selectedRoom, setSelectedRoom,messages } =
    useContext(chatContext);

  console.log("render");
 
  const { user } = useContext(userContext);

  // console.log(messages);
  // console.log(selectedRoom);
const InputRef = useRef("")
  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    
  };
  const navigate = useNavigate()
const handleRoomSubmit = async () =>{
  const val = InputRef.current.value
 setSelectedRoom(val)
 navigate(`/room/${val}`)
  await handleAddRoom(val,user.uid)
}
 

  return (
    <Container minHeight="90vh" minW="100vw" display="flex" alignItems="center" justifyContent="center">
    <Box my="3" width={["90%","50%"]} p={4} borderWidth={1} borderRadius="md">
      <Text fontWeight="bold" fontSize="xl" mb={4}>
        Rooms
      </Text>
      <div className="room-selection">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Welcome to My Chat App
        </Text>
        <label htmlFor="room-input">Enter room number:</label>
        <Input
          id="room-input"
          className="room-input"
          ref={InputRef}
          size="md"
          mb={2}
          placeholder="Room Number"
        />
        <Button
          className="enter-button"
          onClick={handleRoomSubmit}
          colorScheme="teal"
          size="md"
        >
          Enter Room
        </Button>
      </div>
      <VStack maxH="70vh" spacing={5} overflowY="scroll">
        {user &&
          user.chatRooms.map((room) => (
            <Link to={`/room/${room}`} key={room}>
              <Button
                onClick={() => handleRoomClick(room)}
                variant={selectedRoom === room.id ? "solid" : "outline"}
                size="md"
              >
                {room}
              </Button>
            </Link>
          ))}
      </VStack>
    </Box>
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
