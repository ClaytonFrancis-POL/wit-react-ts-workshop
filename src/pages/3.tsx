import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import type { HeadFC } from "gatsby";
import * as React from "react";

const navHeaderData = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "My Role",
    href: "#my-role",
  },
  {
    name: "Dream Holiday",
    href: "#dream-holiday",
  },
  {
    name: "Hobbies or Interests",
    href: "#hobbies-or-interests",
  },
  {
    name: "Reading or Watching",
    href: "#reading-or-watching",
  },
] as const;
export const NavigationBar = () => {
  const data = navHeaderData;
  const Icon = useColorModeValue(MoonIcon, SunIcon);
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      backgroundColor={
        colorMode === "light"
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(0, 0, 0, 0.85)"
      }
      backdropFilter="blur(6px)"
    >
      <Flex as="nav" align="center" justify="space-around" padding="1.5rem">
        {/* Map buttons or create individual ones from above data here */}
        <Button
          onClick={
            undefined
            // You need some way to toggle the color mode
          }
        >
          <Icon />
        </Button>
      </Flex>
    </Box>
  );
};

const IndexPage = () => {
  return <NavigationBar />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
