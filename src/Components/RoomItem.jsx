import React, { useContext } from 'react'

import { chatContext } from '../contexts/ChatContext'
import { useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import ShareIcon from './ShareIcon'


const RoomItem = ({chat}) => {

    const {setSelectedRoom}  = useContext(chatContext)
    const navigate = useNavigate()
    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        navigate(`/room/${room}`)
        
      };
  return (
    <Box
   onClick={() => handleRoomClick(chat)}
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
  
   color={'white'}
   transition={"0.5s"}
   bgColor='#252B48'
   _hover={{ bgColor: '#61677A', boxShadow: 'lg' }} 
 >
    <ShareIcon chat={chat} />
    {chat.toUpperCase()}
 </Box>
  )
}

export default RoomItem