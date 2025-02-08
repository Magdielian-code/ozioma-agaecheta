import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import Container from "@/components/Container";
import Image from "next/image";

const topics = [
  "Open Source",
  "Design Systems",
  "Entrepreneurship", 
  "SaaS",
  "Startups",
  "Ecosystem",
  "Technology",
  "Innovation",
  "Education",
  "Engineering",
  "Media",
  "IoTs",
  "Infrastructure-as-a-Service"
];

const talks = [
  {
    title: "User-centered Engineering",
    event: "Borderless 3.0 Conference",
    date: "November 1, 2024",
    location: "Port Harcourt, Nigeria",
    description:
      "Exploring ethical considerations and responsible development in artificial intelligence technologies.",
    tags: ["WEB3", "ENGINEERING", "Technology"],
    image: "/assets/img5.jpg",
  },
  {
    title: "Meta Idea",
    event: "Hackaholics 5.0 Conference",
    date: "July 6, 2024",
    location: "Port Harcourt, Nigeria",
    description:
      "Exploring ethical considerations and responsible development in artificial intelligence technologies.",
    tags: ["hackaholics", "Startups", "Technology"],
    image: "/assets/img1.jpg",
  },
  {
    title: "EduTech: A Tool for Bridging Innovation",
    event: "South South Media Week",
    date: "April 20, 2024",
    location: "Port Harcourt, Nigeria",
    description:
      "Preparing Africa's youth for the future of work through technology and innovation.",
    tags: ["edu-tech", "media", "innovation"],
    image: "/assets/img9.jpg",
  },
  
];

const Talks: React.FC = () => {
  return (
    <Container>
      <Box>
        <Heading fontSize="4xl" fontWeight="bold" mt={40} mb={10} color="#ffffff">
          Conference Talks & Presentations
        </Heading>
        <Text maxW={"84%"} mb={10}>
          I speak at conferences and events each year. Most of my talks are live
          coding, demoing sessions or I am advocating for better education for african youths, building better ecosystem for founders/entrepreneurs in Africa. which can be scary but fun!
        </Text>
        <Flex align="center" mb={10} flexWrap={"wrap"} gap={3}>
          {topics.map((topic, index) => (
            <Button key={index} size={"sm"} bg={"#292524"} _hover={{ bg: "#292524", color: "#E7BC91" }}>
              {topic}
            </Button>
          ))}
        </Flex>
        <VStack spacing={6} align="stretch">
          {talks.map((talk, index) => (
            <Card key={index} bg="#1c1917" color="white" border="1px solid #44403c">
              <CardBody>
                <Flex>
                  <Box width="40%" mr={5}>
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      width={400}
                      height={300}
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box width="70%">
                    <Heading as="h3" size="lg" color="#E7BC91" mb={3}>
                      {talk.title}
                    </Heading>
                    <Flex justifyContent="space-between" alignItems="left" flexDir={"column"} mb={12}>
                      <Text fontSize="md">{talk.event}</Text>
                      <Text fontSize="sm" color="gray.400">{talk.date}</Text>
                    </Flex>
                    <Text mb={4}>{talk.description}</Text>
                    <Flex gap={2}>
                      {talk.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} colorScheme="orange" variant="subtle">
                          {tag}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default Talks;