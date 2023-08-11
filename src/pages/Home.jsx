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
  Heading,
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
    <Container fontFamily={"nunito sans"} p="10" maxW="container.lg">
      
      <Heading fontFamily={"bebas neue"} textAlign={"center"} my="5" size="md">Experience Lightning-Fast Chats: 50% Quicker, 100% Seamless</Heading>
      <VStack  justifyContent={"center"} 
      alignItems={"center"} w="100%" height={["15vh","25vh"]} border="2px dashed #ccc" borderRadius="md">
      <Heading size="md" fontFamily="bebas neue">Add Room</Heading>
   <CreateRoom user={user} />
  </VStack>
  <Box my="10"
  p="5"
  w="100%" border="2px solid #ccc" borderRadius="md"
  >
    <Heading fontFamily={"bebas neue"} textAlign={"center"} my="5" size="md">Saved Room's</Heading>
    {
      user ? (<RoomsContainer user={user} />):(<Text textAlign={"center"}>
        Sign In to Save Room's!
      </Text>)
    }
    

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
