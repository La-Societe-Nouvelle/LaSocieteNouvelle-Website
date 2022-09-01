import { Helmet } from "react-helmet";

// Components

import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function Newsletter() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Newsletter</title>
      </Helmet>
      <PageHeader title="Inscription à notre Newsletter" path="newsletter" />
      <section>
        <Container>
          <h2>Abonnez-vous à lettre d'information de la Société Nouvelle</h2>
          <p>
            Vous pouvez vous abonner gratuitement à notre lettre d'information.
            Vous recevrez un courriel sur les dernières actualités ou les
            dernières missions de la Société Nouvelle. Votre adresse e-mail est
            uniquement utilisée pour vous envoyer la lettre d'information. Vous
            pouvez à tout moment vous désinscrire en utilisant le lien de
            désabonnement en bas de toutes nos lettres d'informations.
          </p>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
            <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/7EBb/NVE" width="100%"></iframe>
            <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
