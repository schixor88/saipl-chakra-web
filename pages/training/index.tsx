import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  useColorModeValue,
  Stack,
  Text,
  Grid,
} from "@chakra-ui/react";
import Pricing from "./training-card";

const TrainingHome = () => {
  return (
    <Box>
      <Container maxW={"7xl"} minH={"100vh"} pt={10}>
        <Stack>
          <Heading fontSize={30} fontWeight={500}>
            Training
          </Heading>
          <Text py={5}>
            Here are the list of trainings that we provide at SAIPL.
            <br />
            Trainings can be modified or personalized according to the group
            size or your needs. Please request any trainings if you dont find it
            listed below.
          </Text>
        </Stack>
        <Stack>
          <Grid templateColumns="repeat(3,1fr)" gap={"20"} paddingTop="20px">
            <Pricing />
            <Pricing />
            <Pricing />
            <Pricing />
            <Pricing />
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TrainingHome;
