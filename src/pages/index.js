// Components

// Modules
import React from "react";

import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Graph from "../components/charts/Graph";
import { MetrizButton } from "../components/buttons/MetrizButton";
import { KeyFigures } from "../components/KeyFigures";
import LatestPosts from "../components/posts/LatestPosts";
import BoxNewsletter from "../components/BoxNewsletter";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Informations sur les impacts des entreprises
        </title>
        <meta
          property="og:title"
          content="Portail des empreintes sociétales des
          entreprises françaises"
        />
        <meta property="og:url" content="https://lasocietenouvelle.org/" />
        <meta property="og:image" content="/website-screen.jpg" />
      </Helmet>
      {/* <section className="pt-4 pb-0 m-0">
        <Container>
          <div className="alert alert-danger d-flex justify-content-between p-4">
            <p className="ps-2 pe-2 m-0">
              <i className="bi bi-exclamation-circle"></i> Une consultation publique est en cours pour <strong>réviser 
                les indicateurs de l'Empreinte Sociétale</strong> pour l'année 2025. <br/>Vous pouvez donner votre avis sur
                les propositions en répondant au questionnaire (lien à droite) jusqu'au 03/10/2024.
            </p>
            <a
              href="https://forms.office.com/e/rhDS4NL6De"
              target="_blank"
              className="btn btn-secondary w-25 p-auto"
            >
              <i className="bi bi-check2-square"></i> Donner mon avis
            </a>
          </div>
        </Container>
      </section> */}
      <section className="homepage-blocs pt-0">
        <Container>
          <Row>
            <Col lg={6}>
              <a href="/portail" target="_blank" className="bloc  bg-light-purple">
                <h2>Accédez aux données des entreprises </h2>
                <p>
                  Consultez l'empreinte sociétale d'une entreprise à 
                  partir de son numéro SIREN ou de sa dénomination. Les données
                  sont accessibles via notre portail web et notre API publique.
                </p>
              </a>
            </Col>
            <Col lg={6}>
              <a
                href="/publier-empreinte"
                className="bloc  bg-light-orange text-end"
              >
                <h2>Mesurez et publiez l'empreinte de votre entreprise</h2>
                <p className="ms-auto">
                  Notre application web libre et open source Metriz vous permet 
                  de mesurer l'empreinte de votre production sur 12 dimensions
                  sociales et environnementales clés.
                </p> 
              </a>
            </Col>
            <Col lg={6}>
              <a href="/databrowser" target="_blank" className="bloc bg-light-green">
                <h2>Accédez aux données statistiques</h2>
                <p>
                  L'ensemble des données issues de nos travaux statistiques
                  sont librement téléchargeables. Elles comprennent un suivi des
                  empreintes des activités économiques françaises et des 
                  trajectoires sectorielles cibles.
                </p>
              </a>
            </Col>
            <Col lg={6}>
              <a href="/devenir-partenaire" target="_blank" className="bloc  bg-light-blue text-end">
                <h2>Devenez partenaire du projet</h2>
                <p className="ms-auto">
                  Contribuez à l'accélération de cette initiative libre
                  en proposant le service de mesure à vos clients, 
                  en soumettant des contributions open source
                  ou en sponsorisant nos travaux.
                </p>
              </a>
            </Col>
          </Row>
          <div className="homepage-illu d-none d-lg-block">
            <Image
              src="/illustrations/compta-extra-financiere.svg"
              alt="Illustration de l'empreinte sociétale par La Société Nouvelle montrant plusieurs éléments symboliques."
              height={300}
            />
          </div>
        </Container>
      </section>
   
      <KeyFigures />

      <section className="mt-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center">
                <Image
                  className="mb-4 mb-lg-0"
                  src="/illustrations/default-data-illu.png"
                  alt="Illustration de personnes qui consultent des données"
                />
            </Col>
            <Col>
              <h2>
                Consultez la base de données ouverte sur les impacts de la
                production des entreprises
              </h2>
              <p>
                Accédez <b>librement</b> aux empreintes sociétales
                des entreprises. En l'absence de données publiées par l'entreprise 
                ou de données estimées à partir de déclarations publiques, des données par défaut
                (issues de nos travaux statistiques) apparaîtront.
              </p>
              <h3>Vous êtes une entreprise, pourquoi publier votre empreinte ?</h3>
              <ol>
                <li>Valoriser votre performance et informer vos clients</li>
                <li>Contribuer à une économie plus transparente</li>
                <li>
                  Permettre aux acteurs de votre marché de vous identifier comme
                  acteur de la transition écologique et sociale
                </li>
              </ol>
              <div className="mt-4 d-flex justify-content-sm-start justify-content-center">
                <Button
                  variant="secondary"
                  href="/portail"
                  title="Consulter les données"
                >
                  Consulter les données
                </Button>
                <Button
                  className="mx-2"
                  href="/publier-empreinte"
                  title="Publier mes données"
                >
                  Publier mes données{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mb-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={9}>
              <h2>Comment sont mesurés les impacts de la production d'une entreprise ?</h2>
              <p>
                La mesure prend en compte les 
                impacts directs des opérations et les impacts indirects
                liés aux consommations intermédiaires (achats, prestations services, etc.)
                et aux consommations de capital fixe (amortissements des immobilisations).
              </p>
              <p>
                Une {" "}
                <a href="https://metriz.lasocietenouvelle.org" target="_blank">
                  application Web Metriz
                </a> est mise à disposition pour faciliter la mesure. Elle permet de faire 
                le lien entre les données comptables, les empreintes de la production des
                fournisseurs et les impacts directs des opérations.
              </p>

              <h3>Pourquoi mesurer son empreinte ?</h3>
              <ol>
                <li>
                  Se positionner par rapport à sa branche et aux objectifs
                  socio-environnementaux
                </li>
                <li>Comprendre l'origine de ses impacts</li>
                <li>S'engager dans la transition écologique et sociale</li>
              </ol>
              <div className="mt-4 d-flex justify-content-sm-start justify-content-center mb-4 mb-sm-0">
                <MetrizButton />
                <Button
                  variant="outline-primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2"
                  href="/ressources/application-mesure-impact"
                >
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col lg={3} className="text-end">
              <Image
                fluid
                src="/illustrations/diminuer-impact.png"
                alt="Illustration Mesure de l'impact"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className=" bg-light-secondary">
        <Container>
          <h2 className="text-center">Suivis macro-économiques</h2>
          <p className="text-center">
            Indicateurs clefs relatifs à l'empreinte sociale et environnementale
            de l'économie française
          </p>
          <Row>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"ghg"} />
            </Col>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"wat"} />
            </Col>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"nrg"} />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h4 className="h3">Nos actualités</h4>
          <LatestPosts></LatestPosts>
          <p className="text-end fw-bold mb-5">
            <a href="/blog" title="Voir tous les articles">
              &raquo; Plus d'articles ?{" "}
            </a>
          </p>
          <BoxNewsletter></BoxNewsletter>
        </Container>
      </section>
      <section className="faq">
        <Container>
          <h4 className="h3">FAQ</h4>
          <Row>
            <Col lg={6}>
              <div className="question-box p-4 rounded">
                <p>
                  <a href="/faq#qg-0" className="text-primary">
                    Qu'est-ce que l'empreinte sociétale ?
                  </a>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="question-box p-4 rounded">
                <p>
                  <a href="/faq#qg-1" className="text-primary">
                    Pourquoi mesurer l'empreinte sociétale de ses activités ?
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={6}>
              <div className="question-box p-4 rounded">
                <p>
                  <a href="/faq#qt-0" className="text-primary">
                    Qu'est-ce que l'open-source ?
                  </a>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="question-box p-4 rounded">
                <p>
                  <a href="/faq#qg-7" className="text-primary">
                    Quel est notre business model ?
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <p className="text-end fw-bold mt-5">
            <a href="/faq">&raquo; D'autres questions ?</a>
          </p>
        </Container>
      </section>
      <hr className="container"></hr>

      {/* Partenaires */}
      <div className="partenaires mb-5 pt-3">
        <Container>
          <h3 className="text-center">Avec le soutien de</h3>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div>
              <a
                href="https://www.euratechnologies.com/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  height={80}
                  src="/partners/euratech.svg"
                  alt="Logo Euratech"
                ></Image>
              </a>
            </div>
            <div>
              <a
                href="https://www.bpifrance.fr/communaute-du-coq-vert"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  fluid
                  src="/partners/Coq_Vert_RVB.png"
                  alt="Logo Coq Vert"
                ></Image>
              </a>
            </div>
            <div>
              <a
                href="https://www.impactfrance.eco/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  height={80}
                  src="/partners/Logo_du_Mouvement_Impact_France.svg"
                  alt="Logo Mouvement Impact France"
                ></Image>
              </a>
            </div>
            <div>
              <a
                href="https://www.bpifrance.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  height={80}
                  src="/partners/bpifrance.svg"
                  alt="Logo BPI France"
                  style={{ height: "50px" }}
                ></Image>
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://www.hautsdefrance.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  height={80}
                  src="/partners/logo-hdf.svg"
                  alt="Logo Financement Hauts-De-France"
                ></Image>
              </a>
            </div>
            <div>
              <a
                href="https://www.economie.gouv.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  height={80}
                  src="/partners/logotype-rouge-bleu.png"
                  alt="Logo France 2030"
                ></Image>
              </a>
              <a
                href="https://www.economie.gouv.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/ministere_de_l_economie.svg"
                  alt="Logo Ministère de l'économie "
                  height={80}
                ></Image>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
