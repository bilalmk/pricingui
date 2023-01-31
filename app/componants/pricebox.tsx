"use client";
import React from "react";
import Checkboxicon from "../Icons/checkboxicon";
import {
  ChakraProvider,
  Flex,
  Text,
  Box,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";

export default function Pricebox() {
  return (
    <ChakraProvider>
      <Box
        mt={{ base: "-130px", sm: "-120px", md: "-130px", lg: "-130px" }}
        id="main"
        maxW="940px"
        mx={{ base: "20px", lg: "auto" }}
        bg="white"
        rounded={"16px"}
        overflow="auto"
        shadow="2xl"
        fontFamily={"Inter"}>
        <Flex
          flexDirection={{
            base: "column",

            md: "row",
            lg: "row",
          }}>
          <Box
            id="left"
            backgroundColor={"#F0EAFB"}
            fontFamily="Inter"
            w={{ base: "100", md: "2xl", lg: "2xl" }}
            border="0px solid black"
            p="40px">
            <Flex
              direction={"column"}
              gap="0.4rem"
              alignItems={"center"}
              pt={["0.2rem", "2rem"]}>
              <Heading fontSize={["1.5rem", "1.5rem"]}>Premium PRO</Heading>
              <Heading fontSize={["3rem", "4rem"]} fontWeight={"bolder"}>
                $329
              </Heading>
              <Text fontWeight={"500"}>billed just once</Text>
              <Button bg="#805AD5" mt="1rem" color={"#fff"} w="90%">
                Get Started
              </Button>
            </Flex>
          </Box>
          <Box
            id="right"
            bg="#fff"
            pt="50px"
            pl="25px"
            pr="10px"
            pb={{ base: "2rem", sm: "2rem", md: "2rem" }}
            w={{ base: "100", md: "8xl", lg: "8xl" }}>
            <Text pb="1rem">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Flex direction={"column"} gap="1rem" verticalAlign={"top"}>
              <HStack>
                <Checkboxicon></Checkboxicon>
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack>
                <Checkboxicon></Checkboxicon>
                <Text>Additional phone numbers</Text>
              </HStack>
              <HStack>
                <Checkboxicon></Checkboxicon>
                <Text>Automated messages via Zapier</Text>
              </HStack>
              <HStack>
                <Checkboxicon></Checkboxicon>
                <Text>24/7 support and consulting</Text>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
