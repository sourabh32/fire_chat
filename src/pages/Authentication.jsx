import React, { useContext } from 'react';
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

import {
  Box,
  Button,
  Container,
  Heading,
  
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { logOut, signInWithGoogle } from '../firebase-functions';
import { userContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function AuthenticationPage() {
  const {user}  = useContext(userContext)
const navigate = useNavigate()
  const handleSignInGoogle = async () => {
    await signInWithGoogle()
    toast.success("sign in sucsessfully")
    navigate("/")
  };

  const handleSignOut = async () => {
   await logOut()
   toast.success("logged out sucsessfully")
  };

  return (
    <Container h="90vh" fontFamily={"poppins"} centerContent mt={8}>

    {
      user ? (
        <VStack my={10} spacing={4}>
         
          <Image src={user.photoURL} alt="User Profile" boxSize="100px" rounded="full" />
          <Heading fontSize="lg">{user.displayName}</Heading>
          <Box>{user.email}</Box>
         
          <Button onClick={() => handleSignOut()} colorScheme="gray" size="sm" w="50%">
        Sign Out
      </Button>
        </VStack>
      ):(<Box p="5"  my={10} >
      <Text fontFamily={"bebas neue"} textAlign={"center"}>
      Simplify Your Sign-In: Go Beyond Email & Password with Google and
      GitHub!
    </Text>
    <VStack  my="5" spacing={4}>
      <Button
        onClick={() => handleSignInGoogle()}
      colorScheme="yellow"
        size="md"
        w="70%"
      >
        <AiFillGoogleCircle />
        <Text ml="2">Sign in with Google</Text>
      </Button>
      <Button
        // onClick={() => signInWithGithub()}
        colorScheme="gray"
        size="md"
        w="70%"
      >
        <AiFillGithub />
        <Text ml="2">Sign in with Github</Text>
      </Button>
     
    </VStack>
    </Box>)
    }
    
  </Container>
 
  );
}

export default AuthenticationPage;
