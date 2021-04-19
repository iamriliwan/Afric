import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Currency from './components/Currency';
import Navbar from './components/Navbar';
import Space from "./components/common/Space";
import Recent from "./components/Recent";
import Theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

function Apps(){
    return(
        <ChakraProvider theme={Theme}>
            <Header/>
            <Banner />
            <Space/>
            <Currency />
            <Space/>
            <Recent />
            <Navbar />
        </ChakraProvider>
    )
}
export default Apps;