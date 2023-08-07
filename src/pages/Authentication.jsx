import React, { useContext } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Avatar,
  Text,
  VStack,
} from '@chakra-ui/react';
import { logOut, signInWithGoogle } from '../firebase-functions';
import { userContext } from '../contexts/UserContext';

function AuthenticationPage() {
  const {user}  = useContext(userContext)

  const handleSignIn = async () => {
    await signInWithGoogle()
  };

  const handleSignOut = async () => {
   await logOut()
  };

  return (
    <Container maxW="container.sm">
      <Box p={8} borderWidth={1} borderRadius="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">
            Authentication Page
          </Heading>
          {user ? (
            <Box>
              <Avatar size="xl" src={user.photoURL} alt="User Avatar" />
              <Text>{user.displayName}</Text>
              <Text>{user.email}</Text>
              <Button onClick={handleSignOut} colorScheme="red">
                Sign Out
              </Button>
            </Box>
          ) : (
            <Button onClick={handleSignIn} colorScheme="blue">
              Sign In with Google
            </Button>
          )}
        </VStack>
      </Box>
    </Container>
  );
}

export default AuthenticationPage;
