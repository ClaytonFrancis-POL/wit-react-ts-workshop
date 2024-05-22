import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { TextComponent } from "../components";
import { useWindowSize } from "../hooks";

export const Congrats = () => {
  const { width, height } = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recycle, setRecycle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRecycle(false);
      onOpen();
    }, 7000);
  }, []);
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Congrats!!! 🥳🥳🥳</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextComponent
              fontSize={"20"}
              text={"You've completed the refactoring Your website!!! 🎉🥳🎊"}
            />
            <TextComponent
              fontSize={"20"}
              text={
                "Now you copy the code from src/pages/6.tsx and paste it in the src/pages/index.tsx file. Then you can delete pages 1-6."
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Confetti
        numberOfPieces={500}
        width={width}
        height={height}
        recycle={recycle}
      />
    </>
  );
};
