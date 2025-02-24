import React from "react";
import {
  GridItem,
  Heading,
  Stack,
  Box,
  Text
} from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import Link from "next/link";
import { OTHER_PROJECTS } from "./BlogConstants";

const BlogThirdColumn: React.FC = () => {
  return (
    <GridItem bg="#1c1917">
      <Card.Root bg={"#1c1917"} color={"#ffffff"}>
        <Card.Header>
          <Heading size="md">Other Projects</Heading>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            {OTHER_PROJECTS.map((project, index) => (
              <Box key={index}>
                <Link href={project.link}>
                  Custom Unix Shell
                </Link>
                <Text pt="2" fontSize="sm">
                  {project.description}
                </Text>
                {index < OTHER_PROJECTS.length - 1 && <Separator />}
              </Box>
            ))}
          </Stack>
        </Card.Body>
      </Card.Root>
    </GridItem>
  );
};

export default BlogThirdColumn;