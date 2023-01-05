import Script from 'next/script';
import AppContext from '@context/AppContext';
import Header from '@components/Header';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Next Shop"></meta>
        <meta name="robots" content="index,follow"></meta>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JCYGGMNXFL" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JCYGGMNXFL');
          `}
        </Script>
      </Header>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
