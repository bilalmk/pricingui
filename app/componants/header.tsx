"use client";
import React from "react";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <ChakraProvider>
        <Box
          bgColor={"#6B46C1"}
          textColor={"#fff"}
          textAlign={{ base: "left", md: "left", lg: "center" }}
          max-width="100%"
          height="sm"
          pt="5rem"
          pl={{ base: "1rem", md: "1rem" }}
          display="flex"
          flexDirection={"column"}
          gap="1rem">
          <Heading
            fontSize={{ base: "2rem", sm: "2rem", md: "2rem", lg: "3rem" }}>
            Simple pricing for your business
          </Heading>
          <Text fontSize={["1rem", "1.4rem"]}>
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </ChakraProvider>
    </>
  );
}
