import React from "react";
import homeIcon from "../img/Navbar/home.svg";
import activityIcon from "../img/Navbar/sketchbook.svg";
import walletIcon from "../img/Navbar/wallet.svg";
import marketIcon from "../img/Navbar/stock-market.svg";
import earnIcon from "../img/Navbar/profit.svg";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import { Box, Grid, Text } from "@chakra-ui/layout";

function Navbar() {
  return (
    <Router>
      <Box p={6} centerContent>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box>
            <Link>
            <img src={homeIcon} alt="home" />
            <Text color="#FB5267" fontWeight="700">Home</Text>
            </Link>
          </Box>

          <Box>
            <Link>
            <img src={activityIcon} alt="activity" />
              <Text color="#FB5267" fontWeight="700">Activity</Text>
            </Link>
          </Box>

          <Box>
            <Link>
            <img src={walletIcon} alt="wallet" />
              <Text color="#FB5267" fontWeight="700">Wallet</Text>
            </Link>
          </Box>

          <Box>
            <Link>
            <img src={marketIcon} alt="marketIcon" />
              <Text color="#FB5267" fontWeight="700">Market</Text>
            </Link>
          </Box>

          <Box>
            <Link >
            <img src={earnIcon} alt="earnIcon" />
              <Text color="#FB5267" fontWeight="700">Earn</Text>
            </Link>
          </Box>
          <Switch></Switch>
        </Grid>
      </Box>
    </Router>
  );
}
export default Navbar;
