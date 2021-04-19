import React from "react";
import { Box, Table, Tbody, Tr, Td, Text } from "@chakra-ui/react";
import hiv from "../img/HIV.png"
import blood from "../img/Blood.png"


function Recent() {
  return (
    <Box p={4}>
      <Table variant="simple">
        <Text color="black" fontWeight="800">
          Recent Activity
        </Text>
        <Tbody>
          <Tr>
            <Td><img src={hiv} alt="hiv" w="148" h="150" /></Td>
            <Td>
              <Text fontWeight="700">HIV Blood Draw Test</Text>
            </Td>
            <Td>
              <Text fontWeight="700">A100</Text>
            </Td>
          </Tr>
          <Tr>
            <Td><img src={blood} alt="blood" /></Td>
            <Td fontWeight="700"><Text>TB Radiology XRay</Text></Td>
            <Td fontWeight="700">A30</Td>
          </Tr>
          <Tr>
          <Td><img src={blood} alt="blood" /></Td>
            <Td fontWeight="700"><Text>Blood Pressure Check</Text></Td>
            <Td fontWeight="700">A10</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default Recent;
