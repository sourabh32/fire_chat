import { Box, Button, Input, VStack ,Text, Container, Flex, Heading} from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import { chatContext } from '../contexts/ChatContext'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { userContext } from '../contexts/UserContext'
import MessageContent from '../MessageContent'
import MyInput from '../Components/MyInput'
import { Navigate } from 'react-router-dom'

const Chat = () => {
    const {selectedRoom,messageRef,messages} = useContext(chatContext)
    const {user} = useContext(userContext)
    console.log("render");
    const InputRef = useRef("");
    const messagesEndRef = useRef(null);
    

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
  <Box borderRadius={"lg"} h="full" bg={"gray.300"} w={["100%","60%"]} mx="auto" flex="1" p={4} overflow="hidden" position="relative">
  <Heading textAlign={"end"} fontSize="xl" fontFamily={"poppins"} fontWeight="bold" mb={4}>{selectedRoom}</Heading>
    <VStack p="2" maxH={"70vh"} className="chat-comp"  overflowY="scroll" spacing={2} >
     
        
       
      
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