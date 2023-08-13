import { Box, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { userContext } from "./contexts/UserContext";
import { motion } from "framer-motion";

const AnimatedBox = motion(Box)

const MessageContent = ({ message }) => {
  const {text,type,sender} = message
    const {user} = useContext(userContext)
   
    const isCurrentUser = sender === user.displayName
       
    
    const variants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', damping: 10 } },
    };
  return (
    <AnimatedBox
    initial="hidden"
      animate="visible"
      variants={variants}
    fontFamily={"nunito sans"}
    fontWeight={"bold"}
 p="2"
  bg={isCurrentUser ? "#272829" : "#f5f5f5"}
  color={isCurrentUser ? "#f5f5f5" : "#272829"}
  borderRadius="lg"
  alignSelf={isCurrentUser ? "flex-end" : "flex-start"}
  maxWidth="70%"
  boxShadow="sm"
  mt={2}
  display="flex"
  flexDirection={type === "img" ? "column" : "row"}
  alignItems="center"
  
>
  {type === "img" && (
    <Image alignSelf={isCurrentUser ? "flex-end" : "flex-start"}  src={message.imgUrl} alt="Image" maxWidth="100%" borderRadius="md" />
  )}
  <Text textAlign={"center"} fontSize="0.8rem" flexGrow={1} >
    {text}
  </Text>
</AnimatedBox>


  );
};

export default MessageContent;
