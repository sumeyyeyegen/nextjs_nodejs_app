import {useEffect, useState} from 'react';
import '../styles/globals.css'
import {Provider} from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {

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
          <Component {...pageProps} />
      </Provider> 
    ):""
  )
}

export default MyApp
