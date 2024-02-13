import { VStack, Heading, Text, Button, Image } from "@chakra-ui/react";

const Card = () => {
  return (
    <VStack
      maxW="300px"
      h="fit"
      bg="brand.background"
      mb="8"
      mx="4"
      p="4"
      rounded="lg"
      boxShadow="lg"
    >
      <Image
        src="https://jollybyte.vercel.app/images/burgers/burger_1.jpg"
        alt="placeholder image"
        w="fit"
        h="fit"
        objectFit="cover"
        rounded="xl"
      />
      <VStack w="full" alignItems="start" mt="4">
        <Heading as="h4" size="lg" noOfLines={2}>
          Mr. Porky
        </Heading>
        <Text noOfLines={2} mb="2">
          pulled pork, bacon, cheddar, pickles, lettuce, hot sauce
        </Text>
        <Button variant="secondary" fontSize={{ md: "lg" }}>
          add to order
        </Button>
      </VStack>
    </VStack>
  );
};

export default Card;
