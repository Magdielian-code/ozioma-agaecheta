import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Container from "@/components/Container";
import React from "react";
import Image from "next/image";
import { SiLinkedin, SiX, SiGmail } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const p_socials = [
  {
    href: "https://www.linkedin.com/showcase/advoscholar/about/?viewAsMember=true",
    icon: SiLinkedin,
  },

  {
    href: "https://x.com/advoscholar_jil",
    icon: SiX,
  },
  {
    href: "mailto:advoscholar.jil@gmail.com",
    icon: SiGmail,
  },
];

const Projects = () => {
  return (
    <Container>
      <Box>
        <Text fontSize="4xl" fontWeight="bold" mt={40}>
          Featured Projects
        </Text>
        <Flex width={"100%"} mt={10}>
          <Box as="div" width={"35%"} mt={10}>
            <Text fontSize="2xl" fontWeight="bold" color={"#E7BC91"}>
              AdvoScholar
            </Text>
            <Text fontSize="md">
              AdvoScholar by Jupytec is revolutionizing African education
              through our comprehensive school management platform.{" "}
            </Text>
            <Flex align="center" mt={5} flexWrap={"wrap"} gap={3}>
              <Button size={"sm"} bg={"#292524"}>
                NextJS
              </Button>
              <Button size={"sm"} bg={"#292524"}>
                Postgres
              </Button>
              <Button size={"sm"} bg={"#292524"}>
                Education
              </Button>
            </Flex>
            <Flex align="center" mt={10}>
              {p_socials.map((social, index) => (
                <Link key={index} href={social.href} passHref>
                  <social.icon
                    size={17}
                    style={{ marginRight: "20" }}
                    color="white"
                  />
                </Link>
              ))}
            </Flex>
          </Box>
          <Spacer />
          <Box as="div" width={"40%"} mt={10}>
            <Image
              alt="Picture of Advoscholar home page"
              src="/assets/advoscholar.png"
              width={400}
              height={400}
            />
          </Box>
        </Flex>
        <Flex width={"100%"} mt={10}>
          <Box as="div" width={"35%"} mt={10}>
            <Text fontSize="2xl" fontWeight="bold" color={"#E7BC91"}>
              Verify
            </Text>
            <Text fontSize="md">
              Created to combat the rising tide of counterfeit goods and ensure
              regulatory compliance, we're bringing transparency and trust to
              markets worldwide.
            </Text>
            <Flex align="center" mt={5} flexWrap={"wrap"} gap={3}>
              <Button size={"sm"} bg={"#292524"}>
                Flutter
              </Button>
              <Button size={"sm"} bg={"#292524"}>
                Firebase
              </Button>
              <Button size={"sm"} bg={"#292524"}>
                Flask API
              </Button>
              <Button size={"sm"} bg={"#292524"}>
                Consumer Utility
              </Button>
            </Flex>
            <Flex align="center" mt={10}>
              {p_socials.map((social, index) => (
                <Link key={index} href={social.href} passHref>
                  <social.icon
                    size={17}
                    style={{ marginRight: "20" }}
                    color="white"
                  />
                </Link>
              ))}
            </Flex>
          </Box>
          <Spacer />
          <Box as="div" width={"40%"} mt={10}>
            <Image
              alt="Picture of Verify home page"
              src="/assets/nhs2.png"
              width={400}
              height={400}
            />
          </Box>
        </Flex>

        <Link href="/projects"  color="pink">See More...</Link>
      </Box>
    </Container>
  );
};

export default Projects;
