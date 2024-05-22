import {
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import * as React from "react";

export const ImageComponent = ({
  image,
  alt,
  style,
}: {
  image: IGatsbyImageData;
  alt: string;
  style?: React.CSSProperties;
} & GatsbyImageProps) => <GatsbyImage image={image} style={style} alt={alt} />;
