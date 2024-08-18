'use client';   

import { Box, Avatar, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import Container from "@/components/Container";

const About = () => {
  return (
   <Container>
     <Flex 
        as='div'
        align={'center'}
        mt={{base:10, md:40}}
     >
        <Flex>
            <Avatar
                name='Ozipma Agaecheta' 
                src='/assets/me2.jpeg' 
                display={{ base:"none", md: "block" }}
                size='xl' 
            />
            <Heading as={'h1'} ml={3} fontSize={{base:'40px', md:'80px'}}>
                I build things for the web
            </Heading>
        </Flex>
    </Flex>
   </Container>

)

}
export default About