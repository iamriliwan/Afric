import React from 'react'
import { Box, Grid, Text, Container } from '@chakra-ui/layout';
// import Border from './common/Border'
import afya from '../img/AFYA.png'
import zar from '../img/ZAR.png'


function Banner(){
    return(
        <Box bg="#cc3366" p={4} borderRadius="5%" boxShadow="5px 5px 5px 5px grey;">
            <Grid templateColumns="repeat(2, 3fr)" gap={3}>
                <Container w="100%" h="auto" textAlign="center" centerContent><img src={afya} alt="afya" />
                <Text color="white" fontWeight="600" fontSize="2rem" marginBottom="20%">143.00</Text>
                <Text color="white" fontWeight="500" fontSize="2rem">Balance</Text>
                </Container>
                <Container w="100%" h="auto" textAlign="center" centerContent  borderLeft="2px solid white">
                <img src={zar} alt="zar" />
                <Text color="white" fontWeight="600" fontSize="2rem" marginBottom="20%">R21.00</Text>
                <Text color="white" fontWeight="500" fontSize="2rem">Equivalent</Text>
                </Container>
            </Grid>
        </Box>
    )
}
export default Banner;