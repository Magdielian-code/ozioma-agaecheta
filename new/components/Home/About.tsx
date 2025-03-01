'use client';   

import Container from "@/components/Container";
import Socials from '@/components/Utils/Socials';
import { Box, Image } from '@chakra-ui/react';


const About = () => {
  return (
   <Container>
    <Box as='div' mt={{ base:'20', md:'40'}} id="about" className="flex flex-col lg:flex-row">
      <Box as='div' maxW={{ base:'100%', md:'50%'}} className="lg:block" >
        <Image
          alt='Ozioma Agaecheta' 
          src='/assets/me2.jpeg' 
          width={94}
          height={94}
          className="float-left mr-4 rounded-full hidden lg:flex"
        />
        <Box as='div' className="font-bold text-5xl md:text-7xl lg:text-8xl">
          I build <span style={{color:'#E7BC91'}}>software solutions</span>
        </Box>
      </Box>
      <Box as='div' maxW={{ base:'100%', md:'60%'}} className="py-8 lg:p-0 lg:pl-40">
        <Box as='div'  className="text-lg/8 lg:text-xl/10">
        With over 4 years of experience dedicated to learning and creating
        professional and brand-focused software and online solutions in
        diverse environments aimed at enhancing brand&apos;s online presence.
        </Box>
        <Socials/>
      </Box>
    </Box>
   </Container>

)

}
export default About