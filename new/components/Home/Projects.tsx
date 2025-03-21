import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Container from "@/components/Container";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

// Types
type Social = {
  href: string;
  icon: any;
}

type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
}

// Project Data
const SOCIALS: Social[] = [
  {
    href: "https://www.linkedin.com/showcase/advoscholar/about/?viewAsMember=true",
    icon: faLinkedin,
  },
  {
    href: "https://x.com/advoscholar_jil",
    icon: faXTwitter,
  },
  {
    href: "mailto:advoscholar.jil@gmail.com",
    icon: faGoogle,
  },
];

const PROJECTS: Project[] = [
  {
    title: "AdvoScholar",
    description: "AdvoScholar by Jupytec is revolutionizing African education through our comprehensive school management platform.",
    technologies: ["NextJS", "Postgres", "Education"],
    imageSrc: "/assets/advoscholar.png",
    imageAlt: "Picture of Advoscholar home page"
  },
  {
    title: "Verify",
    description: "Created to combat the rising tide of counterfeit goods and ensure regulatory compliance, we're bringing transparency and trust to markets worldwide.",
    technologies: ["Flutter", "Firebase", "Flask API", "Consumer Utility"],
    imageSrc: "/assets/nhs2.png",
    imageAlt: "Picture of Verify home page"
  }
];


const TechnologyButton = ({ name }: { name: string }) => (
  <Button size="sm" px={2} bg="#292524">
    {name}
  </Button>
);

const SocialLinks = () => (
  <Flex align="center" mt={10}>
    {SOCIALS.map((social, index) => (
      <Link key={index} href={social.href} passHref>
        <FontAwesomeIcon
          icon={social.icon}
          size="1x"
          style={{ marginRight: "20px" }}
          color="white"
        />
      </Link>
    ))}
  </Flex>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <Flex width="100%" mt={10}>
    <Box as="div" width="35%" mt={10}>
      <Text fontSize="2xl" fontWeight="bold" color="#E7BC91">
        {project.title}
      </Text>
      <Text fontSize="md">{project.description}</Text>
      <Flex align="center" mt={5} flexWrap="wrap" gap={3}>
        {project.technologies.map((tech, index) => (
          <TechnologyButton key={index} name={tech} />
        ))}
      </Flex>
      <SocialLinks />
    </Box>
    <Spacer />
    <Box as="div" width="40%" mt={10}>
      <Image
        alt={project.imageAlt}
        src={project.imageSrc}
        width={400}
        height={400}
      />
    </Box>
  </Flex>
);

const Projects = () => {
  return (
    <Container>
      <Box>
        <Text fontSize="4xl" fontWeight="bold" mt={40}>
          Featured Projects
        </Text>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <Link href="/projects" color="pink">See More...</Link>
      </Box>
    </Container>
  );
};

export default Projects;