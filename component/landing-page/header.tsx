import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";

export default function HeaderComponent() {
  return (
    <Container maxW={"7xl"} minHeight={"100vh"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                // bg: "red.400",
                zIndex: -1,
              }}
            >
              Welcome to
            </Text>
            <br />
            <Text as={"span"} colorScheme={"orange"} color={"orange.500"}>
              Social and Academic Innovations
            </Text>
          </Heading>
          <Text color={useColorModeValue("gray.800", "white")}>
            SAIPL is a Nepal-based research and training organization. It has
            conducted survey researches in the areas of finance, health,
            political participation of women in south Asia, Inclusive education.
            It provides training in Data analysis, Report Writing etc
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.500"}
              _hover={{ bg: "blue.500" }}
            >
              Get started
            </Button>
            {/* <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={"gray.300"}
               />
            }
            > */}
            How It Works
            {/* </Button> */}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {/* <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          /> */}
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1560091129-27a0e2af124b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
