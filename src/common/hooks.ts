import { IGatsbyImageData } from "gatsby-plugin-image";
import { useMemo, useRef } from "react";
import { ImageProps } from "./types";

interface UseImages {
  data: ImageProps;
}
export const useImages = ({ data }: UseImages) =>
  useMemo(
    () =>
      data.allFile.nodes.reduce(
        (acc, node) => {
          acc[node.relativePath] = node.childImageSharp.gatsbyImageData;
          return acc;
        },
        {} as {
          [key: string]: IGatsbyImageData;
        },
      ),
    [data.allFile.nodes],
  );

export const useWindowSize = () => {
  const { width, height } = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  }).current;

  return { width, height };
};
