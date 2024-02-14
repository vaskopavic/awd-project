import { Stack, Heading, Text, Button, Image } from "@chakra-ui/react";

interface CardProps {
  data: IMenu;
}

const Card = (props: CardProps) => {
  const { name, description, image, price } = props.data;

  return (
    <Stack
      direction="column"
      w="fit"
      maxW="300px"
      h="fit"
      maxH="460px"
      bg="brand.background"
      mb="8"
      mx="4"
      p="4"
      rounded="lg"
      boxShadow="lg"
    >
      <Image
        src={image}
        alt={`Image of ${name}`}
        w="fit"
        h="fit"
        objectFit="cover"
        rounded="xl"
        mb="2"
      />
      <Stack w="full" direction="column" alignItems="start">
        <Stack
          w="full"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="4"
        >
          <Heading as="h3" size="md" noOfLines={1}>
            {name}
          </Heading>
          <Heading as="h4" size="md">
            ${price.toFixed(2)}
          </Heading>
        </Stack>
        <Text noOfLines={2} mb="2">
          {description}
        </Text>
        <Button variant="secondary" fontSize={{ md: "lg" }}>
          add to order
        </Button>
      </Stack>
    </Stack>
  );
};

export default Card;
