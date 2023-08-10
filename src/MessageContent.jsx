import { Box, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";

const MessageContent = ({ message }) => {
  const {text,type,displayName} = message
    const {user} = useContext(userContext)
    const isCurrentUser = displayName === user.displayName
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
