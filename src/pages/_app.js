// React
import Head from "next/head";
import SSRProvider from "react-bootstrap/SSRProvider";
import { Analytics } from "@vercel/analytics/react";
import "../styles/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>La société nouvelle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Initiative open data et open source qui met en place un système d'information sur les impacts sociaux et environnementaux des entreprises françaises."
        ></meta>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Analytics />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
