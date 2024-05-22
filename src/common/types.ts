import { PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export type ImageProps = {
  allFile: {
    nodes: Array<{
      relativePath: string;
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
    }>;
  };
};

export interface IndexPageProps extends PageProps<ImageProps> {}
