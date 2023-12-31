import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Button, Text, HStack, Image } from '@chakra-ui/react';
import { userContext } from './contexts/UserContext';
import {BsFire} from "react-icons/bs"
function Header() {
  const {user} = useContext(userContext)
  return (
    <Flex
    fontFamily="bebas neue"
    h="5vh"
    as="nav"
    align="center"
    justify="space-between"
    p={4}
    color="blackAlpha.800"
    position="fixed" 
    top={0}
    left={0}
    right={0}
    zIndex={1000} 
  >
    <Link to="/">
      
        <HStack color={"#F94C10"} alignContent={"center"} >
        <Heading  fontFamily={ "bebas neue"} size="md">FireChat </Heading>
        <BsFire /> 
        </HStack>
       
    
    </Link>
    <Link to="/auth">
      {user ? (
        <HStack>
          <Image w={5} h={5} borderRadius="full" src={user.photoURL} />
          <Text>{user.displayName.slice(0, 5)}...</Text>
        </HStack>
      ) : (
        <Button variant="link" colorScheme="blackAlpha.500">
          Sign In
        </Button>
      )}
    </Link>
  </Flex>
  );
}

export default Header;
