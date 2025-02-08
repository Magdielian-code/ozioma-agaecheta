import React from "react";
import { 
  GridItem, 
  TabList, 
  Tab, 
  Divider 
} from "@chakra-ui/react";
import OtherProjectsCard from "./OtherProjectsCard";

const BlogSidebar: React.FC = () => {
  const tabStyles = {
    color: "white",
    _selected: {
      bg: "#E7BC91",
      fontWeight: "bold",
      color: "black",
    },
    px: 4,
    py: 3,
    textAlign: "left" as const,
  };

  const tabs = [
    "Tech and Business", 
    "Religion and Theology", 
    "Lifestyle"
  ];

  return (
    <GridItem
      borderRight="7px solid #292524"
      bg="#1c1917"
      maxH="calc(100vh - 120px)"
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-track": { width: "6px" },
        "&::-webkit-scrollbar-thumb": { 
          background: "#E7BC91", 
          borderRadius: "24px" 
        },
      }}
    >
      <TabList
        display="flex"
        justifyContent="flex-center"
        flexDirection="column"
        border="none"
      >
        {tabs.map((tab, index) => (
          <Tab key={index} {...tabStyles}>
            {tab}
          </Tab>
        ))}
        
        <Divider mt={4} color="white" />
        <OtherProjectsCard />
      </TabList>
    </GridItem>
  );
};

export default BlogSidebar;