import { Box, Button, HStack, IconButton, Input } from '@chakra-ui/react'
import React, { useContext, useRef } from 'react'
import {AiFillMessage} from "react-icons/ai"
import ImgBtn from './ImgButton'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { chatContext } from '../contexts/ChatContext'
import { userContext } from '../contexts/UserContext'
const MyInput = () => {
  const {messageRef,} = useContext(chatContext)
  const {user} = useContext(userContext)
 
  const InputRef = useRef("");
  const handleSendMessage = async (e) => {
    e.preventDefault();
    InputRef.current.focus()
    await addDoc(messageRef, {
      text: InputRef.current.value,
      createdAt: serverTimestamp(),
      sender: user.displayName,

      type: "text",
    });
    InputRef.current.value = "";
    InputRef.current.focus()
  };
    
  return (
    
    <Box border={"1px solid black"} w="full" p={2} borderTopWidth={1} borderColor="gray.300">
    <HStack >
      <Input
      fontFamily={"nunito sans"}
        ref={InputRef}
        size={"sm"}
        py={2}
        px={4}
        rounded="full"
        
        bg="#f5f5f5"
        placeholder="Type your message..."
      
      />
        <IconButton borderRadius={"full"}   aria-label="Facebook" icon={<AiFillMessage />} onClick={handleSendMessage} size="sm" variant="outline" colorScheme="gray" />
      <ImgBtn borderRadius={"4"} message={InputRef.current.value} />
    
      
    </HStack>
  </Box>
  )
}

export default MyInput