// Example Component: TextComponent

import { Box } from "@chakra-ui/react";
import { HeadFC } from "gatsby";
import * as React from "react";

type TextVariant = "header" | "body";

const textStyles = {
  header: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Rubik Maze",
  },
  body: { fontSize: 40 },
} as const;
const TextComponent = ({
  text,
  textVariant = "body",
}: {
  text: string;
  textVariant?: TextVariant;
}) => {
  return <></>;
};

const IndexPage = () => {
  return <Box as="main">{/* Add TextComponent with above props here */}</Box>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
