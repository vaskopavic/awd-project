import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      background: "#F9F4E1",
      foreground: "#FEFBF2",
    },
  },
  fonts: {
    heading: "var(--font-brice)",
    body: "var(--font-raleway)",
  },
  components: {
    Button: {
      variants: {
        primary: () => ({
          fontWeight: "400",
          rounded: "full",
          border: "1px solid",
          borderColor: "black",
          px: 4,
          py: 2,
          _hover: {
            color: "#fff",
            backgroundColor: "#D85B49",
            borderColor: "#D85B49",
          },
        }),
      },
    },
  },
});
