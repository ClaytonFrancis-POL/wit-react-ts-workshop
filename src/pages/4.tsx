import { Box, Flex, Spacer } from "@chakra-ui/react";
import { HeadFC, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import {
  BlurComponent,
  ImageBackground,
  ImageComponent,
  TextComponent,
} from "../common/components";
import { useImages } from "../common/hooks";
import { IndexPageProps } from "../common/types";
import { NavigationBar } from "../features";

interface PageHeaderProps {
  images: { [key: string]: IGatsbyImageData };
}
const pageHeaderData = {
  name: "Name Here",
  jobTitle: "job Title Here",
  socialMedia: "https://linkedin.com", // Add your LinkedIn URL here
} as const;

const displayPicStyle = {
  width: 225,
  height: 225,
  borderRadius: "50%",
  border: "5px solid white",
};

const socialIconStyles = {
  borderRadius: 50,
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.8)",
};

export const PageHeader = ({ images }: PageHeaderProps) => {
  const data = pageHeaderData;
  return (
    <Box as="div" style={{ display: "grid" }}>
      <ImageBackground alt="header image" image={images["art.jpg"]}>
        <BlurComponent>
          <Flex flexDir={"row"}>
            <ImageComponent
              image={images["dp.jpg"]}
              alt="Profile Picture"
              style={
                undefined
                //maybe this component needs styling?
              }
            />
            <Spacer w={5} />
            <Box>
              <TextComponent
                text={"name goes here"}
                textVariant={
                  undefined
                  // maybe this prop needs a variant?
                }
              />
              <TextComponent
                text={"jobTitle goes here"}
                textVariant={
                  undefined
                  // maybe this prop needs a variant?
                }
              />
              <SocialIcon
                style={
                  undefined
                  // maybe this component needs styling?
                }
                url={data.socialMedia}
                network="linkedin"
                bgColor="transparent"
                fgColor="rgba(255, 255, 255, 0.8)"
              />
            </Box>
          </Flex>
        </BlurComponent>
      </ImageBackground>
    </Box>
  );
};

const IndexPage = ({ data }: IndexPageProps) => {
  const images = useImages({ data });
  return (
    <>
      <NavigationBar />
      <PageHeader />
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
