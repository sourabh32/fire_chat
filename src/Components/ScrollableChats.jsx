import { Box, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef } from 'react'
import { chatContext } from '../contexts/ChatContext';
import MessageContent from '../MessageContent';
import sent from "../assets/sent.mp3"
const ScrollableChats = () => {
    const {messages} = useContext(chatContext)
    const playSound = (voice) => {
        let audio = new Audio(voice);
        audio.play();
      };
      
      useEffect(()=>{
  playSound(sent)
      },[messages])
    const messagesEndRef = useRef(null);
    useEffect(() => {
     
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [messages]);
  return (
    
    <VStack p="2" h={"70vh"} className="chat-comp"  overflowY="scroll" spacing={2} >
     
        
       
      
        {messages.length > 0 &&
          messages.map((message) => (
            <MessageContent key={message.id} message={message}/> 
          ))}
          <Box ref={messagesEndRef} />
        
     
    </VStack>
  )
}

export default ScrollableChats