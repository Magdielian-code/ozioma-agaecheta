// looking for the corresponding file (MODAL) in the Chakra UI component library online

"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Flex,

  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
// import {
//   Modal,
// } from "@chakra-ui/react";
import {
  FaCode,
  FaThumbtack,
  FaChartLine,
  FaBook,
  FaUsers,
  FaComments
} from "react-icons/fa";

const ConsultingServices = [
  {
    icon: FaCode,
    title: "Technical Strategy",
    description:
      "Comprehensive technical roadmapping and architecture consulting to align your technology with business goals.",
    details:
      "Develop scalable solutions, optimize tech stack, and create strategic technology frameworks tailored to your unique business needs.",
  },
  {
    icon: FaThumbtack,
    title: "Product Development",
    description:
      "End-to-end product development consultation from ideation to market launch.",
    details:
      "Guide you through product lifecycle, validate market fit, design user-centric experiences, and develop minimum viable products (MVPs).",
  },
  {
    icon: FaChartLine,
    title: "Business Growth",
    description:
      "Strategic consulting to accelerate your startup or business growth.",
    details:
      "Provide market analysis, competitive positioning, revenue models, and growth hacking strategies to scale your business effectively.",
  },
  {
    icon: FaBook,
    title: "Learning & Development",
    description:
      "Custom training and skill development programs for teams and individuals.",
    details:
      "Design specialized workshops, provide technical mentorship, and create learning pathways to upskill your workforce.",
  },
  {
    icon: FaUsers,
    title: "Team Augmentation",
    description:
      "Flexible technical talent solutions to complement your existing team.",
    details:
      "Provide expert consultants and developers to fill skill gaps, accelerate project timelines, and bring specialized expertise.",
  },
  {
    icon: FaComments,
    title: "Strategic Advising",
    description:
      "Personalized advisory services for technology and business leadership.",
    details:
      "Offer one-on-one consulting, help navigate complex technical decisions, and provide actionable insights for sustainable growth.",
  },
];

const Consulting: React.FC = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(ConsultingServices[0]);

  const gridColumns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  });

  const headingSize = useBreakpointValue<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl">({
    base: "xl",
    md: "2xl",
  });

  const handleServiceClick = (service: (typeof ConsultingServices)[number]) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <Box
      bg="#1c1917"
      color="white"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 0 }}
    >
      <Container maxW="container.xl">
        <VStack gap={8} textAlign="center" mb={12}>
          <Heading mt={20} as="h1" size={headingSize} color="#E7BC91">
            Strategic Consulting Services
          </Heading>
          <Text maxW="700px" fontSize={{ base: "md", md: "lg" }}>
            Transforming complex challenges into strategic opportunities through
            personalized, cutting-edge technology and business consulting.
          </Text>
        </VStack>

        <SimpleGrid columns={gridColumns} gap={{ base: 4, md: 6 }}>
          {ConsultingServices.map((service) => (
            <Card.Root
              key={service.title}
              bg="#292524"
              color="white"
              border="1px solid #44403c"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              onClick={() => handleServiceClick(service)}
            >
              <Card.Body textAlign="center">
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  height="100%"
                >
                  <service.icon size={40} color="#E7BC91" />
                  <Heading as="h3" size="md" mt={4} mb={2} color="#E7BC91">
                    {service.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {service.description}
                  </Text>
                </Flex>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* <Modal
          isOpen={open}
          onClose={onClose}
          size={{ base: "full", md: "xl" }}
        >
          <Modal.Overlay />
          <Modal.Content
            bg="#1c1917"
            color="white"
            m={{ base: 0, md: "auto" }}
            h={{ base: "100%", md: "auto" }}
          >
            <Modal.Header>
              <Flex align="center" gap={4}>
                <selectedService.icon size={32} color="#E7BC91" />
                <Heading
                  as="h3"
                  size={{ base: "md", md: "lg" }}
                  color="#E7BC91"
                >
                  {selectedService.title}
                </Heading>
              </Flex>
            </Modal.Header>
            <Modal.CloseButton />
            <Modal.Body>
              <Text fontSize={{ base: "md", md: "lg" }}>
                {selectedService.details}
              </Text>
            </Modal.Body>
            <Modal.Footer
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 0 }}
            >
              <Button
                colorScheme="orange"
                mr={{ base: 0, md: 3 }}
                mb={{ base: 3, md: 0 }}
                w={{ base: "full", md: "auto" }}
                onClick={() => (window.location.href = "/contact")}
              >
                Book Consultation
              </Button>
              <Button
                variant="ghost"
                onClick={onClose}
                color={'#ffffff'}
                w={{ base: "full", md: "auto" }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal> */}
      </Container>
    </Box>
  );
};

export default Consulting;