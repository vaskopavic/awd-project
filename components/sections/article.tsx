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
    <Stack
      direction={{ base: "column", md: "row" }}
      alignItems="start"
      justifyContent="space-between"
      gap="4"
      bgGradient="linear(brand.background, brand.foreground)"
      rounded="xl"
      p="4"
      mb="8"
    >
      <Box w="full">
        <Image
          src="hero_promo.jpg"
          alt="Article offer #1"
          objectFit="cover"
          w="100%"
          h="100%"
          maxH="250px"
          rounded="lg"
        />
      </Box>
      <VStack alignItems={{ base: "center", md: "start" }} maxW="container.md">
        <Heading as="h3" size="lg">
          NEW CHEESEBURGER!
        </Heading>
        <Text mb="2" textAlign={{ base: "center", md: "start" }}>
          Discover the latest addition to our menu, The Booster! A juicy beef
          patty, melted cheddar, and our secret sauce, all in a freshly baked
          bun. Try it now!
        </Text>
        <Button variant="base" size="sm">
          more info
        </Button>
      </VStack>
    </Stack>
  );
};

export default Article;
