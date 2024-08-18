'use client';   

import { Box, Avatar, Heading, Flex, Text, HStack, VStack } from '@chakra-ui/react';
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
        <Flex 
            flexDirection={{ base:"column", md:"row"}}
        >
            <Box as='div'>
            <Avatar
                name='Ozipma Agaecheta' 
                src='/assets/me2.jpeg' 
                display={{ base:"none", md: "block" }}
                size='xl' 
                
            />
            <Heading 
                as={'h1'}  
                float={'left'} 
                ml={3} 
                fontSize={{base:'40px', md:'80px'}}
                
            >
                I build <span style={{color:'#E7BC91'}}>software solutions</span>         
            </Heading> 
            
            </Box>
        </Flex>
            
        <Flex>
            <Text>
                With over 3 years of experience dedicated to learning and creating
                professional and brand-focused software and online solutions in
                diverse environments aimed at enhancing brand's online presence.
            </Text>
        </Flex>
    </Flex>
   </Container>

)

}
export default About