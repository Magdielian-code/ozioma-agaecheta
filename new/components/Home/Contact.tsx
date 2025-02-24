import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";
import Container from "@/components/Container";
import React from "react";

const Contact = () => {
  return (
    <Container>
      <Box mt={20}>
        <Separator/>
        <Text
          fontSize={{ base: "md", md: "5xl" }}
          fontWeight={"bold"}
          mt={20}
          color={"#fff"}
          textAlign={"left"}
        >
          Stay up to date!
        </Text>
        <Text
          fontSize={{ base: "md", md: "md" }}
          mt={5}
          color={"#fff"}
          textAlign={"left"}
        >
          Get emails from me about web development, tech, and <br/> early access to new projects.
        </Text>
        <HStack mt={10}>
        <Input  width={{base:'sm'}} border={'2px solid white'} size={'lg'} borderColor='#E7BC91' placeholder='youremail@gmail.com' />
        <Button backgroundColor='#E7BC91' color={'#000000'} size='lg'>Subscribe</Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default Contact;
