import { Box, VStack, Heading, Text } from "@chakra-ui/react";

import Carousel from "../carousel";

const MostPopularOrders = () => {
  return (
    <Box my="20">
      <VStack textAlign="center" mb="8">
        <Heading as="h2" size="xl">
          MOST POPULAR ORDERS
        </Heading>
        <Text
          fontSize={{ md: "lg" }}
          maxW={{ base: "container.sm", md: "container.lg" }}
          mb="4"
        >
          Here are some of our most popular orders. Try them out and see why
          everyone loves them!
        </Text>
      </VStack>
      <Carousel />
    </Box>
  );
};

export default MostPopularOrders;
