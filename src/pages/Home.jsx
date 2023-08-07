import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Button,
  VStack,
  Divider,
  Text,
  Input,
} from "@chakra-ui/react";
import { userContext } from "../contexts/UserContext";
import { chatContext } from "../contexts/ChatContext";
import { addDoc, serverTimestamp } from "firebase/firestore";

function HomePage() {
  const { selectedRoom, setSelectedRoom, messageRef, messages } =
    useContext(chatContext);

  console.log("render");
  const InputRef = useRef("");
  const { user } = useContext(userContext);

  console.log(messages);
  console.log(selectedRoom);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    // Fetch messages for the selected room from your backend
    // Example:
    // const messages = fetchMessagesForRoom(roomId);
    // setMessages(messages);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await addDoc(messageRef, {
      text: InputRef.current.value,
      createdAt: serverTimestamp(),
      user: user.displayName,

      type: "text",
    });
    // InputRef.current.value = "";
  };

  return (
    <Container minHeight="90vh" minW="100vw">
      <Flex p={4} height="100vh">
        <Box width="25%" p={4} borderWidth={1} borderRadius="md">
          <Text fontWeight="bold">Rooms</Text>
          <Button>Add Room</Button>
          <VStack maxH={"70vh"} spacing="5" overflowY={"scroll"}>
            {user &&
              user.chatRooms.map((room) => (
                <Button
                  key={room}
                  onClick={() => handleRoomClick(room)}
                  variant={selectedRoom === room.id ? "solid" : "outline"}
                >
                  {room}
                </Button>
              ))}
          </VStack>
        </Box>
        <Divider orientation="vertical" />
        <Box flex="1" p={4}>
          <VStack spacing={2} align="stretch">
            <Box p={2} borderWidth={1} borderRadius="md" minHeight="300px">
              <h1>{selectedRoom}</h1>
              {/* Display messages here */}
              {messages.length > 0 &&
                messages.map((message) => (
                  <Box key={message.id} p={2} bg="gray.100" borderRadius="md">
                    <Text>{message.user}</Text>
                    <Text>{message.text}</Text>
                  </Box>
                ))}
            </Box>
            <Input
              ref={InputRef}
              //   onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}

export default HomePage;

// const handleSubmit = async  (e) => {
//     e.preventDefault();
//  console.log(message)
//  if(message === "") {
//   const imgUrl = await uploadImageToFirebaseStorage(img)
//   console.log(imgUrl)
//   await addDoc(messageRef,{
//     text:message,
//     createdAt:serverTimestamp(),
//     user:auth.currentUser.displayName,

//    type:"img",
//    imgUrl
//    })
//  };
// await addDoc(messageRef,{
// text:message,
// createdAt:serverTimestamp(),
// user:auth.currentUser.displayName,
// room,
// type:"text"
// })
// setMessage("")
// }
