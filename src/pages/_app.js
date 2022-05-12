
// React
import Head from 'next/head'
import SSRProvider from 'react-bootstrap/SSRProvider'
import "../styles/App.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

// import '../styles/_groups.scss'
// import '../styles/_section.scss'
// import '../styles/_wrapper.scss'
// import '../styles/_components.scss'
// import '../styles/_md.scss'
// import '../styles/_form.scss'

// // CSS specific to components
// import '../styles/globals.scss'
// import '../styles/header.scss'
// import '../styles/footer.scss'

// // CSS specific to pages
// import '../styles/accueil.scss'
// import '../styles/a-propos.scss'
// import '../styles/indicateur.scss'
// import '../styles/portail.scss'
// import '../styles/contact.scss'
// import '../styles/approche.scss'
// import '../styles/company-data.scss'
// import '../styles/articles.scss'
// import '../styles/newsletter.scss'

import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>La société nouvelle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <Helmet>
      <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
      </Helmet>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  )
}

export default MyApp
