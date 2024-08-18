'use client';   

import { Box, Flex, Spacer, Image } from '@chakra-ui/react';
import React from 'react';
import Container from "@/components/Container";

const About = () => {
  return (
   <Container>
    <Flex 
        as='div'
         className="flex flex-col lg:flex-row"        
    >
        <Flex as={'div'} className="lg:block"> 
            <Image
                alt='Ozioma Agaecheta' 
                src='/assets/me2.jpeg' 
                w={94}
                h={94}
                className="float-left mr-4 rounded-full hidden  lg:flex"    
            />
            <Box 
                as={'div'}  
                className="font-bold text-5xl md:text-7xl lg:text-8xl"
            >
                I build <span style={{color:'#E7BC91'}}>software solutions</span>         
            </Box> 
        </Flex>
        <Spacer />
        <Flex as={'div'} className="py-8 lg:p-0 lg:pl-40">
            <Box as='div'  className="text-lg/8 lg:text-xl/10">
                With over 3 years of experience dedicated to learning and creating
                professional and brand-focused software and online solutions in
                diverse environments aimed at enhancing brand's online presence.
            </Box>
        </Flex>
    </Flex>
   </Container>

)

}
export default About