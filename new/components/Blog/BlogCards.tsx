import React from "react";
import {
  Stack,
  Text,
  HStack,
  CardFooter,
  Heading
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BlogCardProps } from "./BlogConstants";

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  imageAlt,
  title,
  link,
  date
}) => (
  <Card.Root
    maxW="xs"
    maxH="xs"
    bg="#1c1917"
    color="#ffffff"
    _hover={{ bg: "#292524" }}
  >
    <Card.Body>
      <Stack>
        <Link href={link}>
          {image && (
            <Image
              src={image}
              alt={imageAlt || title}
              width={300}
              height={50}
            />
          )}
          <h2 className="text-xl font-bold mb-2">{title}</h2>
        </Link>
        {date && <Text>{date}</Text>}
      </Stack>
    </Card.Body>
  </Card.Root>
);

export const TheoCard: React.FC<BlogCardProps> = ({
  title,
  link,
  date
}) => (
  <Card.Root
    borderBottom="2px solid #E7BC91"
    mb={4}
    maxW="xs"
    maxH="xs"
    bg="#1c1917"
    color="#ffffff"
    _hover={{ bg: "#292524" }}
  >
    <Card.Body>
      <Stack>
        <Link href={link}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
        </Link>
        {date && <Text>{date}</Text>}
      </Stack>
    </Card.Body>
  </Card.Root>
);

export const LifestyleCard: React.FC<BlogCardProps> = ({
  image,
  imageAlt,
  title,
  body,
  link,
  date
}) => (
  <Card.Root
    mt={10}
    size="sm"
    direction={{ base: "column" }}
    objectFit="cover"
    bg="#1c1917"
    color="#ffffff"
    _hover={{ bg: "#292524" }}
  >
    <HStack>
      {image && (
        <Image
          width={200}
          height={100}
          src={image}
          alt={imageAlt || title}
        />
      )}
      <Link href={link}>
        <Card.Body>
          <Heading size="md">{title}</Heading>
          {body && (
            <Text py="2" color="#E7BC91">
              {body}
            </Text>
          )}
        </Card.Body>
        {date && (
          <CardFooter>
            <Text>{date}</Text>
          </CardFooter>
        )}
      </Link>
    </HStack>
  </Card.Root>
);