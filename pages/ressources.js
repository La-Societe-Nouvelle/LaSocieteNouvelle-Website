import Head from 'next/head'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Ressources</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <h1>
          Ressources mises à disposition
        </h1>

        <div className="strip">
          <h2>
          API - La Societe Nouvelle
          </h2>
          <p>
          L'API permet une intégration des données au sein des logiciels de comptabilité et ERP. L'accès est libre.
          </p>
          <p>
            URL de l'API : <a href="http://api.lasocietenouvelle.org">api.lasocietenouvelle.org</a>
          </p>
          <p>
          <a href="../documentation-api">Lien vers la documentation</a>
          </p>
          <p>
          /!\ Merci de nous contacter en cas d'utilisation intensive de l'API.
          </p>
        </div>

        <div className="strip">
          <h2>
          Tableur - Indicateurs RH (à venir)
          </h2>
          <p>
          Tableur de mesure des indicateurs liés aux rémunérations (répartition et écart Femmes/Hommes)
          </p>
          <a href="/files/Tableur-Indicateurs-RH">Lien de téléchargement</a>
          
        </div>

        <div className="strip">
          <h2>
          METRIZ (à venir)
          </h2>
          <p>
          Application pour la mesure des indicateurs.
          </p>
        </div>

      </main>

      <Footer/>

    </div>
  )
}
