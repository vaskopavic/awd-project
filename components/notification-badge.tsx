"use client";

import { useState, useEffect } from "react";
import { Badge } from "@chakra-ui/react";

const NotificationBadge = ({
  initialCartQuantity,
  isLargerThanMedium,
}: {
  initialCartQuantity: number;
  isLargerThanMedium: boolean;
}) => {
  const [cartQuantity, setCartQuantity] = useState(initialCartQuantity);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    setCartQuantity(initialCartQuantity);
    if (initialCartQuantity === 0) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  }, [initialCartQuantity]);

  return (
    <Badge
      position="absolute"
      top="-5%"
      right="-15%"
      w="fit"
      minW={{ base: "14px", md: "12px" }}
      h={{ base: "14px", md: "12px" }}
      display={display}
      alignItems="center"
      justifyContent="center"
      fontSize="10px"
      pb="2px"
      color="brand.white"
      bg="brand.primary"
      rounded="full"
    >
      {isLargerThanMedium ? null : cartQuantity}
    </Badge>
  );
};

export default NotificationBadge;
