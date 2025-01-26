"use client";
import Container from "@/components/Container";
import { socials } from "../Utils/Socials";
import { Box, Divider, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Box my={20}>
        <Divider />
        <Text
          fontSize={{ base: "md", md: "3xl" }}
          fontWeight={"bold"}
          mt={20}
          color={"#fff"}
          textAlign={"left"}
        >
          Ozioma Agaecheta
        </Text>
        <Text
          fontSize={{ base: "md", md: "md" }}
          mt={5}
          color={"#fff"}
          textAlign={"left"}
        >
          Passionate about systems engineering and designs, anti-scial but
          user-friendly.
        </Text>
        <Flex mt={6}>
          {socials
            .filter((link) =>
              ["LinkedIn", "GitHub", "Email"].includes(link.name)
            )
            .map((link) => (
              <Link key={link.href} href={link.href} isExternal>
                <Flex align="center">
                  <link.icon size={15} color="#E7BC91" />
                  <Text mr={10} ml={1} color="white" fontWeight="light" fontSize="sm">
                    {link.name}
                  </Text>
                </Flex>
              </Link>
            ))}
        </Flex>
        <Text mt={6} color="white" fontSize="sm">
          © {currentYear} Ozioma Agaecheta. All rights reserved
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;