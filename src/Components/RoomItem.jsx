import React, { useContext } from 'react'

import { chatContext } from '../contexts/ChatContext'
import { useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import ShareIcon from './ShareIcon'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
const AnimatedBox = motion(Box)
 
const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', damping: 10 } },
};
const RoomItem = ({chat}) => {

    const {setSelectedRoom}  = useContext(chatContext)
    const navigate = useNavigate()
    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        navigate(`/room/${room}`)
        toast.success(`${room} room joined!`)
        
      };
  return (
    <AnimatedBox
    initial="hidden"
      animate="visible"
      variants={variants}
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
 </AnimatedBox>
  )
}

export default RoomItem