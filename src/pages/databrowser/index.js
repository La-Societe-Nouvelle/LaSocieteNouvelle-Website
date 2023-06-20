import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DataBrowser = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Données statistiques</title>

        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/databrowser"
        />
        <meta
          property="og:description"
          content="Consultez les données statistiques produites par La Société Nouvelle."
        />
      </Helmet>

      <section className="databrowser">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2 className="h1">Données statistiques</h2>
              <p>
                Accédez aux jeux de données statistiques macroéconomiques
                produits par{" "}
                <a
                  href="https://lasocietenouvelle.org"
                  target="_blank"
                >
                  La Société Nouvelle
                </a>
                . Ils visent à fournir un suivi des impacts et de la performance
                des branches d'activité, et des éléments de comparaison pour les
                entreprises.
              </p>
              <Button
                variant="primary"
                className="my-2"
                href="/databrowser/dataset/macro_fpt_a38/?indic=GHG&aggregate=PRD&year=2019"
              >
                <i className="bi bi-search"></i> Explorer les jeux de données
              </Button>
            </Col>
            <Col lg={5}>
              <Image
                src="/illustrations/donnees-par-defaut.svg"
                alt="Illustration de personnes qui consultent des données"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
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
                    <a href="/databrowser/dataset/macro_fpt_a38">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      branches d'activité - données historiques
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/macro_fpt_a88">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      divisions économiques - données historiques
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/macro_fpt_trd_a38">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      branches d'activité - tendances
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/macro_fpt_trd_a88">
                      <i className="bi bi-folder2-open"></i> Empreintes des
                      divisions économiques - tendances
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/macro_fpt_tgt_a38">
                      <i className="bi bi-folder2-open"></i> Objectifs annuels
                      par branches d'activité
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/macro_fpt_tgt_a88">
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
                    <a href="/databrowser/dataset/na_cpeb">
                      <i className="bi bi-folder2-open"></i> Comptes de
                      production et d'exploitation par branche
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/na_ere">
                      <i className="bi bi-folder2-open"></i> Tableau des entrées
                      ressources emplois
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/na_pat_nf">
                      <i className="bi bi-folder2-open"></i> Comptes de
                      patrimoine non-financier
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/na_tei">
                      <i className="bi bi-folder2-open"></i> Tableau des entrées
                      intermédiaires
                    </a>
                  </li>
                  <li>
                    <a href="/databrowser/dataset/na_tess">
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
                    <a href="/databrowser/dataset/bts_data">
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
      <section>
        <Container>
          <h3 className="mb-3">Packages R</h3>
          <Row>
            <Col>
              <Image
                src="/illustrations/package.svg"
                alt="Illustration de personnes qui consultent des données"
              />
            </Col>
            <Col lg={8}>
              <h4>Package CRAN - LSNStat - Accés aux données</h4>
              <p> Le package R <a
                  href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                  target="_blank"
                >
                  Lsnstat
                </a> facilite l'accès au service 'macrodata' de l'API publique 'La Societe Nouvelle'. Il permet une consultation aisée et
                complète de toutes les données macroéconomiques utilisées par La
                Societe Nouvelle, ainsi que de leurs métadonnées associées.
              </p>
              <p>
                L'API correspondante est accessible via le lien suivant :{" "}
                <a href="https://api.lasocietenouvelle.org/" target="_blank">
                  https://api.lasocietenouvelle.org/
                </a>
              </p>
              <h4>Package LsnR-Lab - Production des données</h4>
              <p>
                Le package R lsnR-Lab permet de
                calculer les empreintes sociales et environnementales de la
                production des activités économiques françaises.
              </p>

              <p>
                Utilisez les fonctions fournies pour estimer les empreintes des
                agrégats macroéconomiques des branches (NACE 38) et des divisions (NACE 88)
                économiques. Ces empreintes sont évaluées selon douze dimensions
                sociales et environnementales de l'Empreinte Sociétale.
                Ces données servent à comparer, définir des trajectoires cibles
                et fournir des valeurs par défaut pour les unités légales
                françaises.
              </p>

              <p>
                Découvrez les fonctionnalités du package lsnR-Lab en consultant <a href="https://github.com/La-Societe-Nouvelle/lsnr-lab" target="_blank">notre dépôt GitHub</a> .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DataBrowser;
