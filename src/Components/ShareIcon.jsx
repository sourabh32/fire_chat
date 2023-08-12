import { IconButton } from '@chakra-ui/react'
import React from 'react'
import {BsShare} from "react-icons/bs"
const ShareIcon = ({chat}) => {
    const handleShareClick = (event,chatID) => {
        event.stopPropagation();
        
        const whatsappMessage = 'Join our chat room. Room ID : ' + chatID ;
    
        
        window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`);
      };
  return (
    <IconButton
    alignSelf={"flex-end"}
    icon={<BsShare />}
    onClick={(event) => handleShareClick(event, chat)}
    mt={2}
    size={"sm"}
    aria-label="Share via WhatsApp"
    colorScheme="gray"
  />
  )
}

export default ShareIcon