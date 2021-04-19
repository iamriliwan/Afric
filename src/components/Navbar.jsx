import React from 'react'
import home from '../img/Navbar/home.svg'
import { Box, Grid, Text } from '@chakra-ui/layout';

function Navbar(){
    return(
        <Box p={6}>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <Box>
                    <img src={home} alt="home" />
                    <Text>Home</Text>
                </Box>

                <Box>
                    <img src={home} alt="home" />
                    <Text>Home</Text>
                </Box>

                <Box>
                    <img src={home} alt="home" />
                    <Text>Home</Text>
                </Box>

                <Box>
                    <img src={home} alt="home" />
                    <Text>Home</Text>
                </Box>

                <Box>
                    <img src={home} alt="home" />
                    <Text>Home</Text>
                </Box>
                
            </Grid>
        </Box>
    )
}
export default Navbar;