import React from "react";
import { 
  GridItem, 
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

const BlogThirdColumn: React.FC = () => {
  return (
    <GridItem bg="#1c1917">
      <Card bg={"#1c1917"} color={"#ffffff"}>
        <CardHeader>
          <Heading size="md">Other Projects</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {OTHER_PROJECTS.map((project, index) => (
              <Box key={index}>
                <Link href={project.link}>
                  Custom Unix Shell
                </Link>
                <Text pt="2" fontSize="sm">
                  {project.description}
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default BlogThirdColumn;