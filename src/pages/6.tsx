import { HeadFC, graphql } from "gatsby";
import * as React from "react";
import { Congrats } from "../common/helpers/Congrats";
import { useImages } from "../common/hooks";
import { IndexPageProps } from "../common/types";
import { NavigationBar, PageBody, PageHeader } from "../features";
/**
 *
 * Congrats! You've completed the refactoring Your website!!! 🎉🥳🎊
 * Now you copy this code and paste it in the `src/pages/index.tsx` file.
 * Then you can delete pages 1-6.
 */
const IndexPage = ({ data }: IndexPageProps) => {
  const images = useImages({ data });
  return (
    <>
      <Congrats />
      <NavigationBar />
      <PageHeader images={images} />
      <PageBody images={images} />
    </>
  );
};

// Provides data to the IndexPage component
export const query = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
