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
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaBasketShopping } from "react-icons/fa6";

import OrderDrawer from "./order-drawer";
import NotificationBadge from "./notification-badge";

import { useShoppingCart } from "@/providers/shopping-cart-provider";

const Header = () => {
  const { cartQuantity } = useShoppingCart();
  const [isLargerThanMedium] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" bg="brand.background">
      <HStack alignItems="center" justifyContent="space-between" py="8">
        <Box as={NextLink} href="/">
          <Image w={{ base: "148px", md: "200px" }} src="logo.svg" alt="Logo" />
        </Box>
        {isLargerThanMedium ? (
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
                position="relative"
                fontSize={{ md: "xl", lg: "2xl" }}
                _hover={{ cursor: "pointer" }}
              >
                <OrderDrawer
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
                <NotificationBadge
                  initialCartQuantity={cartQuantity}
                  isLargerThanMedium={isLargerThanMedium}
                />
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
          <HStack gap="3">
            <HStack position="relative">
              <IconButton
                aria-label="Cart button"
                icon={<FaBasketShopping />}
                fontSize="18px"
                rounded="md"
                bg="brand.secondary"
                color="brand.base"
                border="brand.secondary"
                _hover={{
                  bg: "brand.secondaryShade",
                  border: "brand.secondaryShade",
                }}
                _active={{
                  bg: "brand.secondaryShade",
                  border: "brand.secondaryShade",
                }}
                onClick={() => {
                  onOpen();
                }}
              />
              <NotificationBadge
                initialCartQuantity={cartQuantity}
                isLargerThanMedium={isLargerThanMedium}
              />
            </HStack>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Menu button"
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
                  bg="brand.foreground"
                  _hover={{ cursor: "pointer", bg: "brand.background" }}
                >
                  <OrderDrawer
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  />
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
          </HStack>
        )}
      </HStack>
    </Container>
  );
};

export default Header;
