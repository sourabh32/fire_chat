import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Button, Text, HStack, Image } from '@chakra-ui/react';
import { userContext } from './contexts/UserContext';

function Header() {
  const {user} = useContext(userContext)
  return (
    <Flex fontFamily={"nunito sans"} h={"5vh"} as="nav" align="center" justify="space-between" p={4} bg="blue.500" color="white">
      <Link to="/">
        <Box display="flex" alignItems="center">
          
          <Heading size="md">FireChat</Heading>
        </Box>
      </Link>
      <Link to="/auth">
        {
          user ? (<HStack>
            <Image src={user.photoURL}></Image>
          <Text >{user.displayName.slice(0,5)}...</Text>
          </HStack>):(<Button variant={"link"} colorScheme="whiteAlpha">Sign In</Button>)
        }
      
      </Link>
    </Flex>
  );
}

export default Header;
