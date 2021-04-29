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

        <h1>Ressources mises à disposition</h1>

        <div className="strip">
          <h2>API - La Societe Nouvelle</h2>
          <p>L'API permet une intégration des données au sein des logiciels de comptabilité et ERP. L'accès est libre.</p>
          <p>URL de l'API : <a href="http://api.lasocietenouvelle.org">api.lasocietenouvelle.org</a></p>
          <p><a href="../documentation-api">Lien vers la documentation</a></p>
          <p>
          /!\ Merci de nous contacter en cas d'utilisation intensive de l'API.
          </p>
        </div>

        <div className="strip">
          <h2>Tableur - Indicateurs RH</h2>
          <p>Tableur de mesure des indicateurs liés aux rémunérations (répartition et écart Femmes/Hommes)</p>
          <a href="/Tableur-Indicateurs-RH.xlsx" download>Lien de téléchargement</a>
        </div>

        <div className="strip">
          <h2>METRIZ</h2>
          <p>Application pour la mesure des indicateurs.</p>
          <a href="LaSocieteNouvelle-METRIZ.exe" download>Lien de téléchargement</a>
          <p><a href="https://github.com/SylvainH-LSN/LaSocieteNouvelle-METRIZ/blob/master/DOCUMENTATION.md" target="_blank">Lien vers la documentation (en cours)</a></p>
          <p><a href="https://github.com/SylvainH-LSN/LaSocieteNouvelle-METRIZ" target="_blank">Lien vers le code source</a></p>
        </div>

      </main>

      <Footer/>

    </div>
  )
}
