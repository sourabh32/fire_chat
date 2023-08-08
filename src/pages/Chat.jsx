import { Box, Button, Input, VStack ,Text} from '@chakra-ui/react'
import React, { useContext, useRef } from 'react'
import { chatContext } from '../contexts/ChatContext'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { userContext } from '../contexts/UserContext'

const Chat = ({messages}) => {
    const {selectedRoom,messageRef} = useContext(chatContext)
    const {user} = useContext(userContext)
    console.log("render");
    const InputRef = useRef("");
    const handleSendMessage = async (e) => {
        e.preventDefault();
        await addDoc(messageRef, {
          text: InputRef.current.value,
          createdAt: serverTimestamp(),
          user: user.displayName,
    
          type: "text",
        });
        InputRef.current.value = "";
      };
  return (
    <Box w="50%" p={4}>
    <VStack spacing={2} align="stretch">
      <Box p={2} borderWidth={1} borderRadius="md" minHeight="300px">
        <h1>{selectedRoom}</h1>
        {/* Display messages here */}
        {messages.length > 0 &&
          messages.map((message) => (
            <Box key={message.id} p={2} bg="gray.100" borderRadius="md">
              <Text>{message.user}</Text>
              <Text>{message.text}</Text>
            </Box>
          ))}
      </Box>
      <Input
        ref={InputRef}
       
        placeholder="Type your message..."
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </VStack>
  </Box>
  )
}

const MemoizedChat = React.memo(Chat)
export default MemoizedChat