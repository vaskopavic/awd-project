import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "brand.background",
        color: "brand.black",
      },
      ".slick-slide > div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
  colors: {
    brand: {
      black: "#1A202C",
      white: "#FFFCF2",
      background: "#F9F4E1",
      foreground: "#FEFBF2",
      base: "#313131",
      baseShade: "#222222",
      primary: "#D85B49",
      primaryShade: "#C25242",
      secondary: "#D7F74E",
      secondaryShade: "#C2DE46",
    },
  },
  fonts: {
    heading: "var(--font-brice)",
    body: "var(--font-raleway)",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "400",
        rounded: "full",
        border: "1px solid",
        borderColor: "brand.base",
        px: 4,
        py: 2,
        transition: "all 200ms",
        _hover: {
          color: "brand.white",
          backgroundColor: "brand.base",
        },
        _active: {
          color: "brand.white",
          backgroundColor: "brand.baseShade",
        },
      },
      variants: {
        primary: () => ({
          _hover: {
            backgroundColor: "brand.primary",
            borderColor: "brand.primary",
          },
          _active: {
            backgroundColor: "brand.primaryShade",
            borderColor: "brand.primaryShade",
          },
        }),
        secondary: () => ({
          _hover: {
            color: "brand.black",
            backgroundColor: "brand.secondary",
            borderColor: "brand.secondary",
          },
          _active: {
            color: "brand.black",
            backgroundColor: "brand.secondaryShade",
            borderColor: "brand.secondaryShade",
          },
        }),
        tertiary: () => ({
          color: "brand.black",
          border: "none",
          backgroundColor: "blackAlpha.100",
          _hover: {
            color: "brand.black",
            backgroundColor: "blackAlpha.200",
          },
          _active: {
            color: "brand.black",
            backgroundColor: "blackAlpha.300",
          },
        }),
      },
    },
  },
});
