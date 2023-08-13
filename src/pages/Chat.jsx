import { Box,  Container, Spinner, } from '@chakra-ui/react'
import React, { Suspense, useContext } from 'react'
import { chatContext } from '../contexts/ChatContext'


import MyInput from '../Components/MyInput'
import { Navigate } from 'react-router-dom'
const ScrollableChats = React.lazy(()=> import("../Components/ScrollableChats"))

import ChatHeader from '../Components/ChatHeader'
const Chat = () => {
    const {selectedRoom} = useContext(chatContext)
    
    
  

    
  
   
      if(selectedRoom =="undefined"){
      return  <Navigate to="/auth" />
      }
  return (
    <Container  my="5" maxW={"container.lg"}  >
  <Box borderRadius={"lg"} h="full" bg={"#D8D9DA"} w={["100%","60%"]} mx="auto" flex="1" p={4} overflow="hidden" position="relative">
  <ChatHeader />
  <Suspense fallback={<Spinner />}>
      <ScrollableChats />
      </Suspense>
     <MyInput   />
  </Box>
  

</Container>

  )
}
export default Chat