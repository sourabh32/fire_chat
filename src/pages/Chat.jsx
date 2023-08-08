import { Box, Button, Input, VStack ,Text, Container, Flex} from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import { chatContext } from '../contexts/ChatContext'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { userContext } from '../contexts/UserContext'
import MessageContent from '../MessageContent'

const Chat = () => {
    const {selectedRoom,messageRef,messages} = useContext(chatContext)
    const {user} = useContext(userContext)
    console.log("render");
    const InputRef = useRef("");
    const messagesEndRef = useRef(null);
  
    useEffect(() => {
      // Scroll and focus on the new message whenever messages change
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]);
  
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
    <Container maxW={"container.lg"} h="100vh" display="flex" flexDirection="column">
  <Box flex="1" p={4} overflow="hidden" position="relative">
    <VStack h="80vh" overflowY="scroll" spacing={2} >
      <Box p={2} minWidth="300px" maxWidth="600px" mx="auto">
        <Text fontSize="xl" fontWeight="bold" mb={4}>{selectedRoom}</Text>
        {/* Display messages here */}
        <VStack spacing={2}>
        {messages.length > 0 &&
          messages.map((message) => (
            <MessageContent key={message.id} text={message.text} userName={message.user}  /> 
            // <Box key={message.id} p={2} bg="gray.100" borderRadius="md">
            //   <Text fontSize="sm" fontWeight="bold" mb={1}>{message.user}</Text>
            //   <Text fontSize="md">{message.text}</Text>
            // </Box>
          ))}
          <Box ref={messagesEndRef} />
          </VStack> 
      </Box>
    </VStack>
  </Box>
  
  <Box p={2} borderTopWidth={1} borderColor="gray.300">
    <Flex align="center">
      <Input
        ref={InputRef}
        flex="1"
        py={2}
        px={4}
        rounded="full"
        bg="gray.100"
        placeholder="Type your message..."
        _focus={{ bg: 'white' }}
      />
      <Button
        ml={2}
        px={4}
        py={2}
        rounded="full"
        colorScheme="teal"
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  </Box>
</Container>

  )
}
export default Chat