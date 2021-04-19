import React from 'react'
import homeIcon from '../img/Navbar/home.svg'
import activityIcon from '../img/Navbar/sketchbook.svg'
import walletIcon from '../img/Navbar/wallet.svg'
import marketIcon from '../img/Navbar/stock-market.svg';
import earnIcon from '../img/Navbar/profit.svg';

import { Box, Grid, Text } from '@chakra-ui/layout';

function Navbar(){
    return(
        <Box p={6} centerContent>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} >
                <Box>
                    <img src={homeIcon} alt="home" />
                    <Text color="#FB5267" fontWeight="700">Home</Text>
                </Box>

                <Box>
                    <img src={activityIcon} alt="activity" />
                    <Text color="#FB5267" fontWeight="700">Activity</Text>
                </Box>

                <Box>
                    <img src={walletIcon} alt="wallet" />
                    <Text color="#FB5267" fontWeight="700">Wallet</Text>
                </Box>

                <Box>
                    <img src={marketIcon} alt="marketIcon" />
                    <Text color="#FB5267" fontWeight="700">Market</Text>
                </Box>

                <Box>
                    <img src={earnIcon} alt="earnIcon" />
                    <Text color="#FB5267" fontWeight="700">Earn</Text>
                </Box>
                
            </Grid>
        </Box>
    )
}
export default Navbar;