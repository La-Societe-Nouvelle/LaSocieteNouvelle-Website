import { Helmet } from 'react-helmet';

// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { Container, Row, Col } from 'react-bootstrap';

export default function Newsletter() {
    return (
        <>
            <Helmet>
                <title>La société Nouvelle | Newsletter</title>
            </Helmet>
            <Header page="blog" />
            <main className="main">
                <Container>
                    <section>
                        <h2>
                            Abonnement à lettre d'information de la Société Nouvelle
                        </h2>
                        <p>
                            Vous pouvez vous abonner gratuitement à notre lettre d'information. Vous recevrez un courriel sur les dernières actualités ou les dernières missions de la Société Nouvelle.
                            Votre adresse e-mail est uniquement utilisée pour vous envoyer la lettre d'information.
                            Vous pouvez à tout moment vous désinscrire en utilisant le lien de désabonnement en bas de toutes nos lettres d'informations.
                        </p>
                        <Row>
                            <Col md={{ span: 8, offset: 2 }} >
                                <iframe className="mj-w-res-iframe" scrolling="no" src="https://app.mailjet.com/widget/iframe/7D62/Mts"></iframe>

                            </Col>
                        </Row>
                    </section>
                </Container>
            </main>
            <Footer />
        </>

    )
}


