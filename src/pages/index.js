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
          La Société Nouvelle | Système d'Information national sur les impacts
          des entreprises
        </title>

        <meta
          property="og:title"
          content="Portail des empreintes sociétales des
          entreprises françaises"
        />
        <meta property="og:url" content="https://lasocietenouvelle.org/" />

        <meta property="og:image" content="/website-screen.jpg" />
      </Helmet>

      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="mb-4">Comptabilité Extra-Financière</h2>
              <p>
                Nous proposons un outil de mesure de comptabilité
                extra-financière axés sur la durabilité et le développement
                durable, en prenant en compte les impacts sociaux et
                environnementaux de chaque décision dans le processus de
                production d’une entreprise.
              </p>
              <p>
                Cette initiative est open data et open source afin de déployer
                au maximum l’information à ce sujet.
              </p>
              <p>
                Notre objectif est de permettre aux entreprises de mesurer, sur
                des dimensions clefs, les impacts de la valeur qu’elles
                produisent.
              </p>
            </Col>
            <Col className="text-end">
              <Image
                fluid
                src="/illustrations/compta-extra-financiere.png"
                alt="Illustration Comptabilité Extra-financière"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <KeyFigures></KeyFigures>
      <section className="mt-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={9}>
              <h2>Mesurez l’impact de la production de votre entreprise</h2>
              <p>
                Grâce à{" "}
                <a href="https://metriz.lasocietenouvelle.org" target="_blank">
                  l’application Web Metriz
                </a>
                , vous pouvez rendre compte des impacts sociaux -
                environnementaux d’un euro de production vendu.
              </p>

              <h3>Pourquoi mesurer son empreinte?</h3>
              <ol>
                <li>
                  Se positionner par rapport à sa branche et aux objectifs
                  socio-environnementaux
                </li>
                <li>Comprendre l’origine de ses impacts</li>
                <li>S’engager dans la transition écologique et sociale</li>
              </ol>
              <div className="mt-4">
                <MetrizButton />
                <Button variant="outline-primary" className="mx-2">
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

      <section className="mb-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <Image
                src="/illustrations/default-data-illu.png"
                alt="Illustration Base de données ouverte"
              />
            </Col>
            <Col>
              <h2>
                Consultez la base de données ouverte sur les impacts de la
                production des entreprises
              </h2>
              <p>
                Vous pouvez connaître gratuitement l’empreinte sociétale des
                entreprises. Ces données peuvent être des valeurs par défaut ou
                provenir directement de la publication des entreprises.
              </p>
              <h3>Pourquoi publier son empreinte?</h3>
              <ol>
                <li>Valoriser votre performance et informer vos clients</li>
                <li>Contribue à une économie plus transparente</li>
                <li>
                  Permettre aux acteurs de votre marché de vous identifier comme
                  acteur de la transition écologique et sociale
                </li>
              </ol>
              <div className="mt-4">
                <Button variant="secondary">Consulter les données</Button>
                <Button className="mx-2">Publier les données</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="text-center bg-light-secondary">
        <Container>
          <h2>Suivis macro-économiques</h2>
          <p>
            Indicateurs clefs relatifs à l'empreinte sociale et environnementale
            de l'économie française
          </p>
          <Row>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"GHG"} />
            </Col>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"WAT"} />
            </Col>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"NRG"} />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h4 className="h3">Nos actualités</h4>
          <LatestPosts></LatestPosts>
          <p className="text-end fw-bold mb-5">
            <a href="/blog" title="Plus d'articles">
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
                  <a href="/faq#qt-0" className="text-primary">Qu'est-ce que l'open-source ?</a>
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
          <div className=" d-flex justify-content-between align-items-center mt-5">
            <div>
              <a href="https://www.euratechnologies.com/" target="_blank">
                <Image
                  height={80}
                  src="/partners/euratech.svg"
                  alt="Euratech"
                ></Image>
              </a>
            </div>
            <div>
              <a
                href="https://www.bpifrance.fr/communaute-du-coq-vert"
                target="_blank"
              >
                <Image
                  fluid
                  src="/partners/Coq_Vert_RVB.png"
                  alt="Coq Vert"
                ></Image>
              </a>
            </div>
            <div>
              <a href="https://www.impactfrance.eco/" target="_blank">
                <Image
                  height={80}
                  src="/partners/Logo_du_Mouvement_Impact_France.svg"
                  alt="Impact France"
                ></Image>
              </a>
            </div>
            <div>
              <a href="https://www.bpifrance.fr/" target="_blank">
                <Image
                  height={80}
                  src="/partners/bpifrance.svg"
                  alt="BPI France"
                  style={{ height: "50px" }}
                ></Image>
              </a>
            </div>
            <div className="text-center">
              <a href="https://www.hautsdefrance.fr/" target="_blank">
                <Image
                  height={80}
                  src="/partners/logo-hdf.svg"
                  alt="Financement Hauts-De-France"
                ></Image>
              </a>
            </div>
            <div>
              <a href="https://www.economie.gouv.fr/" target="_blank">
                <Image
                  height={80}
                  src="/partners/logotype-rouge-bleu.png"
                  alt="France 2030"
                ></Image>
              </a>
              <a href="https://www.economie.gouv.fr/" target="_blank">
                <Image
                  src="/partners/ministere_de_l_economie.svg"
                  alt="Ministère de l'économie "
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
