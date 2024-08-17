"use client";
import Home from "@/app/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMicrophone,
  faPen,
  faDiagramProject,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Icon,
  Text,
} from "@chakra-ui/react";

const navMenuLinks = [
  { name: "Home", href: "/", icon: faHouse },
  { name: "Talks", href: "/talks", icon: faMicrophone },
  { name: "Blog", href: "/blog", icon: faPen },
  { name: "Projects", href: "/projects", icon: faDiagramProject },
  { name: "Consulting", href: "/consulting", icon: faAddressBook },
];

export const Nav = () => {
  return (
    <Box
      w={"100%"}
      position={{ base: "fixed", md: "relative" }}
      bottom={"0"}
      left={"0"}
      borderTop={{ base: "2px solid #E2E8F0", md: "none" }}
    >
      <Container>
        <Box>
          <Flex my={"6"} display={{ base: "none", md: "flex" }}>
            <Avatar 
              name="Ozioma Agaecheta" 
              src="/assets/me2.jpeg" 
              size={"sm"}
              style={{ border: "2px solid #A47148" }}
            
            />

            <Spacer />
            
            <Flex gap="4" justifyContent="end">
              {navMenuLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    style={{ border: "none" }}
                    variant="outline"
                    colorScheme="brown"
                    size="md"
                  >
                    <Flex align="center">
                      <FontAwesomeIcon
                        icon={link.icon}
                        size="xs"
                        style={{ color: "A47148", marginRight: "8px" }}
                      />
                      <Text color="white" fontWeight="light" fontSize="sm">
                        {link.name}
                      </Text>
                    </Flex>
                  </Button>
                </Link>
              ))}
            </Flex>
          </Flex>

          {/*  Mobile View*/}
          <Flex
            w={"100%"}
            display={{ base: "flex", md: "none" }}
            justifyContent={"space-around"}
          >
            {navMenuLinks.map((link) => (
              <Link
                justifyContent="center"
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                key={link.href}
                href={link.href}
              >
                <Icon as={FontAwesomeIcon} icon={link.icon} boxSize={6} />
                <Text>{link.name}</Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
