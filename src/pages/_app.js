import Script from 'next/script';
import AppContext from '@context/AppContext';
import Header from '@components/Header';
import useInitialState from '@hooks/useInitialState';
import "@styles/globals.css";

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header>
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
