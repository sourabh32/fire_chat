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
import CreateRoom from "../Components/CreateRoom";
import RoomsContainer from "../Components/RoomsContainer";



function HomePage() {
  

  
 
  const { user } = useContext(userContext);

  

  

 

  return (
    <Container p="10" maxW="container.lg">
   
      <VStack  justifyContent={"center"} 
      alignItems={"center"} w="100%" height={["15vh","25vh"]} border="2px dashed #ccc" borderRadius="md">
      <Text>Add Room</Text>
   <CreateRoom user={user} />
  </VStack>
  <Box my="10"
  p="5"
  w="100%" border="2px solid #ccc" borderRadius="md"
  >
    <Text textAlign={"center"}>Previous Room's</Text>
    <RoomsContainer user={user} />

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
