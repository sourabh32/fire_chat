import { Box, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { userContext } from "./contexts/UserContext";
import sent from "./assets/sent.mp3"
import recived from "./assets/recived.mp3"
import { chatContext } from "./contexts/ChatContext";
const MessageContent = ({ message }) => {
  const {text,type,sender} = message
    const {user} = useContext(userContext)
   const {messages} = useContext(chatContext)
    const isCurrentUser = sender === user.displayName
       
    const playSound = (voice) => {
        let audio = new Audio(voice);
        audio.play();
      };
      
      useEffect(()=>{
  playSound(sent)
      },[isCurrentUser])
  
  return (
    <Box
    fontFamily={"nunito sans"}
    fontWeight={"bold"}
 p="2"
  bg={isCurrentUser ? "teal.400" : "gray.100"}
  borderRadius="lg"
  alignSelf={isCurrentUser ? "flex-end" : "flex-start"}
  maxWidth="70%"
  boxShadow="sm"
  mt={2}
  display="flex"
  flexDirection={type === "img" ? "column" : "row"}
  alignItems="center"
  color={isCurrentUser ? "white" : "gray.800"}
>
  {type === "img" && (
    <Image  src={message.imgUrl} alt="Image" maxWidth="100%" borderRadius="md" />
  )}
  <Text textAlign={"center"} fontSize="0.8rem" flexGrow={1} >
    {text}
  </Text>
</Box>


  );
};

export default MessageContent;
