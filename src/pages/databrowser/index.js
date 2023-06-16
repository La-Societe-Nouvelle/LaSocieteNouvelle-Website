import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DataBrowser = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Accéder à l'ensemble des données
          macroéconomiques produites par la société nouvelle
        </title>

        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/databrowser"
        />
        <meta
          property="og:description"
          content="Consultez les données macroéconomique produites par La Société Nouvelle."
        />
        {/*      <meta property="og:image" content="/portail.jpg" /> */}
      </Helmet>

      <section className="databrowser">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2 className="h1">Retrouvez les données macroéconomiques</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget velit euismod, varius mi sed, tristique dolor. Donec
                imperdiet aliquet augue, nec accumsan diam.
              </p>
            </Col>
            <Col lg={5}>
              <Image
                src="/illustrations/default-data-illu.png"
                alt="Illustration de personnes qui consultent des données"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light mb-5">
        <Container>
          <h3 className="text-center mb-5">Jeux de données</h3>
          <Row>
            <Col>
              <div className="box h-100">
                <h4>
                  <i className="bi bi-archive-fill"></i> Empreintes des
                  activités économiques
                </h4>
                <ul className="list-unstyled datasets-list">
                  <li>
                    <a href="/databrowser/macro_fpt_a38">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      branches d'activité - données historiques
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/macro_fpt_a88">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      divisions économiques - données historiques
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/macro_fpt_trd_a38">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      branches d'activité - tendances
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/macro_fpt_trd_a88">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      divisions économiques - tendances
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/macro_fpt_tgt_a38">
                      <i className="bi bi-folder2-open"></i> Objectifs annuels
                      par branches d'activité
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/macro_fpt_tgt_a88">
                      <i className="bi bi-folder2-open"></i> Objectifs annuels
                      des divisions économiques
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="box h-100">
                <h4>
                  <i className="bi bi-archive-fill"></i> Données des comptes
                  nationaux
                </h4>
                <ul className="list-unstyled datasets-list">
                  <li>
                    <a href="/databrowser/na_cpeb">
                      <i className="bi bi-folder2-open"></i> Comptes de
                      production et d'exploitation par branche
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/na_ere">
                      <i className="bi bi-folder2-open"></i> Tableau des entrées
                      ressources emplois
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/na_pat_nf">
                      <i className="bi bi-folder2-open"></i> Comptes de
                      patrimoine non-financier
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/na_tei">
                      <i className="bi bi-folder2-open"></i> Tableau des entrées
                      intermédiaires
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/na_tess">
                      <i className="bi bi-folder2-open"></i> Tableau des
                      entrées-sorties symétrique
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="box h-100">
                <h4>
                  <i className="bi bi-archive-fill"></i> Données sociales
                </h4>
                <ul className="list-unstyled datasets-list">
                  <li>
                    <a href="/databrowser/bts_data">
                      <i className="bi bi-folder2-open"></i> Indicateurs issus
                      de la base tous salariés
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DataBrowser;
