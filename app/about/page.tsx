import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Stack,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <VStack bg="brand.foreground">
      <Container maxW="container.xl" p="4" my="8">
        <VStack gap="4" mb="12" alignItems="start">
          <Heading as="h2" size="xl">
            OUR STORY
          </Heading>
          <Text fontSize={{ md: "lg" }}>
            Fuel your taste adventure at Jollybyte, where innovation meets
            flavor in every bite! Born from the imagination of three culinary
            enthusiasts, our burger haven in the vibrant heart of Skopje invites
            you to a funky feast. Step into our cozy realm, where the air is
            filled with the irresistible aroma of freshly crafted delights,
            making Jollybyte your home away from home.
          </Text>
          <Image
            src="about.jpg"
            alt="Headquarters restaurant"
            w="full"
            rounded="xl"
          />
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          pb="20"
          justify={{ md: "space-between" }}
          gap="4"
        >
          <VStack alignItems="start">
            <Heading as="h3" size="lg" mb="4">
              CONTACT
            </Heading>
            <VStack alignItems="start" gap="4">
              <Box>
                <Text>skopje, mk</Text>
                <Text>02/ 2793 037</Text>
              </Box>
              <Box>
                <Text>london, uk</Text>
                <Text>02/ 45 56 89 52</Text>
              </Box>
              <Box>
                <Text>paris, fr</Text>
                <Text>02/ 45 56 89 52</Text>
              </Box>
              <Box>
                <Text>email</Text>
                <Text>jollybyte@contact.com</Text>
              </Box>
            </VStack>
          </VStack>
          <VStack alignItems="start">
            <Heading as="h3" size="lg" mb="4">
              LOCATION
            </Heading>
            <Box
              width={{ base: "sm", md: "md", lg: "3xl", xl: "4xl" }}
              height="240"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.803803116099!2d21.40722952609099!3d42.00448602122814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541443605aa4ab%3A0x33d56647e5b87264!2sFaculty%20of%20Computer%20Science%20%26%20Engineering!5e0!3m2!1sen!2smk!4v1708640846952!5m2!1sen!2smk"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </Box>
          </VStack>
        </Stack>
      </Container>
    </VStack>
  );
}
