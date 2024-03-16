import { useState, useRef, forwardRef } from "react"; // Import forwardRef
import { Formik, Field, FormikProps } from "formik";
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
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon } from "@chakra-ui/icons";

import { useShoppingCart } from "@/providers/shopping-cart-provider";

const OrderDrawer = () => {
  const [step, setStep] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cartItems,
    cartQuantity,
    cartTotal,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const toast = useToast();

  const orderRef = useRef<HTMLParagraphElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const isCartEmpty = cartQuantity === 0;

  const handleNext = () => {
    if (cartItems.length > 0) {
      setStep(2);
    } else {
      onClose();

      toast({
        description: "You can't proceed with an empty order!",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleOrder = () => {
    if (formRef.current) {
      formRef.current.submitForm().then(() => {
        if (formRef.current && Object.keys(formRef.current.errors).length > 0) {
          toast({
            description: "Please fill in all required fields!",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });

          const firstErrorField = Object.keys(formRef.current.errors)[0];
          const errorInput = document.getElementById(firstErrorField);
          if (errorInput) {
            errorInput.focus();
          }
        } else {
          onClose();
          setStep(1);

          if (!isCartEmpty) {
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
        }
      });
    }
  };

  return (
    <>
      <Text
        w="full"
        position="relative"
        ref={orderRef}
        onClick={() => {
          onOpen();
          setStep(1);
        }}
      >
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
          <DrawerHeader bg="brand.background" mb="4">
            <DrawerCloseButton />
            <Text fontSize={{ md: "xl", lg: "2xl" }} fontWeight={400} mb="-1">
              {step === 1 ? "order details" : "shipping details"}
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems="center" justifyContent="center">
              {step === 1 && (
                <OrderDetailsContent
                  cartItems={cartItems}
                  decreaseCartQuantity={decreaseCartQuantity}
                  increaseCartQuantity={increaseCartQuantity}
                  removeFromCart={removeFromCart}
                  isCartEmpty={isCartEmpty}
                />
              )}
              {step === 2 && (
                <OrderShippingContent
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  ref={formRef}
                />
              )}
            </VStack>
          </DrawerBody>
          <DrawerFooter borderTop="1px solid black">
            <VStack w="full" pb="4">
              <HStack w="full" justifyContent="space-between" py="2">
                <Text fontSize="md">Delivery fee</Text>
                <Text fontSize="md">$2.49</Text>
              </HStack>
              <HStack
                w="full"
                justifyContent="space-between"
                pb={{ base: "6", md: "12" }}
              >
                <Heading as="p" size="md">
                  TOTAL
                </Heading>
                <Heading as="p" size="md">
                  ${cartTotal}
                </Heading>
              </HStack>
              {step === 1 ? (
                <Button w="full" onClick={handleNext}>
                  <Text fontSize={{ md: "lg", lg: "xl" }}>next</Text>
                </Button>
              ) : (
                <Button w="full" onClick={handleOrder}>
                  <Text fontSize={{ md: "lg", lg: "xl" }}>purchase</Text>
                </Button>
              )}
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
OrderDrawer.displayName = "OrderDrawer";

interface OrderDetailsContentProps {
  cartItems: CartItem[];
  decreaseCartQuantity: (item: CartItem) => void;
  increaseCartQuantity: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  isCartEmpty: boolean;
}

interface CartItem extends IMenu {
  quantity: number;
}

const OrderDetailsContent = ({
  cartItems,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  isCartEmpty,
}: OrderDetailsContentProps) => (
  <>
    {isCartEmpty ? (
      <Text alignSelf="center" p="4">
        Woops, seems like your order is empty..
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
              w={{ base: "112px", md: "124px" }}
              h={{ base: "112px", md: "124px" }}
              rounded="lg"
              objectFit="cover"
            />
            <VStack
              w="full"
              h={{ base: "112px", md: "124px" }}
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
                    noOfLines={{ base: 1, md: 2 }}
                    size={{ base: "sm", md: "md" }}
                  >
                    {cartItem.description}
                  </Text>
                </VStack>
                <Heading alignSelf="flex-start" size={{ base: "sm", md: "md" }}>
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
                  size={{ base: "sm", md: "md" }}
                  rounded="md"
                  onClick={() => removeFromCart(cartItem)}
                />
              </HStack>
            </VStack>
          </HStack>
        </HStack>
      ))
    )}
  </>
);
OrderDetailsContent.displayName = "OrderDetailsContent";

const OrderShippingContent = forwardRef<
  HTMLFormElement,
  { cartItems: CartItem[]; cartTotal: number }
>(({ cartItems, cartTotal }, ref) => (
  <Formik
    innerRef={
      ref as React.Ref<
        FormikProps<{
          fullName: string;
          email: string;
          phone: string;
          address: string;
          additionalInfo: string;
          zipCode: string;
        }>
      >
    }
    initialValues={{
      fullName: "",
      email: "",
      phone: "",
      address: "",
      additionalInfo: "",
      zipCode: "",
    }}
    onSubmit={(values, { setStatus, resetForm }) => {
      const formData = {
        cartItems: cartItems,
        cartTotal: cartTotal,
        formValues: values,
      };

      console.log(formData);
      resetForm();
      setStatus({ success: true });
    }}
  >
    {({ handleSubmit, errors, touched }) => (
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={!!errors.fullName && touched.fullName}>
            <FormLabel htmlFor="fullName">Full Name*</FormLabel>
            <Field
              as={Input}
              id="fullName"
              name="fullName"
              type="text"
              variant="outline"
              validate={(value: string) => {
                let error;

                if (!value) {
                  error = "Your full name is required!";
                }

                return error;
              }}
            />
            <FormErrorMessage>{errors.fullName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email && touched.email}>
            <FormLabel htmlFor="email">Email*</FormLabel>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              variant="outline"
              validate={(value: string) => {
                let error;

                if (!value) {
                  error = "Your email is required!";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                ) {
                  error = "Your email is invalid!";
                }

                return error;
              }}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.phone && touched.phone}>
            <FormLabel htmlFor="phone">Phone Number*</FormLabel>
            <Field
              as={Input}
              id="phone"
              name="phone"
              type="tel"
              variant="outline"
              validate={(value: string) => {
                let error;

                if (!value) {
                  error = "Your phone number is required!";
                }

                return error;
              }}
            />
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.address && touched.address}>
            <FormLabel htmlFor="address">Street Address*</FormLabel>
            <Field
              as={Input}
              id="address"
              name="address"
              type="text"
              variant="outline"
              validate={(value: string) => {
                let error;

                if (!value) {
                  error = "Your address is required!";
                }

                return error;
              }}
            />
            <FormErrorMessage>{errors.address}</FormErrorMessage>
          </FormControl>
          <HStack>
            <FormControl>
              <FormLabel htmlFor="additionalInfo">Apt, Suite, Bldg.</FormLabel>
              <Field
                as={Input}
                id="additionalInfo"
                name="additionalInfo"
                type="text"
                variant="outline"
              />
            </FormControl>
            <FormControl isInvalid={!!errors.zipCode && touched.zipCode}>
              <FormLabel htmlFor="zipCode">Zip Code*</FormLabel>
              <Field
                as={Input}
                id="zipCode"
                name="zipCode"
                type="text"
                variant="outline"
                validate={(value: string) => {
                  let error;

                  if (!value) {
                    error = "Your zip code is required!";
                  }

                  return error;
                }}
              />
              <FormErrorMessage>{errors.zipCode}</FormErrorMessage>
            </FormControl>
          </HStack>
        </VStack>
      </form>
    )}
  </Formik>
));
OrderShippingContent.displayName = "OrderShippingContent";

export default OrderDrawer;
