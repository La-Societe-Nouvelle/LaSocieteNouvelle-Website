// La Société Nouvelle

//-- Bootstrap
import { Col, Container, Image, Row, Button } from "react-bootstrap";

//-- Components
import PageHeader from "../../components/PageHeader";

const Page = () => {
  return (
    <>
      <PageHeader
        title={"Mesure de l'Empreinte Sociétale de votre entreprise"}
        prev={"nos-services"}
        prevTitle={"services"}
        path={"services/service-mesure-empreinte"}
        hasBreadcrumb={true}
      />
      <section>
        <Container>
          <Row className="align-items-center pt-5">
            <Col className="d-flex flex-column align-self-stretch">
              <h1>Devenez acteur d'une économie soutenable !</h1>
              <div className="flex-grow-1">
                <p>
                  Vous souhaitez être accompagné pour la mesure et
                  l'interprétation de l'empreinte sociétale de votre entreprise
                  ?
                </p>
                <p>
                  Nous réalisons pour vous l'estimation de l'empreinte sociale
                  et environnementale de votre activité, à partir de vos données
                  comptables (FEC, DSN). Vous recevez une analyse claire et
                  commentée.
                </p>
                <p>
                  Vous pouvez également vous adresser directement à votre
                  expert-comptable !
                </p>
              </div>
            </Col>
            <Col lg={3} className="text-end">
              <Image
                fluid
                src="/illustrations/illustration-analysis.png"
                alt="Illustration analyse"
                className=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <hr style={{ borderWidth: "2px" }} />
          <Row className="py-5">
            <Col>
              <h2>Notre proposition</h2>
              <p>
                <ol>
                  <li>
                    <b>Aide dans la collecte des données nécessaires</b>
                  </li>
                  <li>
                    <b>Production des indicateurs</b>
                  </li>
                  <li>
                    <b>Restitution des résultats</b>
                  </li>
                  <li>
                    <b>Prise en charge de la publication</b> (si accord)
                  </li>
                </ol>
              </p>
              <p></p>
            </Col>
            <Col lg={6} className="text-end">
              <Image
                fluid
                src="/images/metriz/screen-metriz-v4-2.png"
                alt="Screen Metriz v4"
                className="screen-metriz shadow"
              />
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={6} className="text-end">
              <Image
                fluid
                src="/images/metriz/screen-metriz-v4-3.png"
                alt="Screen Metriz v4"
                className="screen-metriz shadow"
              />
            </Col>
            <Col>
              <h2>Ce que vous obtenez</h2>
              <ul>
                <li>
                  Une analyse personnalisée de vos impacts sur 12 dimensions
                  sociales et environnementales clés
                </li>
                <li>Une comparaison avec les moyennes de votre secteur</li>
                <li>
                  Des repères sur les trajectoires 2030 (objectifs nationaux)
                </li>
                <li>
                  Des pistes concrètes d'action et de réduction des impacts
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <hr style={{ borderWidth: "2px" }} />
          <Row className="text-center mb-3">
            <h1>Nos tarifs</h1>
          </Row>
          <Row className="justify-content-around">
            <Col lg={4} className="px-5">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h2 className="mt-4 mb-2">EI/TPE</h2>
                <p>
                  <b>Effectifs inférieurs à 10 personnes</b>
                </p>
                <p>
                  Vous êtes indépendant ou vous avez une petite entreprise, et
                  vous souhaitez donner du sens à votre activité ? La mesure de
                  votre empreinte sociétale vous permet de mettre en valeur vos
                  engagements, et de contribuer à votre échelle à la transition
                  écologique et sociale.
                </p>
                <h2>250 €</h2>
              </div>
            </Col>
            <Col lg={4} className="px-5">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h2 className="mt-4 mb-2">PME</h2>
                <p>
                  <b>Effectifs entre 10 et 250 personnes</b>
                </p>
                <p>
                  Vous envisagez de structurer une démarche RSE mais ne savez
                  pas par où commencer ? La mesure de votre empreinte sociétale
                  constitue un diagnostic de départ clair et chiffré pour
                  identifier vos principaux leviers d'action.
                </p>
                <h2>500 €</h2>
              </div>
            </Col>
            <Col lg={4} className="px-5">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h2 className="mt-4 mb-2">ETI</h2>
                <p>
                  <b>Effectifs supérieurs à 250 personnes</b>
                </p>
                <p>
                  Vous souhaitez aller plus loin dans le suivi de votre
                  performance extra-financière et renforcer la transparence de
                  vos engagements ? Nous vous accompagnons dans la mesure de
                  votre empreinte sociétale, et dans l'intégration des indicteurs 
                  directement dans vos outils de gestion.
                </p>
                <h2>Sur devis</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <hr style={{ borderWidth: "2px" }} />
          <Row className="align-items-center py-5">
            <Col className="d-flex flex-column align-self-stretch">
              <h1>Intéressé par une analyse ?</h1>
              <div className="flex-grow-1">
                <p>
                  Contactez-nous pour lancer une analyse de l'empreinte
                  sociétale de votre entreprise. Notre équipe vous accompagne de
                  bout en bout.
                </p>
              </div>
              <div className="mt-4 text-center">
                <Button
                  variant="primary"
                  title="Redirection Calendly"
                  className="mx-2 rounded-0"
                  href="https://calendly.com/sylvain-humiliere/service-mesure-empreinte-societale"
                  target="_blank"
                >
                  Faire une demande
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page;