"use client";

import BlogContent from "@/components/Blog/BlogContent";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import BlogThirdColumn from "@/components/Blog/BlogThirdColumn";
import { Container, Grid } from "@chakra-ui/react";
// import { Tabs } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Container maxW={{ base: "2xl", md: "7xl" }} my={12}>
      {/* <Tabs.Root variant="unstyled" display="flex" height="calc(100vh - 120px)"> */}
      <Grid templateColumns="0.7fr 2fr 0.6fr" gap={6} width="100%" pt={4}>
        <BlogSidebar />
        <BlogContent />
        <BlogThirdColumn />
      </Grid>
      {/* </Tabs> */}
    </Container>
  );
}
