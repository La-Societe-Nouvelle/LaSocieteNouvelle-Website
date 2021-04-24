import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/footer.scss'

// CSS specific to pages
import '../styles/accueil.scss'
import '../styles/a-propos.scss'
import '../styles/indicateur.scss'
import '../styles/portail.scss'
import '../styles/declaration-simplifiee.scss'

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />)
}

export default MyApp
