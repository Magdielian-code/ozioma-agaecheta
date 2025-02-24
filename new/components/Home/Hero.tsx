"use client";

import Container from "@/components/Container";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Avatar.Root size="sm">
          <Avatar.Fallback
            name="Ozioma Agaecheta"
            display={{ base: "block", md: "none" }}
            style={{ border: "2px solid #E7BC91" }}
          />
          <Avatar.Image src="/assets/me2.jpeg" />
        </Avatar.Root>
        <Heading
          as="h1"
          mt={{ base: 5, md: 10, lg: 40 }}
          color="white"
          fontSize={{ base: "60px", md: "100px", lg: "100px" }}
          fontWeight="bold"
          textAlign="left"
        >
          Ozioma Agaecheta
        </Heading>
        <Heading
          as="h2"
          mt={20}
          fontFamily="sans-serif"
          className="text-[#E7BC91]"
          fontSize={{ base: "20px", md: "25px", lg: "45px" }}
          fontWeight={{ base: "light", md: "bold" }}
          textAlign="left"
          lineHeight={{ base: ".5",  md: "1" }}
        >
          Full-Stack Software Engineer, International Conference Speaker &amp; Leader.
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "35px" }}
          color="white"
          mt={{ base: 8, md: 36 }}
        >
          I&apos;m passionate about 💻 coding scalable systems, 🤖 automating
          workflows, ☁️ cloud infrastructure, and 🤝 collaborative development,
          thriving on adapting to new technologies 🚀.
        </Text>
        <Flex
          mt={8}
          gap={{ base: 8, md: 60 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex align="center" gap={3}>
            <Link href="https://www.jupytec.com">
              <Image
                alt="Jupytec Innovation Labs Logo"
                src="/assets/jlogo.png"
                width={50}
                height={50}
              />
            </Link>
            <Text>Founder, Jupytec Innovation Labs</Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Link href="https://www.easymail.com">
              <Image
                alt="Easymail Logo"
                src="/assets/alxLogo.jpeg"
                width={50}
                height={50}
              />
            </Link>
            <Text>Diploma, Software Engineering</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;