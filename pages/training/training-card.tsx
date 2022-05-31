import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Pricing() {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("orange.50", "orange.900")}
            p={2}
            px={3}
            color={"orange.500"}
            rounded={"full"}
          >
            Data
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            {/* <Text fontSize={"3xl"}>For</Text> */}
            <Text fontSize={"6xl"} fontWeight={800}>
              32
            </Text>
            <Text color={"gray.500"}>weeks</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              SPSS Training
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Documentation
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Field Visit
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Mobile Training
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"orange.400"}
            color={"white"}
            rounded={"xl"}
            // boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "orange.500",
            }}
          >
            See Details
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
