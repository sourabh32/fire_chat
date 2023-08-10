import React, { useContext, useState } from 'react';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Input, Stack, IconButton, Spinner } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';


import { userContext } from '../contexts/UserContext';
import { uploadImage } from '../firebase-functions';
import { chatContext } from '../contexts/ChatContext';

function ImgBtn({message}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading,setUploading] = useState(false)
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
const {user} = useContext(userContext)
const {messageRef} = useContext(chatContext)
  const handleSendImage = async () =>{
    setUploading(true)
    console.log(selectedImage)
    await uploadImage(selectedImage,user,message,messageRef)
    setUploading(false)
    setSelectedImage(null)
    setIsPopoverOpen(false)
  }

  return (
    <Popover placement='top'  isOpen={isPopoverOpen} onOpen={() => setIsPopoverOpen(true)} onClose={() => setIsPopoverOpen(false)}>
      <PopoverTrigger>
      <IconButton target='_blank' borderRadius={"full"}  aria-label="Facebook" icon={<FaImage />} size="sm" variant="outline" colorScheme="blue" />
        
      </PopoverTrigger>
      <PopoverContent maxW={{ base: '250px', md: '300px' }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Add Image</PopoverHeader>
        <PopoverBody>
          <Stack spacing={2}>
            <Input type="file" accept="image/*" onChange={handleImageSelect} />

            { uploading ? (<Spinner />):( selectedImage && (
              <Button colorScheme="teal" onClick={handleSendImage}>Send</Button>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ImgBtn;
