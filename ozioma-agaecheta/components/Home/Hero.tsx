"use client";

import Container from "@/components/Container";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

// Common styles
const baseStyles = {
  textAlign: "left" as const,
  color: "white",
};

// Experience data
const experiences = [
  {
    href: "https://www.jupytec.com",
    imgSrc: "/assets/jlogo.png",
    alt: "Jupytec Innovation Labs Logo",
    text: "Founder, Jupytec Innovation Labs"
  },
  {
    href: "https://www.easymail.com",
    imgSrc: "/assets/alxLogo.jpeg",
    alt: "Easymail Logo",
    text: "Diploma, Software Engineering"
  }
];

// Experience Card component
interface ExperienceCardProps {
  href: string;
  imgSrc: string;
  alt: string;
  text: string;
}

const ExperienceCard = ({ href, imgSrc, alt, text }: ExperienceCardProps) => (
  <Flex align="center" gap={3}>
    <Link href={href}>
      <Image alt={alt} src={imgSrc} width={30} height={50} />
    </Link>
    <Text>{text}</Text>
  </Flex>
);

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
          fontSize={{ base: "60px", md: "100px" }}
          fontWeight="bold"
          {...baseStyles}
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
          lineHeight={{ base: ".5", md: "1" }}
        >
          Full-Stack Software Engineer, International Conference Speaker &amp; Visionary.
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "34px" }}
          mt={{ base: 8, md: 36 }}
          {...baseStyles}
        >
          I&apos;m passionate about coding scalable systems, automating
          workflows, cloud infrastructure, and collaborative development,
          thriving on adapting to new technologies.
        </Text>

        <Flex
          mt={8}
          gap={{ base: 8, md: 60 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;