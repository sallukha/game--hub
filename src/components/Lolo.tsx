import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
 
const Lolo: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md'); // Typed with available size options

  const handleSizeClick = (newSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full') => {
    setSize(newSize);
    onOpen();
  };

  const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'> = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Modal`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Lolo;
