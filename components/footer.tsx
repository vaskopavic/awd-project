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

const Footer = () => {
  return (
    <Container maxW="container.xl" bg="brand.background">
      <HStack
        alignItems="end"
        justifyContent="space-between"
        py={{ base: "4", md: "24" }}
      >
        <VStack
          display={{ base: "none", md: "flex" }}
          alignItems={{ base: "center", md: "start" }}
          justifyContent="center"
        >
          <HStack gap="4">
            <Box as={NextLink} href="/" fontSize={{ md: "lg", lg: "xl" }}>
              home
            </Box>
            <Box as={NextLink} href="/about" fontSize={{ md: "lg", lg: "xl" }}>
              about
            </Box>
            <Box as={NextLink} href="/order" fontSize={{ md: "lg", lg: "xl" }}>
              my order
            </Box>
            <Box as={NextLink} href="/menu" fontSize={{ md: "lg", lg: "xl" }}>
              menu
            </Box>
          </HStack>
          <HStack>
            <Icon
              as={FaFacebook}
              boxSize={6}
              color="brand.black"
              _hover={{ cursor: "pointer" }}
            />
            <Icon
              as={FaInstagram}
              boxSize={6}
              color="brand.black"
              _hover={{ cursor: "pointer" }}
            />
            <Icon
              as={FaXTwitter}
              boxSize={6}
              color="brand.black"
              _hover={{ cursor: "pointer" }}
            />
          </HStack>
          <HStack gap="2">
            <Text
              fontSize="sm"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Privacy statement
            </Text>
            <Text
              fontSize="sm"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Terms & conditions
            </Text>
            <Text
              fontSize="sm"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Cookie policy
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
