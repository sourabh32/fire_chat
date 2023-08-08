import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";

const MessageContent = ({ text,userName }) => {
    const {user} = useContext(userContext)
    const isCurrentUser = userName === user.displayName
  return (
    <Box
  w="fit-content"
  p={2}
  bg={isCurrentUser ? "teal.400" : "gray.100"}
  borderRadius="lg"
  alignSelf={isCurrentUser ? "flex-end" : "flex-start"}
  maxWidth="70%"
  boxShadow="sm"
  position="relative"
  _after={{
    content: '""',
    position: "absolute",
    bottom: 0,
    width: "10px",
    height: "10px",
    bg: isCurrentUser ? "teal.400" : "gray.100",
    transform: "translate(-50%, 50%) rotate(45deg)",
  }}
>
  <Text fontSize="sm" fontWeight="semibold" color={isCurrentUser ? "white" : "gray.700"} mb={1}>
    {isCurrentUser ? "Me" : userName}
  </Text>
  <Text fontSize="md" color={isCurrentUser ? "white" : "gray.800"}>
    {text}
  </Text>
</Box>

  );
};

export default MessageContent;
