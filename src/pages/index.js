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

import metadataIndics from "../lib/metaData.json";

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
      <section className="p-0 m-0">
        <div className="alert alert-success d-flex justify-content-between m-0 px-5 py-2 rounded-0">
          <p className="m-0 pt-1">
            <i className="bi bi-exclamation-circle"></i> La nouvelle version Partenaire de METRIZ est disponible : créez votre compte gratuitement !
          </p>
          <a
            href="https://partners.metriz.lasocietenouvelle.org/"
            target="_blank"
            className="btn btn-success py-1 px-5 rounded-0"
          >
            <i className="bi bi-check2-square"></i> Créer mon compte
          </a>
        </div>
      </section>
      <section className="mw-100 ms-5 px-4 pt-5 pb-0 text-center">
        <Container className="mw-100">
          <Row className="ps-5 align-items-end">
            <Col lg={3} className="mb-5 ps-5 pb-5 text-start">
              <h1>Répertoire SINESE</h1>
              <p>Base de données ouverte sur l'empreinte sociétale des entreprises françaises.</p>
              <p>+ de 5 millions d'entreprises modélisées</p>
              <Button
                className="rounded-0 w-75 my-3"
                target="_blank"
                href="https://sinese.fr"
                title="Portail SINESE"
              >
                Accéder au portail{" "}
                <i className="bi bi-box-arrow-up-right ms-2"/>
              </Button>
            </Col>
            <Col lg={9} className="ps-5">
              <Image
                className="w-100 opacity-75"
                src="/illustrations/illustration-home-page-5.png"
                alt="Illustration page d'accueil"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light">
        <Container fluid className="mt-1 px-5">
          <Row>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Documentation</h3>
                <p>
                  La méthodologie est publique et libre d'exploitation. Toutes nos documentations sont accessibles
                  librement en ligne.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-documentation.png"
                  alt="Illustration Documentation"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                />
                <Button 
                  size="sm" 
                  href="https://docs.lasocietenouvelle.org"
                  target="_blank"
                  className="rounded-0"
                  variant="outline"
                >
                  Consulter la documentation
                </Button>
              </div>
            </Col>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Notre Solution METRIZ</h3>
                <p>
                  Mesurer l'empreinte sociétale de votre entreprise ou proposer le service pour vos clients.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-webapp.png"
                  alt="Illustration WebApp"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                />
                <Button 
                  size="sm" 
                  target="_blank"
                  href="https://partners.metriz.lasocietenouvelle.org"
                  className="rounded-0"
                  variant="outline"
                >
                  Découvrir l'application
                </Button>
              </div>
            </Col>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Espace partenaire</h3>
                <p>
                  Vous êtes expert-comptable ? Utilisez nos ressources pour informer vos clients sur leur
                  performance extra-financière.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-partners.png"
                  alt="Illustration Partenaires"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                />
                <Button
                  size="sm"
                  href="/devenir-partenaire"
                  className="bg-blue-bis rounded-0"
                  variant="outline"
                >
                  Devenir partenaire
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
   
      <KeyFigures />

      <section className="bg-light">
        <Container>
          <h2 className="text-center mb-5">Qu'est-ce que l'Empreinte Sociétale ?</h2>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <p>
                L'Empreinte Sociétale est un <strong>panel d'indicateurs sociaux et environnementaux</strong> relatif à
                la production vendue d'une unité légale.
              </p>
              <p>
                Les indicateurs expriment les externalités associées à un euro
                de chiffre d'affaires sur des dimensions clés liés aux Objectifs de Développement Durable.
              </p>
              <p>
                Un comité de gouvernance a été constitué pour une révision annuelle des indicateur.
              </p>
              {metadataIndics.odds_ese.map((odd, index) => (
                <Image
                  key={index}
                  className="F-WEB-Goal mx-1 mt-4 mb-5"
                  id={"F-WEB-Goal-" + odd}
                  src={"/images/odd/F-WEB-Goal-" + odd + ".png"}
                  width="50px"
                  alt="F-WEB-Goal"
                />
              ))}
              <div className="pt-2">
                <Button
                  variant="primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="/indicateurs"
                >
                  Découvrir les indicateurs
                </Button>
                <Button
                  style={{backgroundColor: "#1798d5", border: "0px"}}
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="https://www.agenda-2030.fr/"
                  target="_blank"
                >
                  Site de l'Agenda 2030<i className="bi bi-box-arrow-up-right ms-2"/>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mb-4">
        <Container>
          <h2>Qui sommes-nous ?</h2>
          <Row className="align-items-center">
            <Col lg={7}>
              <p>
                La Société Nouvelle est la structure porteuse d'un <strong>Système d'information 
                nationale sur les impacts des entreprises (SINESE)</strong>. Il s'agit d'une initiative 
                Open Data et Open Source, menée en collaboration avec des cabinets comptables.
              </p>
              <p>
                Notre volonté est d'apporter une transparence sur la 
                performance extra-financière des entreprises, pour identifier celles dont les 
                activités sont alignées avec les objectifs et plans nationaux, sur les enjeux clés 
                de durabilité.
              </p>
              <p>
                La Société Nouvelle réalise des travaux statistiques pour suivre 
                l'empreinte des activités économiques à l'échelle macroéconomique et formuler des 
                trajectoires cibles sectorielles, alignées avec les objectifs et plans nationaux.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline-primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="/a-propos"
                >
                  Nous découvrir
                </Button>
                {/* <Button
                  variant="primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="/services"
                >
                  Nos services
                </Button> */}
              </div>
            </Col>
            <Col lg={5} className="text-end">
              <div className="bordered border-light p-0 bg-white rounded">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/B5XB4iEPRLU?si=hYQY-1z-N-fD7_pn" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partenaires */}
      <div className="partenaires mb-5 pt-3">
        <Container className="">
          <h2 className="mb-5">Nos partenaires & sponsors</h2>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              <a
                href="https://www.quovive.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-quovive.jpg"
                  alt="Logo Quovive"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.acora.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-acora.jpg"
                  alt="Logo ACORA"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.ace4rse.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-ace4rse.jpg"
                  alt="Logo ACE4RSE"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://lita-ec.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-lita.jpg"
                  alt="Logo Lita"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.harmonium-experts.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-harmonium.jpg"
                  alt="Logo Harmonium"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://www.audimis.com/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-audimis.jpg"
                  alt="Logo Lita"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
            <div>
              <a
                href="https://fullvalue.fr/"
                target="_blank"
                title="Accéder au site"
              >
                <Image
                  src="/partners/logo-full-value.jpg"
                  alt="Logo Full Value"
                  style={{ height: "100px"}}
                />
              </a>
            </div>
          </div>
        </Container>
        <Container className="mt-5">
          <h2 className="mb-5">Notre écosystème</h2>
          <div className="d-flex justify-content-between align-items-center">
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
                />
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
                />
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
                />
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
                />
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
                />
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
                />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <section className="mb-4 bg-light">
        <Container>
          <h2 className="text-center mb-5">Nos services commerciaux</h2>
          <Row className="align-items-start">
            <Col lg={4} className="text-center px-5">
              <h3>Analyse extra-financière</h3>
              <div>
                <p>
                  à destination des TPE/PME
                </p>
                <p>
                  Vous souhaitez obtenir l'empreinte sociétale de votre entreprise ?
                  Nous vous accompagnons dans la production des indicateurs, et nous 
                  vous proposons une analyse de vos résultats.
                </p>
              </div>
            </Col>
            <Col lg={4} className="text-center px-5">
              <h3>Etude prospective</h3>
              <div>
                <p>
                  à destination des syndicats professionnels
                </p>
                <p>
                  Vous souhaitez connaître les enjeux sociaux et environnementaux
                  liés à votre activité économique ? Nous adaptons nos travaux de 
                  modélisation statistique pour anticiper les évolutions et dessiner
                  des trajectoires cibles.
                </p>
              </div>
            </Col>
            <Col lg={4} className="text-center px-5">
              <h3>Développement informatique</h3>
              <div>
                <p>
                  à destination des structures d'accompagnement
                </p>
                <p>
                  Vous souhaitez développer des outils autour de
                  la production d'indicateurs extra-financiers ?
                  Nous mettons à votre disposition notre expertise
                  autour de traitement des données financières et
                  sociales, et de la production de tableau de bord.
                </p>
              </div>
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
        </Container>
      </section>

      <section className="m-0 p-0 bg-light">
        <Container>
          <BoxNewsletter></BoxNewsletter>
        </Container>
      </section>
      
    </>
  );
};

export default Home;
