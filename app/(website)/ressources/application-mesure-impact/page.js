import PageHeader from "@/components/PageHeader";
import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";

export const metadata = {
  title: "La Société Nouvelle | Application METRIZ",
};

export default function Metriz() {
  return (
    <>

      <PageHeader
        title={"METRIZ"}
        subtitle={"Application de mesure de l'empreinte sociétale"}
        icon="laptop"
      />
      <section className="section">
        <Container>
          <Row className="align-items-center py-5">
            <Col className="d-flex flex-column align-self-stretch">
              <h3 className="section__title">
                Une solution libre et gratuite
              </h3>
              <div className="section__content">
                <p>
                  L'application web METRIZ est une solution <b>libre et gratuite</b>{" "}
                  développée par La Société Nouvelle pour permettre la mesure des
                  indicateurs de <strong>l'Empreinte Sociétale</strong>.
                </p>
                <p>
                  L'application permet de faire le lien entre le{" "}
                  <b>fichier d'écritures comptables</b> (FEC), l'empreinte sociétale
                  <b> des fournisseurs</b> et les impacts directs
                  de l'entreprise.
                </p>
              </div>
              <div className="section__actions">

                <Button
                  href="https://partners.metriz.lasocietenouvelle.org"
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                  title="Accéder à l'application"
                >
                  Accéder à METRIZ <i className="bi bi-box-arrow-up-right ms-1" />
                </Button>
                <Button
                  variant="outline"
                  title="En savoir plus sur Metriz"
                  href="https://calendly.com/sylvain-humiliere/demonstration-application-web?"
                  target="_blank"
                >
                  Demander une démonstration
                </Button>
              </div>
            </Col>

            <Col lg={6} className="text-end">
              <Image
                className="img"
                src="/images/metriz/application-mesure-impact.png"
                alt="Illustration Application mesure impact"
                width={600}
                height={450}
                style={{ width: '80%', height: 'auto', maxWidth: '500px' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row >
            <Col>
              <h3 className="section__title">Obtenez facilement votre empreinte sociétale</h3>
              <div className="section__content">
                <ol>
                  <li><b>Téléversez vos données comptables</b> via votre FEC (Fichier d'Ecritures Comptables) ou grâce aux connecteurs disponibles</li>
                  <li><b>Catégorisez automatiquement vos dépenses et investissements</b> à l'aide d'une IA Générative (ChatGPT)</li>
                  <li><b>Identifiez vos principaux fournisseurs</b> pour récupérer leur empreinte sociétale</li>
                  <li><b>Déclarez vos impacts directs</b></li>
                </ol>
              </div>
            </Col>
            <Col lg={6} className="section__illustration">
              <Image
                src="/images/metriz/screen-metriz-v4-2.png"
                alt="Screen Metriz v4"
                className="img"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
          </Row>

        </Container>
      </section>
      <section className="section">
        <Container>
          <Row >
            <Col lg={5} className="section__illustration">
              <Image
                src="/images/metriz/screen-metriz-v4-3.png"
                alt="Screen Metriz v4"
                className="img"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col>
              <h3 className="section__title">Identifiez vos principaux enjeux</h3>
              <div className="section__content">
                <p>
                  Au-delà de disposer des indicateurs, les résultats permettent les analyses suivantes :
                </p>
                <ul>
                  <li>Liste des dimensions sur lesquelles l'entreprise affiche une performance insuffisante au regard du niveau attendu d'ici 2030 à l'échelle de sa branche et l'effort à fournir</li>
                  <li>Liste des dimensions sur lesquelles l'entreprise affiche une meilleure performance que la moyenne de sa branche, et qu'elle peut valoriser ; et,</li>
                  <li>Liste des dimensions sur lesquelles l'entreprise affiche une performance moindre que la moyenne de sa branche</li>
                </ul>
                <p>
                  Chaque entreprise peut ainsi identifier ses enjeux clés, au regard de ceux à l'échelle de sa branche, et comparaisons sectorielles.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <h3 className="section__title">Analysez votre empreinte au regard de moyennes sectorielles</h3>
              <p>
                Les comparaisons sectorielles (moyenne actuelle de la branche et objectif 2030) permettent
                de situer la performance extra-financière de l'entreprise pour aligner la trajectoire avec
                les attentes de secteur.
              </p>
              <p>
                Les données statistiques comparatives utilisées proviennent de nos travaux de modélisation
                éco-environnementale.
              </p>
            </Col>
            <Col lg={5} className="text-end">
              <Image
                src="/images/metriz/screen-metriz-v4-7.png"
                alt="Screen Metriz v4"
                className="screen-metriz shadow"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>

          </Row>
        </Container>

      </section>
      <section className="section bg-light text-center">
        <Container>
          <h3 className="section__title section__title--center ">Intégrations</h3>
          <p className="mb-3">
            Des connecteurs sont disponibles pour lier vos outils comptables à Metriz.
            <br />
            Nous travaillons également avec des partenaires pour intégrer d'autres outils comptables.
          </p>
          <Row>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/acd.png"
                  alt="Logo ACD"
                  className=""
                  width={250}
                  height={50}
                  style={{ width: 'auto', height: 'auto', maxHeight: '50px', maxWidth: '250px', margin: 'auto' }}
                />
              </div>
            </Col>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/pennylane.png"
                  alt="Logo Pennylane"
                  className=""
                  width={250}
                  height={60}
                  style={{ width: 'auto', height: 'auto', maxHeight: '60px', maxWidth: '250px', margin: 'auto' }}
                />
              </div>
            </Col>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/tiime.png"
                  alt="Logo Tiime"
                  className=""
                  width={250}
                  height={50}
                  style={{ width: 'auto', height: 'auto', maxHeight: '50px', maxWidth: '250px', margin: 'auto' }}
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* Section Outil Partenaire */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content">
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0 text-center">
                <Image
                  alt="Illustration comparaison version simple version partenaire metriz application web"
                  src="/illustrations/collaboration.svg"
                  width={425}
                  height={400}
                  className="img"
                  style={{ width: '100%', height: 'auto', maxWidth: '425px' }}
                />
              </Col>
              <Col lg={6}>
                <h3 className="highlight-section__title">Un outil de calcul sur mesure pour les partenaires</h3>
                <p className="highlight-section__text">
                  Devenez partenaire et bénéficiez d'une version spécifique à
                  votre disposition. Vous disposerez également :
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Une maintenance évolutive
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Un support technique
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Des livrables personnalisés
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Un ajustement de l'outil à vos fichiers internes
                  </li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="https://partners.metriz.lasocietenouvelle.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accéder à la version partenaire
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

    </>
  );
}
