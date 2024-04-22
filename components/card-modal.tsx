import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  VStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

const CardModal = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: IMenu;
}) => {
  const { name, image } = data;

  return (
    <Modal
      size={{ base: "md", md: "screen" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent bg="brand.background" w="fit">
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={{ base: "4", md: "0" }}
        >
          <Image
            src={image}
            alt={`Image of ${name}`}
            w={{ base: "xs", md: "300px" }}
            h="fit"
            objectFit="cover"
            roundedTopLeft="md"
            roundedTopRight={{ base: "md", md: "none" }}
            roundedBottomLeft={{ base: "none", md: "md" }}
          />
          <VStack alignItems="start">
            <ModalHeader>
              <Heading as="h3" size="md" noOfLines={1}>
                {name}
              </Heading>
            </ModalHeader>
            <ModalCloseButton color={{ base: "gray.600" }} />
            <ModalBody
              maxW={{ base: "xs", md: "sm" }}
              mb={{ base: "6", md: "0" }}
            >
              <Text fontSize="sm" textAlign="justify" color="gray.500">
                Nutritional information: 680 kcal, 60g carbs, 28g protein, 10g
                fat. Ingredients: Flour, sugar, baking soda, 100% pure beef,
                soybean oil, high fructose corn syrup, eggs, milk, cheese, salt,
                pepper. Contains: Wheat, soy, eggs, dairy. May contain traces of
                nuts.
              </Text>
            </ModalBody>
          </VStack>
        </Stack>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;
