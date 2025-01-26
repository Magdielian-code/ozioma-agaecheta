"use client";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  extendTheme,
  Text,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import Container from "@/components/Container";
import React from "react";
import tools, { Tool } from "@/components/Utils/Tools";
import { transferableAbortController } from "util";

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
     <Text mt={4} color={'#E7BC91'}>In the course of my career, I have worked with the following tools and software<br/> some briefly, while others very intensively.</Text>
      <Tabs mt={10} color={'#E7BC91'}>
        <TabList borderBottomColor={"transparent"}>
          {categories.map((category) => (
            <Tab key={category.name}>{category.name}</Tab>
          ))}
        </TabList>

        <TabPanels pt={10}>
          {categories.map((category) => (
            <TabPanel key={category.name}>
              <Grid
                templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
                gap={6}
              >
                {tools
                  .filter((tool) => tool.type === category.type)
                  .map((tool: Tool) => (
                    <GridItem key={tool.name}  textAlign="left">
                      <tool.icon size={40} color={tool.color} />
                      <Box mt={2}>{tool.name}</Box>
                    </GridItem>
                  ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
     </Box>
    </Container>
  );
};

export default Skillset;
