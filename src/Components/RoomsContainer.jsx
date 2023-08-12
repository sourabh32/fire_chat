import { Box, IconButton, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { chatContext } from "../contexts/ChatContext";

import RoomItem from "./RoomItem";
const RoomsContainer = ({ user }) => {
  console.log("room cont");

  return (
    <Stack
      className="rooms-container"
      flexDirection={["column", "row"]}
      spacing={4}
      p={2}
      overflowX="auto"
    >
      {user &&
        user.chatRooms.map((chat, index) => (
          <RoomItem key={index} chat={chat} />
        ))}
    </Stack>
  );
};

export default RoomsContainer;
