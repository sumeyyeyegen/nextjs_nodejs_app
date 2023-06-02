import {useEffect, useState} from 'react';
import '../styles/globals.css'
import {Provider} from 'react-redux';
import store from '../redux/store';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { extendTheme } from '@chakra-ui/react'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
const [auth, setAuth] = useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      let mounted = true;
      setLoading(true);
      setTimeout(() => {
          mounted && setLoading(false);
      }, 2000);

      if (typeof window !== "undefined") {
          window.WOW = require("wowjs");
      }
      new WOW.WOW().init();
      return () => {
          mounted = false;
      }
  }, []);




  return (
    !loading ? (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          {
            auth ? <>
            <Navbar/>
            <div id='content'>
              <div className='container'>
                <Component {...pageProps} />
              </div>
            </div>
            </>: <div id='content'>
              <div className='container'>
                <Component {...pageProps} />
              </div>
            </div>
          }
        </ChakraProvider>
      </Provider> 
    ):""
  )
}

export default MyApp
