import React from "react";
import {
  GridItem,
} from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";
import { Tabs } from "@chakra-ui/react";
import OtherProjectsCard from "./OtherProjectsCard";

const BlogSidebar: React.FC = () => {
  const tabStyles = {
    color: "white",
    _selected: {
      color: "#E7BC91",
      fontWeight: "bold",
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
      <Tabs.List
        display="flex"
        justifyContent="flex-center"
        flexDirection="column"
        border="none"
      >
        {tabs.map((tab, index) => (
          <Tabs.Trigger value={String(index)} key={index} {...tabStyles}>
            {tab}
          </Tabs.Trigger>
        ))}

        <Separator mt={4} color="white" />
        <OtherProjectsCard />
      </Tabs.List>
    </GridItem>
  );
};

export default BlogSidebar;