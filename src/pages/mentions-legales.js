
// Components
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Mentions légales </title>
      </Helmet>
      <PageHeader
        title="Mentions légales"
        path={"mentions-legales"}
      />
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
                Contact : <a href="mailto:contact@lasocietenouvelle.org">contact@lasocietenouvelle.org</a>
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
    </>
  )
}
