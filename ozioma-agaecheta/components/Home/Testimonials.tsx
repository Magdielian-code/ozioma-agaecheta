"use client";

import Container from "@/components/Container";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { SiLinkedin } from "@icons-pack/react-simple-icons";

// Testimonial data structure
const testimonials = [
  {
    name: "Harsh Kumar",
    position: "CEO, Incupie",
    content: "View a summary of all your customers over the last month.",
    linkedIn: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
    rowSpan: 4
  },
  {
    name: "Harsh Kumar",
    position: "CEO, Incupie",
    content: "View a summary of all your Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium repellendus expedita maiores, facere accusantium delectus! Facilis voluptates est, praesentium ullam maxime, nesciunt repellendus tenetur qui molestias, esse pariatur id. customers over the last month.",
    linkedIn: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
    rowSpan: 8
  },
  {
    name: "Harsh Kumar",
    position: "CEO, Incupie",
    content: "View a summary of all your Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium repellendus expedita maiores, facere accusantium delectus! Facilis voluptates est, praesentium ullam maxime, nesciunt repellendus tenetur qui molestias, esse pariatur id. customers over the last month.",
    linkedIn: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
    rowSpan: 8
  },
  {
    name: "Harsh Kumar",
    position: "CEO, Incupie",
    content: "View a summary of all your customers over the last month.",
    linkedIn: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
    rowSpan: 4
  },
  
];


interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  linkedIn: string;
  rowSpan: number;
}

const TestimonialCard = ({ name, position, content, linkedIn, rowSpan }: TestimonialCardProps) => (
  <GridItem borderRadius={10} rowSpan={rowSpan} bg="#292524">
    <Card background="#292524" color="#fff" borderRadius={10}>
      <CardHeader>
        <Flex align="center" gap={2} flex="1" flexWrap="wrap">
          <Avatar src="" size="md" />
          <VStack align="left" gap={0.5}>
            <Heading size="sm" fontWeight="bold">
              {name}
            </Heading>
            <Text fontSize="sm" gap={2}>
              {position}
            </Text>
          </VStack>
          <Spacer />
          <Link href={linkedIn}>
            <HStack>
              <SiLinkedin size={15} color="#E7BC91" />
              <Text decoration="underline" color="#E7BC91">
                LinkedIn
              </Text>
            </HStack>
          </Link>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
      </CardBody>
    </Card>
  </GridItem>
);

const Testimonials = () => {
  return (
    <Container>
      <Text fontSize="4xl" fontWeight="bold" mt={40}>
        Testimonials
      </Text>
      <Box mt={10}>
        <Grid
          templateRows="repeat(12, 4fr, 8fr, 8fr, 4fr)"
          templateColumns="repeat(2, 1fr)"
          gap={6}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonials;