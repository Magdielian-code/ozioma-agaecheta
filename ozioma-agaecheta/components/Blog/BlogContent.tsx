"use client";
import React, { useState, useEffect } from "react";
import {
  GridItem,
  Skeleton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  Tabskra-ui/tabs";

import Image from "next/image";
import Link from "next/link";
import { BlogCard, TheoCard, LifestyleCard } from "./BlogCards";
import {
  BLOG_IMAGES,
  BLOG_CARDS,
  THEO_CARDS,
  LIFESTYLE_CARDS,
} from "./BlogConstants";

const BlogContent: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === BLOG_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
      setIsImageLoading(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GridItem
      borderRight="7px solid #292524"
      bg="#1c1917"
      maxH="calc(100vh - 120px)"
      overflow="auto"
    >
      <TabPanels>
        <TabPanel color="white" p={4}>
          <FeaturedImage
            image={BLOG_IMAGES[currentImageIndex]}
            isLoading={isImageLoading}
            onLoadComplete={() => setIsImageLoading(false)}
          />
          <FeaturedArticle
            title="Diary of a Young Entrepreneur"
            link="/blog-article"
            excerpt="The meaning of life is to find your gift..."
          />
          <Divider my={4} />
          <Text mt={10} fontSize="lg" fontWeight="bold">
            Tech
          </Text>
          <SimpleGrid columns={2}>
            {BLOG_CARDS.map((card) => (
              <BlogCard key={card.id} {...card} />
            ))}
          </SimpleGrid>
        </TabPanel>

        <TabPanel color="white">
          <FeaturedImage
            image="/assets/sov.webp"
            isLoading={isImageLoading}
            onLoadComplete={() => setIsImageLoading(false)}
          />
          <FeaturedArticle
            title="Theology Insights"
            link="/theology-article"
            excerpt="Exploring spiritual perspectives..."
          />
          <Divider my={4} />
          <Text mt={10} fontSize="lg" fontWeight="bold">
            Theology
          </Text>
          <SimpleGrid columns={2}>
            {THEO_CARDS.map((card) => (
              <TheoCard key={card.id} {...card} />
            ))}
          </SimpleGrid>
        </TabPanel>

        <TabPanel color="white">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Lifestyle</h2>
            <p>Personal insights and experiences</p>
          </div>
          <div className="mt-16">
            <h2 className="text-lg">Latest Articles</h2>
            <Divider />
            {LIFESTYLE_CARDS.map((card) => (
              <LifestyleCard key={card.id} {...card} />
            ))}
          </div>
        </TabPanel>
      </TabPanels>
    </GridItem>
  );
};

const FeaturedImage: React.FC<{
  image: string;
  isLoading: boolean;
  onLoadComplete: () => void;
}> = ({ image, isLoading, onLoadComplete }) => (
  <div className="relative w-full h-[300px]">
    {isLoading && (
      <Skeleton
        height="300px"
        width="100%"
        position="absolute"
        top="0"
        left="0"
      />
    )}
    <Image
      alt="Featured blog image"
      src={image}
      fill
      style={{ objectFit: "cover" }}
      loading="lazy"
      onLoadingComplete={onLoadComplete}
    />
  </div>
);

const FeaturedArticle: React.FC<{
  title: string;
  link: string;
  excerpt: string;
}> = ({ title, link, excerpt }) => (
  <div className="mt-4">
    <Link href={link}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{excerpt}</p>
    </Link>
  </div>
);

export default BlogContent;
