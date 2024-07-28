import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/dashboard.css'
import '../public/css/_custom.scss';
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }) {
  const [isFirst, setFirst] = useState(false);
  useEffect(() => {
    if(!isFirst){
      setFirst(true);
      return
    };
    (async () => await import('../lib/fontawesome'))();
  }, [isFirst])
  return <Component {...pageProps} />;
}

export default MyApp;
