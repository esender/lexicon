import {
  Box,
  Stack,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "./Link";
import React from "react";

const Header = function () {
  return (
    <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} mb="6">
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily="heading"
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
      >
        Lexicon
      </Text>

      <Flex display={{ base: "none", md: "flex" }} ml={10}>
        <Stack direction="row" spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/exercises">Practice</Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box margin="auto" width={1280} padding={4}>
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
