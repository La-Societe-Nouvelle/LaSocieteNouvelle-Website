import Head from 'next/head'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Mentions légales</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main id="mentions-legales" className="main">

        <h1 className="title">
          Mentions légales
        </h1>

        <div id="mentions-societe" className="strip">
          <h2>
          La Société Nouvelle
          </h2>
          <p>
          SAS au capital de 1 000 €<br/>
          Siège social : 31/33 rue Adolphe 59000 LILLE<br/>
          SIREN : 889 182 770<br/>
          Responsable : Sylvain HUMILIERE<br/>
          Contact : sylvain.humiliere@la-societe-nouvelle.fr<br/>
          </p>
        </div>

        <div id="mentions-hebergement" className="strip">
          <h2>
          Hébergement
          </h2>
          <p>
          VERCEL
          </p>
          <p>
          Vercel Inc.<br/>
          340 S Lemon Ave #4133<br/>
          Walnut, CA 91789 
          </p>
          <p>
          <a href="https://vercel.com" target="_blank">https://vercel.com</a> 
          </p>
        </div>

      </main>

      <Footer />

    </div>
  )
}
