"use client";
import {
  Box,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react";
import { Tabs } from "@chakra-ui/react";

import Container from "@/components/Container";
import tools, { Tool } from "@/components/Utils/Tools";

export const categories = [
  { name: "Programming Languages", type: "Languages" },
  { name: "Frameworks/Libraries", type: "Frameworks/Libraries" },
  { name: "Databases", type: "Databases" },
  { name: "Cloud/DevOps", type: "Cloud/DevOps" },
  { name: "Tools", type: "Tools" },
];

const Skillset = () => {

  return (
    <Container>
      <Box mt={40}>
        <Text fontSize={'4xl'} fontWeight={'bold'}>Tools and Software</Text>
        <Text mt={4} color={'#E7BC91'}>In the course of my career, I have worked with the following tools and software<br /> some briefly, while others very intensively.</Text>
        
        <Tabs.Root mt={10} color={'#E7BC91'} defaultValue={categories[0].name}>
          <Tabs.List borderBottomColor={"transparent"}  gap={6}>
            {categories.map((category) => (
              <Tabs.Trigger value={category.name} key={category.name}>{category.name}</Tabs.Trigger>
            ))}
           
          </Tabs.List>

          {categories.map((category) => (
            <Tabs.Content value={category.name} key={category.name}>
              <Grid
                templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
                gap={6}
              >
                {tools
                  .filter((tool) => tool.type === category.type)
                  .map((tool: Tool) => (
                    <GridItem key={tool.name} textAlign="left">
                      <tool.icon size={40} color={tool.color} />
                      <Box mt={2}>{tool.name}</Box>
                    </GridItem>
                  ))}
              </Grid>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Skillset;
