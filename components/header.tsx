"use client";

import NextLink from "next/link";
import {
  Container,
  HStack,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import useMediaQuery from "@/hooks/use-media-query";

const Header = () => {
  const isMediumBreakpoint = useMediaQuery(768);

  return (
    <Box id="header" bg="brand.background">
      <Container maxW="container.xl">
        <HStack alignItems="center" justifyContent="space-between" py="8">
          <Box as={NextLink} href="/">
            <Image w="200px" src="logo.svg" />
          </Box>
          {isMediumBreakpoint ? (
            <>
              <HStack
                gap={{ md: "8", lg: "16" }}
                display={{ base: "none", md: "flex" }}
              >
                <Box as={NextLink} href="/" fontSize={{ md: "xl", lg: "2xl" }}>
                  home
                </Box>
                <Box
                  as={NextLink}
                  href="/about"
                  fontSize={{ md: "xl", lg: "2xl" }}
                >
                  about
                </Box>
                <Box
                  as={NextLink}
                  href="/order"
                  fontSize={{ md: "xl", lg: "2xl" }}
                >
                  my order
                </Box>
              </HStack>
              <Button
                as={NextLink}
                href="/menu"
                variant="primary"
                fontSize={{ md: "xl", lg: "2xl" }}
                display={{ base: "none", md: "inline-flex" }}
              >
                menu
              </Button>
            </>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                rounded="md"
                _hover={{ bg: "brand.foreground" }}
                _active={{ bg: "brand.foreground" }}
              />
              <MenuList bg="brand.foreground">
                <MenuItem
                  as={NextLink}
                  href="/"
                  bg="brand.foreground"
                  _hover={{ bg: "brand.background" }}
                >
                  home
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href="/about"
                  bg="brand.foreground"
                  _hover={{ bg: "brand.background" }}
                >
                  about
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href="/order"
                  bg="brand.foreground"
                  _hover={{ bg: "brand.background" }}
                >
                  my order
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href="/menu"
                  bg="brand.foreground"
                  _hover={{ bg: "brand.background" }}
                >
                  menu
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
