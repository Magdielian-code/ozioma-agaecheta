'use client';

import React from 'react';
import { Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { 
  SiLinkedin,
  SiGithub,
  SiX,
  SiGmail,
  SiYoutube,
  SiGoogledocs
} from '@icons-pack/react-simple-icons';

export const socials = [   
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/', 
    icon: SiLinkedin
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/Magdielian-code', 
    icon: SiGithub
  },
  { 
    name: 'Twitter', 
    href: 'https://x.com/magdiel_amor', 
    icon: SiX
  },
  { 
    name: 'Email', 
    href: 'mailto:iamoziomaagaecheta@gmail.com', 
    icon: SiGmail
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/@ocagaecheta?feature=shared', 
    icon: SiYoutube
  },
  { 
    name: 'Resume', 
    href: 'https://docs.google.com/document/d/13vUzdjZVFPpe5n7ydDjwHywxaVZMA3THi-Ci7Msm6V0/edit?usp=sharing', 
    icon: SiGoogledocs
  }
];

export const Socials = () => {
  return (
    <SimpleGrid mt={6} columns={3} gapY={6} gapX={10}>
      {socials.map((link) => (
        <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
          <Flex align="center">
            <link.icon 
              size={20}
              color="#E7BC91"
            />
            <Text 
              ml={2} 
              color="white" 
              fontWeight="light" 
              fontSize="sm"
            >
              {link.name}
            </Text>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  );
}

export default Socials;