import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { DocButton } from "../../components/buttons/DocButton";
import PageHeader from "../../components/PageHeader";

const Page = () => {
  return (
    <>
      <PageHeader
        title={"Portail de données"}
        prev={"ressources"}
        prevTitle={"Ressources"}
        path={"ressources/consulter-impacts-entreprises"}
        hasBreadcrumb={true}
      />

      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>
                Consulter librement les données sur les impacts d'une entreprise
              </h3>
              <p>
                Nous administrons une base de données répertoriant les
                publications des entreprises françaises sur l'empreinte
                sociétale de leur production.
              </p>
              <p>
                La base s'appuie directement sur le répertoire SIRENE. Les
                données sont accessibles librement et gratuitement. La
                publication des données est gratuite. Des frais administratifs
                peuvent s'appliquer afin d'assurer la maintenance des ressources
                informatiques et la pérennité du service.
              </p>

              <div className="text-end mt-4">
                <Button
                  variant="secondary"
                  className="me-3"
                  href="/portail"
                  target="_blank"
                  title="Accéder au portail"
                >
                  Accéder au portail
                </Button>

                <DocButton />
              </div>
            </Col>
            <Col className="text-end">
              <Image
                fluid
                src="/images/portail-donnees-impacts-entreprises.png"
                alt="Illustration page accueil portail des impacts"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-secondary">
        <Container>
          <Row className=" justify-content-between">
            <Col>
              <div className="box text-center">
                <h4>Valeurs publiées</h4>
                <p>
                  Elles ont été obtenues car l'entreprise a souhaité partager
                  son empreinte sociétale en la publiant dans notre base de
                  données.
                </p>
              </div>
            </Col>
            <Col>
              <div className="box text-center">
                <h4>Valeurs par défaut</h4>
                <p>
                  Celles-ci sont fournies afin d'obtenir une estimation en
                  s'appuyant sur les caractéristiques connues de l'entreprise.
                </p>
              </div>
            </Col>
            <Col>
              <div className="box text-center">
                <h4>Valeurs estimées</h4>
                <p>
                  Celles-ci sont fournies afin d'obtenir une estimation en
                  s'appuyant sur les caractéristiques connues de l'entreprise.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center">
        <Container>
         
        
      
        </Container>
      </section>
    </>
  );
};

export default Page;
