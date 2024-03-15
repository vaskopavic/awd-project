import {
  Stack,
  VStack,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const Article = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap="4"
        bgGradient="linear(brand.background, brand.foreground)"
        rounded="xl"
        p="6"
        mb="8"
      >
        <VStack
          flex="1"
          alignItems={{ base: "center", md: "start" }}
          w={{ base: "full", md: "500px" }}
        >
          <Image
            src="hero_promo_1.jpg"
            alt="Article offer #1"
            objectFit="cover"
            w="100%"
            h="100%"
            maxH="250px"
            rounded="lg"
          />
        </VStack>
        <VStack
          flex="1"
          p="4"
          pe={{ base: "none", md: "10" }}
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading as="h3" size="lg" mb="2">
            NEW CHEESEBURGER!
          </Heading>
          <Text textAlign={{ base: "center", md: "start" }} mb="4">
            Unveiling our latest menu star - The Booster! Enjoy a delectable
            combo of a juicy beef patty, melted cheddar, and our secret sauce,
            all nestled in a freshly baked bun.
          </Text>
          <Button variant="base">more info</Button>
        </VStack>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap="4"
        bgGradient="linear(brand.foreground, brand.background)"
        rounded="xl"
        p="6"
        mb="8"
      >
        <VStack
          flex="1"
          p="4"
          pe={{ base: "none", md: "10" }}
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading as="h3" size="lg" mb="2">
            NEW WRAP!
          </Heading>
          <Text textAlign={{ base: "center", md: "start" }} mb="4">
            Introducing the all-new Shish Kebab Wrap! A perfect blend of tender
            beef, fresh veggies, and our signature sauce, all wrapped in a warm
            tortilla.
          </Text>
          <Button variant="base">more info</Button>
        </VStack>
        <VStack
          flex="1"
          alignItems={{ base: "center", md: "end" }}
          w={{ base: "full", md: "500px" }}
          order={{ base: "-1", md: "0" }}
        >
          <Image
            src="hero_promo_2.jpg"
            alt="Article offer #2"
            objectFit="cover"
            w="100%"
            h="100%"
            maxH="250px"
            rounded="lg"
          />
        </VStack>
      </Stack>
    </>
  );
};

export default Article;
