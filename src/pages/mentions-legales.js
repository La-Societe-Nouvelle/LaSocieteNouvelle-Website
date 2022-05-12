
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Mentions légales </title>
      </Helmet>
      <Header />

      <main >
        <Container>
          <section>
            <h2>Mentions légales</h2>

              <h3>La Société Nouvelle</h3>
              <ul>
                <li>
                SAS au capital de 1 000 €
                </li>
                <li>
                Siège social : 165 avenue de Bretagne 59000 LILLE
                </li>
                <li>
                SIREN : 889 182 770
                </li>
                <li>
                Responsable : Sylvain HUMILIERE
                </li>
                <li>
                Contact : sylvain.humiliere@la-societe-nouvelle.org
                </li>
              </ul>

              <h3>Hébergement</h3>
              <p>VERCEL</p>
              <address>
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789
              </address>
              <p>
                <a href="https://vercel.com" target="_blank">https://vercel.com</a>
              </p>
          </section>
        </Container>
      </main>

      <Footer />

    </>
  )
}
