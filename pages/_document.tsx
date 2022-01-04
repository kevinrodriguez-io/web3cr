import Document, { Html, Head, Main, NextScript } from "next/document";

class Web3CRDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/style.css" />
          <link
            rel="stylesheet"
            href="/css/style_second.css"
            media="screen and (min-width: 390px)"
          />
          <link
            rel="stylesheet"
            href="/css/tablet.css"
            media="screen and (min-width: 600px)"
          />
          <link
            rel="stylesheet"
            href="/css/desktop.css"
            media="screen and (min-width: 980px)"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Web3CRDocument;
