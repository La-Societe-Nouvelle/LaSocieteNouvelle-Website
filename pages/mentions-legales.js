
// Components
import Head from 'next/head'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() 
{
  return (
    <div className="container">
      <Header/>

      <main className="main">

        <div className="section">
          <h1>Mentions légales</h1>
        </div>

        <div className="section">
          <div id="mentions-societe" className="strip">
            <h2>La Société Nouvelle</h2>
            <p>
              SAS au capital de 1 000 €<br/>
              Siège social : 165 avenue de Bretagne 59000 LILLE<br/>
              SIREN : 889 182 770<br/>
              Responsable : Sylvain HUMILIERE<br/>
              Contact : sylvain.humiliere@la-societe-nouvelle.fr<br/>
            </p>
          </div>
        </div>

        <div className="section">
          <div id="mentions-hebergement" className="strip">
            <h2>Hébergement</h2>
            <p>VERCEL</p>
            <p>
              Vercel Inc.<br/>
              340 S Lemon Ave #4133<br/>
              Walnut, CA 91789 
            </p>
            <p>
              <a href="https://vercel.com" target="_blank">https://vercel.com</a> 
            </p>
          </div>
        </div>

      </main>

      <Footer />

    </div>
  )
}
