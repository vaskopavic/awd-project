import NextLink from "next/link";
import { Stack, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Stack
      h="100%"
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      <VStack textAlign="center">
        <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }}>
          THE GODMOTHER
        </Heading>
        <Text fontSize={{ md: "lg" }} maxW="container.sm" mb="4">
          Taste the burger that made us famous. Our signature blend of beef is
          cooked to perfection and served on a toasted brioche bun.
        </Text>
        <Button
          as={NextLink}
          href="/menu"
          variant="primary"
          fontSize={{ md: "lg" }}
        >
          order now
        </Button>
      </VStack>
      <Image
        src="hero.png"
        alt="Hand reaching for a burger"
        w={{ base: "xs", md: "sm", lg: "65vh" }}
        h={{ base: "xs", md: "sm", lg: "65vh" }}
        objectFit="cover"
        order={{ base: -1, md: 1 }}
        mb={{ base: "12", md: "0" }}
      />
    </Stack>
  );
};

export default HeroSection;
