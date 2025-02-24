"use client";

import Container from "@/components/Container";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  Text
} from "@chakra-ui/react";
import {
  faAddressBook,
  faDiagramProject,
  faHouse,
  faMicrophone,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";

const navMenuLinks = [
  { name: "Home", href: "/", icon: faHouse },
  { name: "Talks", href: "/talks", icon: faMicrophone },
  { name: "Blog", href: "/blog", icon: faPen },
  { name: "Projects", href: "/projects", icon: faDiagramProject },
  { name: "Consulting", href: "/consulting", icon: faAddressBook },
];

export default function Nav() {
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();

  return (
    <Box
      w={"100%"}
      top={0}
      zIndex={1000}
      bg={"#1c1917"}
      position={{ base: "fixed", md: "fixed" }}
      bottom={{ base: scrollDirection === "down" ? "-100%" : "0", md: "auto" }}
      left={"0"}
      borderTop={{ base: "0.5px solid #E2E8F0", md: "none" }}
      transition="bottom 0.3s"
    >
      <Container>
        <Box>
          <Flex align={"center"} display={{ base: "none", md: "flex" }}>
            <Avatar.Root size="sm">
              <Avatar.Fallback
                name="Ozioma Agaecheta"
                display={{ base: "block", md: "none" }}
                style={{ border: "2px solid #E7BC91" }}
              />
              <Avatar.Image src="/assets/me2.jpeg" />
            </Avatar.Root>

            <Spacer />

            <Flex gap="4" justifyContent="end">
              {navMenuLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    style={{ border: "none" }}
                    variant="outline"
                    bg={pathname === link.href ? "#E7BC91" : "transparent"}
                    fontWeight={pathname === link.href ? "bold" : "normal"}
                    _hover={{
                      fontWeight: 'bold',
                      bg: "#E7BC91",
                      color: "#000000",
                      "& svg": { color: "#000000" },
                      "& span": { color: "#000000" }
                    }}
                    _selected={{
                      fontWeight: 'bold',
                      bg: "#E7BC91",
                      color: "#000000",
                      "& svg": { color: "#000000" },
                      "& span": { color: "#000000" }
                    }}
                    className={pathname === link.href ? "font-bold bg-[#E7BC91] text-black px-4 py-2 hover:text-black" : "px-4 py-2 hover:text-black"}
                  >
                    <Flex align="center">
                      <FontAwesomeIcon
                        icon={link.icon}
                        size="xs"
                        color={pathname === link.href ? "black" : "white"}
                        style={{
                          transition: "color 0.3s ease"
                        }}
                        className={pathname === link.href ? "mr-[8px] bg-transparent text-black" : "mr-[8px] group-hover:bg-black text-[#E7BC91] group-hover:text-black"}
                      />
                      <Text
                        as="span"
                        color={pathname === link.href ? "black" : "white"}
                        fontWeight="light"
                        fontSize="sm"
                      >
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
            zIndex={1}
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
                _hover={{
                  "& svg": { color: "#000000" },
                  "& p": { color: "#E7BC91" }
                }}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  style={{ color: "#E7BC91", transition: "color 0.3s ease", fontSize: "16px" }}
                />
                <Text color={pathname === link.href ? "black" : "white"} fontSize="xs">
                  {link.name}
                </Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};