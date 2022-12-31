import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Next Shop</title>
        <meta name="description" content="Next Shop"></meta>
        <meta name="robots" content="index,follow"></meta>
        <NextScript async src="https://www.googletagmanager.com/gtag/js?id=G-JCYGGMNXFL"></NextScript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JCYGGMNXFL');`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
