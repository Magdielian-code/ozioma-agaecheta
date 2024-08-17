"ui client";
import { Box, others } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Container = ({ children, id = "", className = "" }: ContainerProps) => {
  return (
    <Box  
      mx="auto"
      p={2}
      className={className}
      id={id}
      maxW={{ base: "2xl", md: "4xl", lg: "5xl", xl: "9xl" }}
    
    >
      {children}
    </Box>
  );
};

export default Container;