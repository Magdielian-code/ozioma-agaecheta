import React from "react";
import { 
  Card, 
  CardBody, 
  Stack, 
  Text, 
  HStack, 
  CardFooter, 
  Heading 
} from "@chakra-ui/react";
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
  <Card
    maxW="xs"
    maxH="xs"
    bg="#1c1917"
    color="#ffffff"
    _hover={{ bg: "#292524" }}
  >
    <CardBody>
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
    </CardBody>
  </Card>
);

export const TheoCard: React.FC<BlogCardProps> = ({ 
  title, 
  link, 
  date 
}) => (
  <Card
    borderBottom="2px solid #E7BC91"
    mb={4}  
    maxW="xs"
    maxH="xs"
    bg="#1c1917"
    color="#ffffff"
    _hover={{ bg: "#292524" }}
  >
    <CardBody>
      <Stack>
        <Link href={link}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
        </Link>
        {date && <Text>{date}</Text>}
      </Stack>
    </CardBody>
  </Card>
);

export const LifestyleCard: React.FC<BlogCardProps> = ({ 
  image, 
  imageAlt, 
  title, 
  body, 
  link, 
  date 
}) => (
  <Card
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
        <CardBody>
          <Heading size="md">{title}</Heading>
          {body && (
            <Text py="2" color="#E7BC91">
              {body}
            </Text>
          )}
        </CardBody>
        {date && (
          <CardFooter>
            <Text>{date}</Text>
          </CardFooter>
        )}
      </Link>
    </HStack>
  </Card>
);