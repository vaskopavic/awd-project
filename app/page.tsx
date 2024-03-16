"use client";

import { Container, VStack } from "@chakra-ui/react";

import HeroSection from "@/components/sections/hero";
import MostPopularOrders from "@/components/sections/most-popular-orders";
import Article from "@/components/sections/article";

export default function Home() {
  return (
    <>
      <VStack
        w="100%"
        h={{ base: "calc(100vh - 64px)", md: "calc(100vh - 110px)" }}
        bg="brand.background"
        p="4"
      >
        <HeroSection />
      </VStack>
      <VStack bg="brand.foreground">
        <Container maxW="container.xl" mb="32" p="4">
          <MostPopularOrders />
          <Article />
        </Container>
      </VStack>
    </>
  );
}
