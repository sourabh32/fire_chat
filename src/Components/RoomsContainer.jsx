import { Box, IconButton, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { chatContext } from '../contexts/ChatContext'
import {BsShare} from "react-icons/bs"
const RoomsContainer = ({user}) => {
    const {setSelectedRoom}  = useContext(chatContext)
    const navigate = useNavigate()
    console.log("room cont")
    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        navigate(`/room/${room}`)
        
      };

      const handleShareClick = (event,chatID) => {
        event.stopPropagation();
        
        const whatsappMessage = 'Join our chat room. Room ID : ' + chatID ;
    
        
        window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`);
      };
  return (
    <Stack  flexDirection={["column","row"]} spacing={4} p={2} overflowX="auto">
      { user && user.chatRooms.map((chat, index) => (
   
   <Box
   onClick={() => handleRoomClick(chat)}
   key={index}
   minH={'150px'}
   minW={'150px'}
   display={'flex'}
   flexDirection={"column"}
   justifyContent={'center'}
   alignItems={"space-between"}
   p={4}
   gap="5"
   cursor={'pointer'}
  borderRadius={"lg"}
   boxShadow='md'
   color={'white'}
   transition={"0.5s"}
   bgColor='#252B48'
   _hover={{ bgColor: '#61677A', boxShadow: 'lg' }} // Hover effect
 >
    <IconButton
    alignSelf={"flex-end"}
    icon={<BsShare />}
    onClick={(event) => handleShareClick(event, chat)}
    mt={2}
    size={"sm"}
    aria-label="Share via WhatsApp"
    colorScheme="gray"
  />

   {chat.toUpperCase()}
 </Box>

       
      ))}
    </Stack>
  )
}

export default RoomsContainer