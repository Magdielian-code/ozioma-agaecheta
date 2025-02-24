import React from "react";
import {
  Heading,
  Box,
  Text,
  Separator
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import { OTHER_PROJECTS } from "./BlogConstants";

const OtherProjectsCard: React.FC = () => (
  <Card.Root bg="#1c1917" color="#ffffff">
    <Card.Header>
      <Heading size="md">Other Projects</Heading>
    </Card.Header>
    <Card.Body>
      <Stack gap="4">
        {OTHER_PROJECTS.map((project, index) => (
          <Box key={index}>
            <Separator />
            <Link href={project.link} target="_blank">
              {project.title}
            </Link>
            <Text pt="2" fontSize="sm">
              {project.description}
            </Text>
          </Box>
        ))}
      </Stack>
    </Card.Body>
  </Card.Root>
);

export default OtherProjectsCard;