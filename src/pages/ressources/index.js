import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";
import { MetrizButton } from "../../components/buttons/MetrizButton";
import { DocButton } from "../../components/buttons/DocButton";
const ressources = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Portail des empreintes sociétales des
          entreprises françaises
        </title>
      </Helmet>

      <PageHeader title={"Les ressources"} path={"/ressources"} />
      <section>
        <Container>
          <Row>
            <Col lg={6} className="border-bottom border-end">
              <div className="p-4">
                <h2 className="mb-0 text-center">
                  Mesurer l'Empreinte Sociétale
                </h2>
                <p className="text-end">Via Metriz</p>

                <div className="text-center">
                  <Image
                    src="/images/application-mesure-impact.png"
                    fluid
                    alt="Application de mesure des impacts"
                  />
                </div>
                <div className="mt-5 text-center">
                  <Button variant="primary">En savoir plus</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="border-bottom border-start">
              <div className="p-4">
                <h2 className="mb-0 text-center">
                  Consulter les impacts des entreprises
                </h2>

                <p className="text-end">Via le portail</p>
                <div className="text-center">
                  <Image
                    src="/images/portail-donnees-impacts-entreprises.png"
                    fluid
                    alt="Application de mesure des impacts"
                  />
                </div>
                <div className="mt-5 text-center">
                  <Button variant="primary">En savoir plus</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="border-top border-end">
              <div className="p-4">
                <h2 className="mb-0 text-center">
                  Accéder à notre base de données
                </h2>

                <p className="text-end">Via l'API publique</p>
                <div className="text-center">
                  <Image
                    src="/images/portail-donnees-impacts-entreprises.png"
                    fluid
                    alt="Application de mesure des impacts"
                  />
                </div>
                <div className="mt-5 text-center">
                  <Button variant="primary">En savoir plus</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="border-top border-start">
              <div className="p-4">
                <h2 className="mb-0 text-center">
                  S'informer de manière plus détaillée
                </h2>

                <p className="text-end">Via la documentation</p>
                <div className="text-center">
                  <Image
                    src="/images/documentation-sinese.png"
                    fluid
                    alt="Application de mesure des impacts"
                  />
                </div>
                <div className="mt-5 text-center">
                  <DocButton></DocButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ressources;
