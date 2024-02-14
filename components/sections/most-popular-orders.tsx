import { useEffect, useState } from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

import Carousel from "../carousel";

const MostPopularOrders = () => {
  const [mostPopularOrders, setMostPopularOrders] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchMostPopularOrders = async () => {
      const response = await fetch("/api/menu/most-popular-orders");
      const data: IMenu[] = await response.json();

      setMostPopularOrders(data);
    };

    fetchMostPopularOrders();
  }, []);

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
      <Carousel data={mostPopularOrders} />
    </Box>
  );
};

export default MostPopularOrders;
