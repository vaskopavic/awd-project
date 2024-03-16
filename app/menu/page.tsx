"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Stack,
  VStack,
  SimpleGrid,
  Container,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import Card from "@/components/card";

export default function Page() {
  const [menu, setMenu] = useState<IMenu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = ["burgers", "wraps", "sandwiches"];

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("/api/menu");
      const data: IMenu[] = await response.json();

      setMenu(data);
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollTop = 0;
    }
  }, [selectedCategory]);

  const filteredMenu = useMemo(() => {
    return selectedCategory
      ? menu.filter((item) => item.category === selectedCategory)
      : menu;
  }, [selectedCategory, menu]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <VStack bg="brand.foreground" h="fit" minH="90vh">
      <Container maxW="container.xl" p="4" my="8">
        <VStack gap="4" alignItems={{ base: "center", md: "start" }}>
          <VStack alignItems={{ base: "center", md: "start" }} mb={{ md: "4" }}>
            <Heading as="h2" size="xl">
              BROWSE OUR KITCHEN
            </Heading>
            <Text
              fontSize={{ md: "lg" }}
              maxW={{ base: "container.sm", md: "container.lg" }}
              textAlign={{ base: "center", md: "start" }}
            >
              Our menu is full of delicious options. We have something for
              everyone, so take a look and see what you like!
            </Text>
          </VStack>
          <Stack direction={{ base: "column", md: "row" }} gap="4">
            <Stack
              direction={{ base: "row", md: "column" }}
              gap="4"
              mb={{ base: "4" }}
            >
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <Button
                    key={category}
                    fontSize={{ md: "md" }}
                    onClick={() => handleCategoryClick(category)}
                    isActive={isActive}
                  >
                    {category}
                  </Button>
                );
              })}
            </Stack>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              w="full"
              ref={menuContainerRef}
            >
              {filteredMenu.map((item) => {
                return <Card key={item.id} data={item} />;
              })}
            </SimpleGrid>
          </Stack>
        </VStack>
      </Container>
    </VStack>
  );
}
