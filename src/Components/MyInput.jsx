import { Box, Button, HStack, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import {AiFillMessage} from "react-icons/ai"
import ImgBtn from './ImgButton'
const MyInput = ({handleSendMessage,InputRef}) => {
    
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