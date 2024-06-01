import { Container, Text, VStack, Box, Image, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box gridColumn={{ md: "span 2" }}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <Box mb={4}>
            <Image src="/images/top-news-1.jpg" alt="Top News 1" />
            <Heading as="h3" size="lg" mt={2}>Top News Headline 1</Heading>
            <Text mt={2}>Brief description of the top news article 1...</Text>
          </Box>
          <Box mb={4}>
            <Image src="/images/top-news-2.jpg" alt="Top News 2" />
            <Heading as="h3" size="lg" mt={2}>Top News Headline 2</Heading>
            <Text mt={2}>Brief description of the top news article 2...</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Editor's Picks</Heading>
          <Box mb={4}>
            <Image src="/images/editors-pick-1.jpg" alt="Editor's Pick 1" />
            <Heading as="h3" size="lg" mt={2}>Editor's Pick Headline 1</Heading>
            <Text mt={2}>Brief description of the editor's pick article 1...</Text>
          </Box>
          <Box mb={4}>
            <Image src="/images/editors-pick-2.jpg" alt="Editor's Pick 2" />
            <Heading as="h3" size="lg" mt={2}>Editor's Pick Headline 2</Heading>
            <Text mt={2}>Brief description of the editor's pick article 2...</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;