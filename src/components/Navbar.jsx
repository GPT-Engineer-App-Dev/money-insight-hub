import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold" fontSize="xl">Financial Times</Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link as={NavLink} to="/world" color="white" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link as={NavLink} to="/business" color="white" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link as={NavLink} to="/opinion" color="white" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link as={NavLink} to="/tech" color="white" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;