import NextLink from "next/link";
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  keyframes,
} from "@chakra-ui/react";

const HeroSection = () => {
  const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-10%); opacity: 0;
  }
  100%: {
    transform: "translateX(0); opacity: 1;
  }`;
  const slideInFromRight = keyframes`
  0% {
    transform: translateX(10%); opacity: 0;
  }
  100%: {
    transform: "translateX(0); opacity: 1;
  }`;

  const smoothEnterRight = `${slideInFromRight} 1s ease-out`;
  const smoothEnterLeft = `${slideInFromLeft} 1s ease-out`;

  return (
    <Stack
      h="100%"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      <VStack animation={smoothEnterLeft} textAlign="center">
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
          variant="secondary"
          fontSize={{ md: "lg" }}
        >
          order now
        </Button>
      </VStack>
      <Image
        animation={smoothEnterRight}
        src="hero.png"
        alt="Hand reaching for a burger"
        w={{ base: "35vh", md: "40vh", lg: "60vh" }}
        h={{ base: "35vh", md: "40vh", lg: "60vh" }}
        objectFit="cover"
        order={{ base: -1, md: 1 }}
        mb={{ base: "12", md: "0" }}
      />
    </Stack>
  );
};

export default HeroSection;
