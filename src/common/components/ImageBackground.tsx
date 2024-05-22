import { Box } from "@chakra-ui/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export const ImageBackground = ({
  image,
  alt,
  children,
}: React.PropsWithChildren<{
  image: IGatsbyImageData;
  alt: string;
}>) => (
  <Box as="div" style={{ display: "grid" }}>
    <GatsbyImage
      image={image}
      style={{
        gridArea: "1/1",
        // maxHeight: 700,
        height: "70vh",
      }}
      alt={alt}
    />
    <Box
      as="div"
      style={{
        gridArea: "1/1",
        position: "relative",
        placeItems: "center",
        display: "grid",
      }}
    >
      {children}
    </Box>
  </Box>
);
