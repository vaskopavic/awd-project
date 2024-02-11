"use client";

import { ChakraProvider as Provider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ChakraProvider;
