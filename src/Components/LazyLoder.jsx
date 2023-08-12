import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const LazyLoder = () => {
  return (
   <Box display="grid" placeItems={"center"} w="full" h="90vh">
<Spinner size={"xl"} />
   </Box>
  )
}

export default LazyLoder