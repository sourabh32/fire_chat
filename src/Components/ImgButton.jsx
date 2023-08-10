import React, { useContext, useState } from 'react';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Input, Stack, IconButton } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import { uploadImageToFirebaseStorage } from '../firebase-config';
import { chatContext } from '../contexts/ChatContext';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { userContext } from '../contexts/UserContext';

function ImgBtn({message}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
const {messageRef} = useContext(chatContext)
const {user} = useContext(userContext)
  const handleSendImage = async () => {
    const imgUrl = await uploadImageToFirebaseStorage(selectedImage)
      console.log(imgUrl)
      await addDoc(messageRef,{
        text:message,
        createdAt:serverTimestamp(),
        user:user.displayName,
        
       type:"img",
       imgUrl
       })
    setIsPopoverOpen(false);
  };

  return (
    <Popover isOpen={isPopoverOpen} onOpen={() => setIsPopoverOpen(true)} onClose={() => setIsPopoverOpen(false)}>
      <PopoverTrigger>
      <IconButton target='_blank' borderRadius={"full"}  aria-label="Facebook" icon={<FaImage />} size="sm" variant="outline" colorScheme="blue" />
        
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Add Image</PopoverHeader>
        <PopoverBody>
          <Stack spacing={2}>
            <Input type="file" accept="image/*" onChange={handleImageSelect} />
            {selectedImage && (
              <Button colorScheme="teal" onClick={handleSendImage}>Send</Button>
            )}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ImgBtn;
