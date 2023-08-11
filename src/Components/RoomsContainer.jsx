import { Box, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { chatContext } from '../contexts/ChatContext'

const RoomsContainer = ({user}) => {
    const {setSelectedRoom}  = useContext(chatContext)
    const navigate = useNavigate()
    console.log("room cont")
    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        navigate(`/room/${room}`)
        
      };
  return (
    <Stack flexDirection={["column","row"]} spacing={4} p={2} overflowX="auto">
      { user && user.chatRooms.map((chat, index) => (
   
   <Box
   onClick={() => handleRoomClick(chat)}
   key={index}
   minH={'150px'}
   minW={'150px'}
   display={'flex'}
   justifyContent={'center'}
   alignItems={'center'}
   p={4}
   cursor={'pointer'}
   borderWidth='1px'
   borderRadius='lg'
   boxShadow='md'
   color={'white'}
   bgColor='#F4D160'
   _hover={{ bgColor: '#FFBB52', boxShadow: 'lg' }} // Hover effect
 >
   {chat.toUpperCase()}
 </Box>

       
      ))}
    </Stack>
  )
}

export default RoomsContainer