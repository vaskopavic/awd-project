"use client";

import NextLink from "next/link";
import {
  Container,
  VStack,
  HStack,
  Box,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import OrderDrawer from "./order-drawer";

const Footer = () => {
  return (
    <Container maxW="container.xl" bg="brand.background">
      <HStack
        alignItems="end"
        justifyContent="space-between"
        pt={{ base: "16", md: "24" }}
        pb={{ base: "8", md: "16" }}
      >
        <VStack
          display={{ base: "none", md: "flex" }}
          alignItems={{ base: "center", md: "start" }}
          justifyContent="center"
          gap="4"
        >
          <HStack gap="6">
            <Box as={NextLink} href="/" fontSize={{ md: "lg", lg: "xl" }}>
              home
            </Box>
            <Box as={NextLink} href="/about" fontSize={{ md: "lg", lg: "xl" }}>
              about
            </Box>
            <Box
              fontSize={{ md: "lg", lg: "xl" }}
              _hover={{ cursor: "pointer" }}
            >
              <OrderDrawer />
            </Box>
            <Box as={NextLink} href="/menu" fontSize={{ md: "lg", lg: "xl" }}>
              menu
            </Box>
          </HStack>
          <HStack gap="4">
            <Icon
              as={FaFacebook}
              boxSize={7}
              color="brand.black"
              _hover={{ cursor: "pointer" }}
            />
            <Icon
              as={FaInstagram}
              boxSize={7}
              color="brand.black"
              _hover={{ cursor: "pointer" }}
            />
            <Icon
              as={FaXTwitter}
              boxSize={7}
              color="brand.black"
              _hover={{ cursor: "pointer" }}
            />
          </HStack>
          <HStack gap="2">
            <Text
              fontSize="sm"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              privacy statement
            </Text>
            <Text
              fontSize="sm"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              terms & conditions
            </Text>
            <Text
              fontSize="sm"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              cookie policy
            </Text>
          </HStack>
        </VStack>
        <VStack w={{ base: "full", md: "max" }}>
          <Box as={NextLink} href="/">
            <Image w="200px" src="logo.svg" />
          </Box>
          <Text>&#169; {new Date().getFullYear()}. All rights reserved.</Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Footer;
