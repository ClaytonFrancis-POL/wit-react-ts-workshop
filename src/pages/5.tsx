import { Flex } from "@chakra-ui/react";
import { HeadFC, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { ImageComponent, TextComponent } from "../common/components";
import { useImages } from "../common/hooks";
import { IndexPageProps } from "../common/types";
import { NavigationBar, PageHeader } from "../features";

const pageBodyData = [
  {
    alt: "Holiday Image",
    title: "My Role",
    body: "Your copy here",
    image: "holiday.jpg",
  },
  {
    alt: "Holiday Image",
    title: "Dream Holiday",
    body: "Your copy here",
    image: "holiday.jpg",
  },
  {
    alt: "Holiday Image",
    title: "Hobbies or Interests",
    body: "Your copy here",
    image: "holiday.jpg",
  },
  {
    alt: "Holiday Image",
    title: "Reading or Watching",
    body: "Your copy here",
    image: "holiday.jpg",
  },
] as const;

const style = {
  borderRadius: 50,
  marginTop: 50,
  marginBottom: 20,
} as const;

const PageBody = ({
  images,
}: {
  images: { [key: string]: IGatsbyImageData };
}) => {
  return (
    <Flex flexDir={"column"} alignItems={"center"}>
      {/* Map data or create individual components from above data here */}
      <Flex
        as="div"
        flexDir={"column"}
        // key={title}
        px={"10vw"}
        py={"2rem"}
        // id={title.replace(/ /g, "-").toLowerCase()}
      >
        <TextComponent
          alignSelf={"center"}
          textVariant={
            undefined
            //maybe we need to define this prop?
          }
          text={
            "title here"
            // You need to pass the title here
          }
        />
        <TextComponent
          text={
            "body here"
            // You need to pass the body here
          }
        />
        <ImageComponent
          image={
            undefined
            // Image goes here:
            // images[image]
          }
          alt={
            ""
            // Alt text goes here
          }
          style={
            undefined
            //maybe this component needs styling?
          }
        />
      </Flex>
    </Flex>
  );
};
const IndexPage = ({ data }: IndexPageProps) => {
  const images = useImages({ data });
  return (
    <>
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
