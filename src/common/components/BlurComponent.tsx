import { Box, useColorMode } from "@chakra-ui/react";
import * as React from "react";

export const BlurComponent = ({ children }: React.PropsWithChildren) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="div"
      height={300}
      backgroundColor={
        colorMode === "light"
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(0, 0, 0, 0.3)"
      }
      backdropFilter="blur(6px)"
      aspectRatio={3 / 1}
      width="80vw"
      borderLeftRadius={1000}
      borderTopRightRadius={2000}
      padding={50}
      alignItems={"center"}
      display={"flex"}
    >
      {children}
    </Box>
  );
};
