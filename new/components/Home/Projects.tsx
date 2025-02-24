import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Container from "@/components/Container";
import React from "react";
import Image from "next/image";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export const p_socials = [
  {
    href: "https://www.linkedin.com/showcase/advoscholar/about/?viewAsMember=true",
    icon: faLinkedin,
  },
  {
    href: "https://x.com/advoscholar_jil",
    icon: faXTwitter,
  },
  {
    href: "mailto:advoscholar.jil@gmail.com",
    icon: faGoogle,
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
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="1x"
                    style={{ marginRight: "20px" }}
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
              regulatory compliance, we&apos;re bringing transparency and trust to
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
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="1x"
                    style={{ marginRight: "20px" }}
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
