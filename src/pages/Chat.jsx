import { Box, Button, Input, VStack ,Text, Container, Flex, Heading, HStack, IconButton} from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import { chatContext } from '../contexts/ChatContext'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { userContext } from '../contexts/UserContext'
import MessageContent from '../MessageContent'
import MyInput from '../Components/MyInput'
import { Link, Navigate } from 'react-router-dom'
import {GrPrevious} from "react-icons/gr"
import {BsShare} from "react-icons/bs"
const Chat = () => {
    const {selectedRoom,messageRef,messages} = useContext(chatContext)
    const {user} = useContext(userContext)
    console.log("render");
    const InputRef = useRef("");
    const messagesEndRef = useRef(null);
    const handleShareClick = (event,chatID) => {
      event.stopPropagation();
      
      const whatsappMessage = 'Join our chat room. Room ID : ' + chatID ;
  
      
      window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`);
    };

    useEffect(() => {
     
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]);
  
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
      if(selectedRoom =="undefined"){
      return  <Navigate to="/auth" />
      }
  return (
    <Container  my="5" maxW={"container.lg"}  >
  <Box borderRadius={"lg"} h="full" bg={"#D8D9DA"} w={["100%","60%"]} mx="auto" flex="1" p={4} overflow="hidden" position="relative">
    <HStack alignItems={"center"} justifyContent={"space-between"}>
  <Link to="/"><GrPrevious /></Link>
  <Heading textAlign={"end"} fontSize="xl" fontFamily={"poppins"} fontWeight="bold" >{selectedRoom}</Heading>
  <IconButton
    alignSelf={"flex-end"}
    icon={<BsShare />}
    onClick={(event) => handleShareClick(event, selectedRoom)}
    mt={2}
    size={"sm"}
    aria-label="Share via WhatsApp"
    colorScheme="gray"
  />
  </HStack>

    <VStack p="2" h={"70vh"} className="chat-comp"  overflowY="scroll" spacing={2} >
     
        
       
      
        {messages.length > 0 &&
          messages.map((message) => (
            <MessageContent key={message.id} message={message}/> 
          ))}
          <Box ref={messagesEndRef} />
        
     
    </VStack>
     <MyInput  handleSendMessage={handleSendMessage} InputRef={InputRef} />
  </Box>
  

</Container>

  )
}
export default Chat