import React, { useContext } from "react";
import { Box, Container, VStack, Text, Heading } from "@chakra-ui/react";
import { userContext } from "../contexts/UserContext";
import CreateRoom from "../Components/CreateRoom";
import RoomsContainer from "../Components/RoomsContainer";

import MyHeading from "../Components/MyHeading";

function HomePage() {
  const { user } = useContext(userContext);

  return (
    <Container fontFamily={"nunito sans"} p="10" maxW="container.lg">
     <MyHeading text={"Experience Lightning-Fast Chats: 50% Quicker, 100% Seamless"} />
        
      
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        w="100%"
        height={"30vh"}
        border="2px dashed #ccc"
        borderRadius="md"
      >
        <MyHeading text={"Add Room"} />
        
        <CreateRoom user={user} />
      </VStack>
      <Box
        my="10"
        p="5"
        color="white"
        w="100%"
        border="2px solid #ccc"
        borderRadius="md"
        bg={"#445069"}
      >
         <MyHeading text={"Saved Room's"} />
        {user ? (
          <RoomsContainer user={user} />
        ) : (
          <Text textAlign={"center"}>Sign In to Save Room's!</Text>
        )}
      </Box>
    </Container>
  );
}

export default HomePage;
