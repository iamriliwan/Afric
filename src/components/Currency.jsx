import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import Button from "./common/Button";

function Currency() {
  return (
    <Box fontSize="2rem" p={4}>
      <Text color="#3399ff" fontWeight="700">Select Currency:</Text>
      <InputGroup>
        <InputLeftAddon h="3rem" children="AFYA" />
        <Input h="3rem" type="number" bg="##F8F8F8"placeholder="0.000000000001" />
      </InputGroup>
      <Box mb="1%"></Box>
      <Flex>
        <Button>SEND</Button>
        <Spacer />
        <Button>RECEIVE</Button>
      </Flex>
    </Box>
  );
}

export default Currency;
