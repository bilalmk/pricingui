"use client";
import React from "react";
import Footericon1 from "../Icons/footericon1";
import Footericon2 from "../Icons/footericon2";
import Footericon3 from "../Icons/footericon3";
import { ChakraProvider, Flex, HStack, Text, Icon } from "@chakra-ui/react";

export default function Footer() {
  return (
    <ChakraProvider>
      <Flex
        maxW={"850px"}
        maxH="48px"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        mx="auto"
        alignItems={{ base: "left", sm: "left", md: "left", lg: "center" }}
        mt="5rem"
        border="0px solid red"
        gap={{ base: "1rem", sm: "1rem", md: "1rem", lg: "7rem" }}
        pl={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0rem" }}
        fontFamily={"Inter"}
        fontWeight={"700"}
        fontSize={"sm"}>
        <HStack spacing={"1.5rem"}>
          <Icon as={Footericon1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack spacing={"1.5rem"}>
          <Icon as={Footericon2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack spacing={"1.5rem"}>
          <Icon as={Footericon3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}
