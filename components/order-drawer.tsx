import { useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon } from "@chakra-ui/icons";

import { useShoppingCart } from "@/providers/shopping-cart-provider";

const OrderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cartItems,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const toast = useToast();

  const orderRef = useRef<HTMLParagraphElement | null>(null);

  const isCartEmpty = cartItems.length === 0;

  const handleOrder = () => {
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        removeFromCart(item);
      });

      toast({
        description: "Your order has been placed!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        description: "You can't place an empty order!",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Text position="relative" ref={orderRef} onClick={onOpen}>
        my order
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={orderRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="brand.background">
            <DrawerCloseButton />
            <Text fontSize={{ md: "xl", lg: "2xl" }} fontWeight={400} mb="-1">
              your order
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems="center" justifyContent="center">
              {isCartEmpty ? (
                <Text alignSelf="center">
                  woops, seems like your order is empty..
                </Text>
              ) : (
                cartItems.map((cartItem) => (
                  <HStack
                    key={cartItem.id}
                    rounded="xl"
                    p="4"
                    bg="brand.background"
                    w="full"
                    justify="space-between"
                  >
                    <HStack w="full">
                      <Image
                        src={cartItem.image}
                        alt={`${cartItem.name} image`}
                        w="124px"
                        h="124px"
                        rounded="lg"
                        objectFit="cover"
                      />
                      <VStack
                        w="full"
                        h="124px"
                        alignItems="flex-start"
                        justifyContent="space-between"
                      >
                        <HStack w="full">
                          <VStack w="full" alignItems="start">
                            <Heading size={{ base: "sm", md: "md" }}>
                              {cartItem.name}
                            </Heading>
                            <Text
                              maxW="220px"
                              noOfLines={2}
                              size={{ base: "sm", md: "md" }}
                            >
                              {cartItem.description}
                            </Text>
                          </VStack>
                          <Heading
                            alignSelf="flex-start"
                            size={{ base: "sm", md: "md" }}
                          >
                            ${cartItem.price}
                          </Heading>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                          <HStack>
                            <IconButton
                              icon={<ChevronDownIcon />}
                              aria-label="Decrease quantity"
                              variant="tertiary"
                              size="xs"
                              rounded="full"
                              onClick={() => decreaseCartQuantity(cartItem)}
                            />
                            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                              {cartItem.quantity}
                            </Text>
                            <IconButton
                              icon={<ChevronUpIcon />}
                              aria-label="Increase quantity"
                              variant="tertiary"
                              size="xs"
                              rounded="full"
                              onClick={() => increaseCartQuantity(cartItem)}
                            />
                          </HStack>
                          <IconButton
                            icon={<DeleteIcon />}
                            aria-label="Delete item"
                            variant="tertiary"
                            rounded="md"
                            onClick={() => removeFromCart(cartItem)}
                          />
                        </HStack>
                      </VStack>
                    </HStack>
                  </HStack>
                ))
              )}
            </VStack>
          </DrawerBody>
          <DrawerFooter borderTop="1px solid black">
            <VStack w="full" py="4">
              <HStack w="full" justifyContent="space-between" py={2}>
                <Text fontSize="md">delivery fee</Text>
                <Text fontSize="md">$2.49</Text>
              </HStack>
              <HStack w="full" justifyContent={"space-between"} pb={12}>
                <Heading as="p" size="md">
                  TOTAL
                </Heading>
                <Heading as="p" size="md">
                  $
                  {cartItems
                    .reduce((total, cartItem) => {
                      const item = cartItems.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 2.49)
                    .toFixed(2)}
                </Heading>
              </HStack>
              <Button w="full" variant="base" onClick={handleOrder}>
                <Text fontSize={{ md: "lg", lg: "xl" }}>purchase</Text>
              </Button>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default OrderDrawer;
