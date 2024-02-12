"use client";

import { VStack } from "@chakra-ui/react";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <VStack w="100%" h="calc(100vh - 110px)" bg="brand.background" p="4">
      <HeroSection />
    </VStack>
  );
}
