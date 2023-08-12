import { Box, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { userContext } from "./contexts/UserContext";



const MessageContent = ({ message }) => {
  const {text,type,sender} = message
    const {user} = useContext(userContext)
   
    const isCurrentUser = sender === user.displayName
       
    
  
  return (
    <Box
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
</Box>


  );
};

export default MessageContent;
