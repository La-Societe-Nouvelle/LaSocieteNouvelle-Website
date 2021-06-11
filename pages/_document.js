import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const  { basePath } = getConfig();
    return (
      <Html>
        <Head>
          <meta property="og:site_name" content="La Société Nouvelle" />
          <meta property="og:image" content={basePath + "/resources/logo.jpg"} />
          {/* The below line must be set on a per page basis */}
          <meta property="og:title" content="Accueil" />
          <meta property="og:description" content="" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={basePath + "/"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
