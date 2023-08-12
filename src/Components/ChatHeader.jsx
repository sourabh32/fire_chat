import React, { useContext } from 'react'
import {GrPrevious} from "react-icons/gr"

import ShareIcon from './ShareIcon'
import { chatContext } from '../contexts/ChatContext'
import { HStack, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const ChatHeader = () => {
    const {selectedRoom} = useContext(chatContext)
  return (
    <HStack alignItems={"center"} justifyContent={"space-between"}>
    <Link to="/"><GrPrevious /></Link>
    <Heading textAlign={"end"} fontSize="xl" fontFamily={"nunito sans"} fontWeight="bold" >{selectedRoom}</Heading>
   <ShareIcon chat={selectedRoom} />
    </HStack>
  )
}

export default ChatHeader