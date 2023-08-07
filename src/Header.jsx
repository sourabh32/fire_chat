import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

function Header() {
  return (
    <Flex as="nav" align="center" justify="space-between" p={4} bg="blue.500" color="white">
      <Link to="/">
        <Box display="flex" alignItems="center">
          {/* Replace the logo with your own */}
          <Heading size="md">FireChat</Heading>
        </Box>
      </Link>
      <Link to="/auth">
        <Button colorScheme="whiteAlpha">Authenticate</Button>
      </Link>
    </Flex>
  );
}

export default Header;
