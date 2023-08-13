import { useNavigate } from "react-router-dom";
import { handleAddRoom } from "../firebase-functions";

import { useContext, useRef } from "react";
import { chatContext } from "../contexts/ChatContext";
import {
    
    Input,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
   
    IconButton,
    VStack,
    
  } from '@chakra-ui/react';
import {IoMdAddCircleOutline} from "react-icons/io"
import { toast } from "react-hot-toast";


const CreateRoom = ({user}) =>{ 
    
    const { setSelectedRoom } =
    useContext(chatContext);
    const InputRef = useRef("")
    const navigate = useNavigate()
    const handleRoomSubmit = async () =>{
      if(user){
        const val = InputRef.current.value
        if(val !== ""){
       setSelectedRoom(val)
       navigate(`/room/${val}`)
       toast.success(`${val} room joined!`)
        await handleAddRoom(val,user.uid)
        }
      }
      else{
        navigate("/auth")
      }
      }
    return(
     
        
        <Popover  placement="bottom">
          <PopoverTrigger>
          <IconButton target='_blank'  aria-label="Facebook" icon={<IoMdAddCircleOutline />} size="md" variant="outline" color="blackAlpha.800" />
          </PopoverTrigger>
          <PopoverContent maxW={{ base: '250px', md: '300px' }} p={4} bg="white">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader textAlign={"center"} fontWeight="bold">Create Room</PopoverHeader>
            <PopoverBody>
              
             <VStack alignItems={"center"} justifyContent={"center"} w="100%">
                  <Input
                  ref={InputRef}
                    id="room-name"
                    placeholder="Enter room name"
                    size="md"
                    mb={2}
                  />
                
                <Button  onClick={handleRoomSubmit} colorScheme="gray" size="sm">
                  Enter Room
                </Button>
                </VStack>
            
            </PopoverBody>
          </PopoverContent>
        </Popover>
    
  )};
export default CreateRoom ;  










// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import {
//   Flex,
//   Box,
//   Text,
//   Input,
//   Button,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverArrow,
//   PopoverCloseButton,
//   PopoverHeader,
//   PopoverBody,
// } from '@chakra-ui/react';

// const RoomSelection = ({ user, selectedRoom, handleRoomClick }) => (
//   <Box w="20%" bg="gray.800" color="white">
//     {/* ... Room selection content from previous example ... */}
//     {/* "+" button to open the create room popover */}
//     <Popover placement="right">
//       <PopoverTrigger>
//         <Button
//           w="100%"
//           mb={4}
//           leftIcon={<AddIcon />}
//           colorScheme="teal"
//           size="md"
//         >
//           Create Room
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent p={4} bg="white">
//         <PopoverArrow />
//         <PopoverCloseButton />
//         <PopoverHeader fontWeight="bold">Create Room</PopoverHeader>
//         <PopoverBody>
//           {/* Room creation form */}
//           <form onSubmit={handleCreateRoom}>
//             <FormControl>
//               <Input
//                 id="room-name"
//                 placeholder="Enter room name"
//                 size="md"
//                 mb={2}
//               />
//             </FormControl>
//             <Button type="submit" colorScheme="teal" size="sm">
//               Enter Room
//             </Button>
//           </form>
//         </PopoverBody>
//       </PopoverContent>
//     </Popover>
//   </Box>
// );

// // ... other components and routing code ...

// export default App;
