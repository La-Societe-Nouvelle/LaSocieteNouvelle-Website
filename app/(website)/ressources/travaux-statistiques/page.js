import PageHeader from "@/components/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "La Société Nouvelle | Travaux Statistiques",
  description: "Nos travaux de recherche et modélisation statistique sur l'empreinte sociétale et environnementale des activités économiques françaises.",
};

export default function TravauxStatistiques() {
  return (
    <>
      <PageHeader
        title="Travaux Statistiques"
        subtitle="Recherche et modélisation de l'empreinte des activités économiques"
        icon="bar-chart-line"
      />

      {/* Section Introduction */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h3 className="section__title">
                Une expertise en modélisation statistique au service de la transition
              </h3>
              <div className="section__content">
                <p>
                  Nos travaux de recherche visent à <strong>quantifier l'empreinte sociétale et environnementale
                    des activités économiques françaises</strong> à travers une approche statistique rigoureuse
                  et transparente.
                </p>
                <p>
                  Nous produisons des <strong>séries statistiques macroéconomiques</strong> permettant aux
                  entreprises de se situer par rapport à leur branche d'activité et d'assurer la compatibilité
                  de leurs activités avec les objectifs de la transition écologique et sociale.
                </p>
              </div>
            </Col>
            <Col lg={5} className="text-center">
              <Image
                src="/illustrations/databrowser-hero.svg"
                alt="Data visualization"
                width={500}
                height={400}
                priority
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Méthodologie */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Notre démarche méthodologique
          </h3>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="methodology-step">
                <div className="methodology-step-number">1</div>
                <h4 className="methodology-step-title">Collecte de données</h4>
                <p className="methodology-step-text">
                  Exploitation des bases de données publiques (INSEE, ADEME, Eurostat, etc.)
                  pour constituer nos référentiels statistiques.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="methodology-step">
                <div className="methodology-step-number">2</div>
                <h4 className="methodology-step-title">Modélisation</h4>
                <p className="methodology-step-text">
                  Développement de modèles économétriques pour estimer les externalités
                  par branche d'activité économique.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="methodology-step">
                <div className="methodology-step-number">3</div>
                <h4 className="methodology-step-title">Validation</h4>
                <p className="methodology-step-text">
                  Validation des résultats par confrontation avec d'autres sources
                  et études sectorielles disponibles.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="methodology-step">
                <div className="methodology-step-number">4</div>
                <h4 className="methodology-step-title">Publication</h4>
                <p className="methodology-step-text">
                  Mise à disposition des données en open data via notre API
                  et notre databrowser public.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Productions statistiques */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Nos productions statistiques
          </h3>

          <Row className="g-4 mb-5">
            {/* Empreintes macroéconomiques */}
            <Col lg={4}>
              <div className="research-output">
                <div className="research-output-header">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h4>Empreintes macroéconomiques</h4>
                </div>
                <div className="research-output-body">
                  <p>
                    Séries statistiques annuelles sur les externalités des activités
                    économiques françaises : suivis historiques, analyse des
                    tendances et trajectoires cibles sectorielles pour 2030.
                  </p>
                </div>
                <div className="research-output-footer">
                  <Link href="/databrowser"
                    target="_blank"
                    className="btn btn-outline-primary w-100">
                    Explorer les données
                  </Link>
                </div>
              </div>
            </Col>

            {/* Facteurs d'impacts monétaires */}
            <Col lg={4}>
              <div className="research-output">
                <div className="research-output-header">
                  <i className="bi bi-calculator"></i>
                  <h4>Facteurs d'impacts monétaires</h4>
                </div>
                <div className="research-output-body">
                  <p>
                    Coefficients multiplicateurs pour l'estimation rapide des impacts
                    sociaux et environnementaux à partir des flux monétaires,
                    organisés par activité économique.
                  </p>
                </div>
                <div className="research-output-footer">
                  <Link href="/databrowser/env_impact_factors"
                    target="_blank"
                    className="btn btn-outline-primary w-100">
                    Consulter les facteurs
                  </Link>
                </div>
              </div>
            </Col>

            {/* Baromètre GES */}
            <Col lg={4}>
              <div className="research-output">
                <div className="research-output-header">
                  <i className="bi bi-cloud-haze"></i>
                  <h4>Baromètre GES</h4>
                </div>
                <div className="research-output-body">
                  <p>
                    Estimation territorialisée des émissions de gaz à effet de serre
                    par département et région française, avec décomposition sectorielle
                    et évolution temporelle.
                  </p>

                </div>
                <div className="research-output-footer">
                  <Link href="/databrowser/barometre-ges"
                    target="_blank"
                    className="btn btn-outline-primary w-100">
                    Voir le baromètre
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Outils & Accès */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-4">
            Accédez à nos données
          </h3>
          <p className="text-center mb-5" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            Nos travaux statistiques sont accessibles librement en open data.
            Plusieurs moyens sont à votre disposition pour consulter et intégrer nos données.
          </p>

          <Row className="g-4">
            {/* Databrowser */}
            <Col lg={4}>
              <div className="access-method">
                <div className="access-method-icon">
                  <i className="bi bi-display"></i>
                </div>
                <h4 className="access-method-title">Databrowser</h4>
                <p className="access-method-description">
                  Interface web interactive pour explorer, visualiser et télécharger directement
                  nos jeux de données statistiques.
                </p>
                <Link href="/databrowser" className="btn btn-primary w-100">
                  Accéder au databrowser
                </Link>
              </div>
            </Col>

            {/* API */}
            <Col lg={4}>
              <div className="access-method">
                <div className="access-method-icon">
                  <i className="bi bi-braces"></i>
                </div>
                <h4 className="access-method-title">API REST</h4>
                <p className="access-method-description">
                  API publique et gratuite pour intégrer nos données dans
                  vos applications et systèmes d'information.
                </p>
                <a
                  href="https://api.lasocietenouvelle.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100"
                >
                  Documentation API
                </a>
              </div>
            </Col>

            {/* Package CRAN */}
            <Col lg={4}>
              <div className="access-method">
                <div className="access-method-icon">
                  <i className="bi bi-box-seam"></i>
                </div>
                <h4 className="access-method-title">Package CRAN lsnstat</h4>
                <p className="access-method-description">
                  Package R pour exploiter facilement nos données macroéconomiques,
                  ainsi que leurs métadonnées associées.
                </p>
                <a
                  href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100"
                >
                  Voir sur CRAN
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Publications scientifiques */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="section__title">
                Publications et documentation
              </h3>
              <div className="section__content">
                <p>
                  Nos travaux statistiques ont fait l'objet de <strong>publications </strong>
                  détaillant nos méthodologies, résultats et analyses sectorielles.
                </p>
                <p>
                  Consultez nos notes d'analyse et fiches méthodologiques pour comprendre
                  en détail nos approches de modélisation et d'estimation statistique.
                </p>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/categorie/notes-analyse" className="btn btn-outline-primary">
                  <i className="bi bi-file-text me-2"></i>
                  Notes d'analyse
                </Link>
                <Link href="/categorie/fiches-methodologiques" className="btn btn-outline-primary">
                  <i className="bi bi-book me-2"></i>
                  Fiches méthodologiques
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <div className="publications-visual">
                <div className="pub-icon"><i className="bi bi-file-earmark-text"></i></div>
                <div className="pub-icon"><i className="bi bi-file-earmark-bar-graph"></i></div>
                <div className="pub-icon"><i className="bi bi-file-earmark-ruled"></i></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section CTA finale */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content text-center">
            <h3 className="highlight-section__title">
              Des questions sur nos travaux statistiques ?
            </h3>
            <p className="highlight-section__text">
              Notre équipe est disponible pour échanger sur nos méthodologies,
              vous accompagner dans l'utilisation des données ou discuter de collaborations
              pour de nouveaux travaux de recherche.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              <i className="bi bi-envelope me-2"></i>
              Nous contacter
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
