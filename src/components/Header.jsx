import React from 'react'
// import user from '../img/user.svg'
import bell from '../img/bell.svg'
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";

function Header() {
    return(
        <Box bg="#fff" p={4}>
        <Flex>
        <Text fontWeight="700" color="#ff6699" fontSize="3rem" textTransform="uppercase">Ribbon</Text>
        <Spacer />
        <Box>
        <img src={bell} alt="bell" />
        </Box>
        <Box>
        </Box>
        </Flex>
        </Box>
    )
}

export default Header;