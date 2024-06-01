import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Text mb={2}>© 2023 Financial Times</Text>
        <Flex>
          <Link href="/contact" mx={2} _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
          <Link href="/privacy" mx={2} _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
          <Link href="/terms" mx={2} _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;