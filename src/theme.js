import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
        bg: '#F8F8F8',
      },
      body: {
        fontFamily: "'Montserrat'",
        fontSize: '1.4rem',
        width: '35%',
        marginLeft: '35%',
      },
    },
  },
});

export default theme;
