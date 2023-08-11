import React, { useContext } from 'react';
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

import {
  Box,
  Button,
  Container,
  Heading,
  Avatar,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { logOut, signInWithGoogle } from '../firebase-functions';
import { userContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function AuthenticationPage() {
  const {user}  = useContext(userContext)
const navigate = useNavigate()
  const handleSignInGoogle = async () => {
    await signInWithGoogle()
    navigate("/")
  };

  const handleSignOut = async () => {
   await logOut()
  };

  return (
    <Container h="90vh" fontFamily={"poppins"} centerContent mt={8}>

    {
      user ? (
        <VStack spacing={4}>
         
          <Image src={user.photoURL} alt="User Profile" boxSize="100px" rounded="full" />
          <Heading fontSize="lg">{user.displayName}</Heading>
          <Box>{user.email}</Box>
         
          <Button onClick={() => handleSignOut()} colorScheme="blue" size="sm" w="50%">
        Sign Out
      </Button>
        </VStack>
      ):(<>
      <Text fontFamily={"bebas neue"} textAlign={"center"}>
      Simplify Your Sign-In: Go Beyond Email & Password with Google and
      GitHub!
    </Text>
    <VStack my="5" spacing={4}>
      <Button
        onClick={() => handleSignInGoogle()}
      colorScheme="blue"
        size="md"
        w="100%"
      >
        <AiFillGoogleCircle />
        <Text ml="2">Sign in with Google</Text>
      </Button>
      <Button
        // onClick={() => signInWithGithub()}
        colorScheme="gray"
        size="md"
        w="100%"
      >
        <AiFillGithub />
        <Text ml="2">Sign in with Github</Text>
      </Button>
     
    </VStack>
    </>)
    }
    
  </Container>
    // <Container maxW="container.sm">
    //   <Box p={8} borderWidth={1} borderRadius="lg">
    //     <VStack spacing={4}>
    //       <Heading as="h1" size="lg">
    //         Authentication Page
    //       </Heading>
    //       {user ? (
    //         <Box>
    //           <Avatar size="xl" src={user.photoURL} alt="User Avatar" />
    //           <Text>{user.displayName}</Text>
    //           <Text>{user.email}</Text>
    //           <Button onClick={handleSignOut} colorScheme="red">
    //             Sign Out
    //           </Button>
    //         </Box>
    //       ) : (
    //         <Button onClick={handleSignIn} colorScheme="blue">
    //           Sign In with Google
    //         </Button>
    //       )}
    //     </VStack>
    //   </Box>
    // </Container>
  );
}

export default AuthenticationPage;
