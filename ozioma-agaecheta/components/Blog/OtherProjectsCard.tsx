import React from "react";
import { 
  Card, 
  CardHeader, 
  Heading, 
  CardBody, 
  Stack, 
  StackDivider, 
  Box, 
  Text 
} from "@chakra-ui/react";
import Link from "next/link";
import { OTHER_PROJECTS } from "./BlogConstants";

const OtherProjectsCard: React.FC = () => (
  <Card bg="#1c1917" color="#ffffff">
    <CardHeader>
      <Heading size="md">Other Projects</Heading>
    </CardHeader>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        {OTHER_PROJECTS.map((project, index) => (
          <Box key={index}>
            <Link href={project.link}>
              {project.title}
            </Link>
            <Text pt="2" fontSize="sm">
              {project.description}
            </Text>
          </Box>
        ))}
      </Stack>
    </CardBody>
  </Card>
);

export default OtherProjectsCard;