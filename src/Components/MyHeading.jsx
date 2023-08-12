import { Heading } from '@chakra-ui/react'
import React from 'react'

const MyHeading = ({text}) => {
  return (
    <Heading fontFamily={"bebas neue"} textAlign={"center"} my="4" size="md">{text}</Heading>
  )
}

export default MyHeading