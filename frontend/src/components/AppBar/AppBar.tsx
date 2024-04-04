import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Button, Link as ChakraLink, HStack } from "@chakra-ui/react";
import { IconBox } from "@tabler/icons-react";
import { ILink } from "./AppBar.d";
import { links } from "./links";

export const AppBar = () => {
  return (
    <Box
      height={16}
      bgColor="#272727"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"
      as="header"
      mb={4}
    >
      <Box
        marginInline="auto"
        maxWidth={1272}
        height="100%"
        paddingInline={6}
        display="flex"
        alignItems="center"
      >
        <IconBox stroke={2} size={32} color="#fff" />
        <ChakraLink
          fontSize="2xl"
          ml={2}
          as={ReactRouterLink}
          color="#fff"
          to="/"
        >
          Example
        </ChakraLink>

        <HStack ml={12} spacing={6}>
          {links.map(({ label, to }: ILink, index: number) => (
            <ChakraLink
              fontSize="md"
              as={ReactRouterLink}
              color="#fff"
              to={to}
              key={`link-${index}`}
            >
              {label}
            </ChakraLink>
          ))}
        </HStack>

        <Button
          variant="solid"
          colorScheme="gray"
          ml="auto"
          as={ReactRouterLink}
          to="/login"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
