import { Text, TextProps } from "@chakra-ui/react";
import * as React from "react";
type TextVariant = "header" | "body";

const textStyles = {
  header: {
    // color: "white",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Rubik Maze",
  },
  body: {
    // color: "white",
    fontSize: 40,
  },
} as const;
export const TextComponent = ({
  text,
  textVariant = "body",
  ...props
}: {
  text: string;
  textVariant?: TextVariant;
} & TextProps) => {
  const variantStyles = textStyles[textVariant];

  return (
    <Text {...variantStyles} {...props}>
      {text}
    </Text>
  );
};
