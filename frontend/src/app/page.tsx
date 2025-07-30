import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import { seo, data as rawData } from "../config";

// Define the type for items in the data array
type DataItem = {
  image: string;
  title: string;
  description: string;
};

// Explicitly type the data array
const data: DataItem[] = rawData as DataItem[];

// Helper function returns true for odd numbers
const isOdd = (num: number) => num % 2 === 1;

export default function Home() {
  const color = useColorModeValue("telegram.500", "telegram.400");
  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: 350,
              height: 350,
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <Box
        as="section"
        display="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <NextImage
          src="/bighead.svg"
          width={350}
          height={350}
          alt="avatar bigheads"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
            Hi, I'm Elvis and welcome to my website
          </Heading>
          {/* Emoji outside Heading */}
          <Box as="span" role="img" aria-label="hand" fontSize="2rem" ml="2">
            👋🏻
          </Box>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700" mt={2}>
            <Text as="span" color={color} display="inline">
              Building
            </Text>{" "}
            digital products, Brands, And experience.
          </Heading>
          <Text py={4} fontSize="lg">
            A{" "}
            <Box as="span" fontWeight={600} display="inline">
              web designer
            </Box>{" "}
            and{" "}
            <Box as="span" fontWeight={600} display="inline">
              front-end web developer
            </Box>{" "}
            based in the US, I specialize in UI/UX design, Responsive web
            design, And accessibility.
          </Text>
          <Button colorScheme="blue" variant="ghost" size="lg">
            Get in touch
          </Button>
        </Box>
      </Box>

      <Box
        as="section"
        display="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {data.map((item, index) => (
          <Box
            display={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) ? "row-reverse" : "row" }}
            key={index}
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) ? "10" : "0" }}
              pr={{ lg: isOdd(index) ? "0" : "10" }}
            >
              <NextImage
                src={item.image}
                width={500}
                height={500}
                alt={item.title}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>
            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
