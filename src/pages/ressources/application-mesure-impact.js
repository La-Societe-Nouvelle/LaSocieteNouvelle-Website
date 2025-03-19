import React from "react";
import { Col, Container, Image, Row, Button, Ratio } from "react-bootstrap";
import { DocButton } from "../../components/buttons/DocButton";
import { MetrizButton } from "../../components/buttons/MetrizButton";
import PageHeader from "../../components/PageHeader";

const Metriz = () => 
{
  return (
    <>
      <PageHeader
        title={"Application METRIZ"}
        prev={"ressources"}
        prevTitle={"Ressources"}
        path={"ressources/application-mesure-impact"}
        hasBreadcrumb={true}
      />
      <section>
        <Container>
          <Row className="align-items-center py-5">
            <Col className="d-flex flex-column align-self-stretch">
              <h1>
                Une solution libre et gratuite
              </h1>
              <div className="flex-grow-1">
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
                {/* <p>
                  L'application est distribuée sous <b>licence libre </b>CeCILL.
                </p> */}
              </div>
              <div className="mt-4 text-center">
                <MetrizButton />
                <Button
                  variant="outline"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="https://calendly.com/sylvain-humiliere/demonstration-application-web?"
                  target="_blank"
                >
                  Demander une démonstration
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-end px-5">
              <Image
                fluid
                src="/images/application-mesure-impact.png"
                alt="Illustration Application mesure impact"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="bg-light">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2>Version Partenaire</h2>
              <p>
                Vous souhaitez intégrer la mesure de l'Empreinte Sociétale au sein de vos services ?
              </p>
              <p>
                La solution est utilisable à des fins commerciales : il est ainsi possible d'accompagner
                des entreprises sur la production des indicateurs et l'inteprétation de leurs résultats.
                En devenant partenaire du projet, vous pouvez bénéficier d'une configuration personnalisée
                et produire vos livrables en marque blanche.
              </p>
              <p>
                Un kit de mission est également disponible pour vous aider à développer ce service.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="pt-0">
        <Container>
          <hr style={{borderWidth: "2px"}}/>
          <Row className="py-5">
            <Col>
              <h2>Obtenez facilement votre empreinte sociétale</h2>
              <p>
                <ol>
                  <li><b>Téléversez vos données comptables</b> via votre FEC (Fichier d'Ecritures Comptables) ou grâce aux connecteurs disponibles</li>
                  <li><b>Catégorisez automatiquement vos dépenses et investissements</b> à l'aide d'une IA Générative (ChatGPT)</li>
                  <li><b>Identifiez vos principaux fournisseurs</b> pour récupérer leur empreinte sociétale</li>
                  <li><b>Déclarez vos impacts directs</b></li>
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
              <h2>Identifiez vos principaux aux enjeux</h2>
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
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <h2>Analysez votre empreinte au regard de moyennes sectorielles</h2>
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
                fluid
                src="/images/metriz/screen-metriz-v4-7.png"
                alt="Screen Metriz v4"
                className="screen-metriz shadow"
              />
            </Col>
            {/* <Col lg={3} className="text-end">
              <Image
                fluid
                src="/images/metriz/screen-metriz-v4-4.png"
                alt="Screen Metriz v4"
                className="screen-metriz shadow"
              />
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="bg-light text-center">
        <Container>
          <h2>Intégrations</h2>
          <p>
            Des connecteurs sont disponibles pour lier vos outils comptables à Metriz.
          </p>
          <Row style={{height: "100px"}}>
            <Col lg={3} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/acd.png"
                  alt="Logo ACD"
                  className=""
                  style={{ height: "auto", maxHeight: "50px", maxWidth: "250px", margin: "auto" }}
                />
              </div>
            </Col>
            <Col lg={3} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/pennylane.png"
                  alt="Logo Pennylane"
                  className=""
                  style={{ height: "auto", maxHeight: "50px", maxWidth: "250px", margin: "auto" }}
                />
              </div>
            </Col>
            <Col lg={3} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/tiime.png"
                  alt="Logo Tiime"
                  className=""
                  style={{ height: "auto", maxHeight: "50px", maxWidth: "250px", margin: "auto" }}
                />
              </div>
            </Col>
            <Col lg={3} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/logos/myunisoft.png"
                  alt="Logo MyUnisoft"
                  className=""
                  style={{ height: "auto", maxHeight: "50px", maxWidth: "250px", margin: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="align-items-top my-5">
            <Col lg={4} className="text-end px-5">
              <Image
                fluid
                src="/illustrations/version-partenaire-cabinet-comptable.svg"
                alt="Illustration version partenaire"
                className=""
              />
            </Col>
            <Col className="d-flex flex-column align-self-stretch">
              <h2>Version Partenaire</h2>
              <div className="flex-grow-1">
                <p>
                  Vous souhaitez intégrer la mesure de l'Empreinte Sociétale au sein de vos services ?
                </p>
                <p>
                  La solution est utilisable à des fins commerciales : il est ainsi possible d'accompagner
                  des entreprises sur la production des indicateurs et l'inteprétation de leurs résultats.
                  En devenant partenaire du projet, <b>vous pouvez bénéficier d'une configuration personnalisée
                  et produire vos livrables en marque blanche</b>.
                </p>
                <p>
                  Un kit de mission est également disponible pour vous aider à développer ce service.
                </p>
              </div>
              <div className="mt-4 text-center">
                <Button
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="/devenir-partenaire"
                >
                  Devenir partenaire du projet
                </Button>
                <Button
                  variant="outline"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  target="_blank" 
                  href="https://lasocietenouvelle.org/Kit-de-mission_Empreinte-Societale.zip"
                >
                  Télécharger le kit de mission
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2>Protection des données</h2>
              <p>
                La protection des données est une priorité pour La Société Nouvelle, qui met en œuvre des mesures 
                rigoureuses pour garantir leur confidentialité, intégrité et sécurité. Toutes les données sont 
                traitées dans le respect du RGPD, avec un hébergement sécurisé en France via OVHCloud.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Metriz;
