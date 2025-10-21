import { notFound } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import metaData from "@/lib/metaData.json";
import odds_targets from "@/lib/odds_targets.json";
import TrendChart from "@/components/charts/TrendChart";

/**
 * Génère les métadonnées dynamiques pour chaque indicateur
 */
export async function generateMetadata({ params }) {
  const { indic } = await params;
  const indicData = metaData[indic];

  if (!indicData) {
    return {
      title: "Indicateur introuvable | La Société Nouvelle"
    };
  }

  return {
    title: `${indicData.libelle} | La Société Nouvelle`,
    description: indicData.description
  };
}

/**
 * Génère les paramètres statiques pour tous les indicateurs
 * Permet une génération statique des pages au build
 */
export async function generateStaticParams() {
  return metaData.indics.map((indic) => ({
    indic: indic
  }));
}

/**
 * Composant PageHeader personnalisé pour les indicateurs
 */
function IndicatorPageHeader({ indicData, indic }) {
  return (
    <header className="page-header-section">
      <Container>
        <div className="page-header-content">
          {/* Icône SVG de l'indicateur */}
          <div className="page-header-icon">
            <Image
              src={`/ESE/gen2/illustration-g2-${indic}.png`}
              alt={`Icône ${indicData.libelle}`}
              width={60}
              height={60}
            />
          </div>

          {/* Titre */}
          <h2 className="page-header-title">{indicData.libelle}</h2>

        </div>
      </Container>
    </header>
  );
}

/**
 * Page de présentation détaillée d'un indicateur
 */
export default async function IndicateurDetailPage({ params }) {
  const { indic } = await params;
  const indicData = metaData[indic];

  // Si l'indicateur n'existe pas, déclencher la page 404
  if (!indicData) {
    notFound();
  }

  return (
    <>
      <IndicatorPageHeader indicData={indicData} indic={indic} />

      {/* Section Présentation */}
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h3 className="section__title mb-4">Présentation</h3>
              <div className="section__content mb-3">
                <p className="mb-4">
                  {indicData.finalite}
                </p>
              </div>


              {/* Impact direct mesuré */}
              <div
                className="impact-direct-card p-4 rounded-3 border-start border-4"
                style={{
                  borderColor: indicData.primaryColor,
                  backgroundColor: `${indicData.primaryColor}08`
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: indicData.primaryColor,
                      color: 'white'
                    }}
                  >
                    <i className="bi bi-speedometer2 fs-5"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="h6 mb-2 fw-semibold">Impact direct mesuré</h4>
                    <p className="mb-0 text-muted small">
                      {indicData.descriptionImpactDirect}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-3 pt-3 border-top"
                  style={{ borderColor: `${indicData.primaryColor}30` }}
                >
                  <p className="mb-0 small text-muted">
                    <i className="bi bi-info-circle me-2"></i>
                    L'impact direct est associé à la valeur ajoutée nette de
                    l'entreprise. Pour la valeur produite, la mesure est complétée par
                    les impacts indirects liés aux consommations et aux
                    amortissements, obtenus à partir des données des entreprises
                    sollicitées.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section ODD */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h3 className=" section__title section__title--center text-center mb-4">Objectifs de Développement Durable</h3>

              {/* Vue d'ensemble des ODD associés */}
              <div className="mb-3">
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {indicData.odds.map((odd) => (
                    <Image
                      key={odd}
                      src={`/images/odd/F-WEB-Goal-${odd}.png`}
                      width={70}
                      height={70}
                      className=" mt-4"
                      alt={`ODD ${odd}`}
                      style={{
                        borderRadius: '6px'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Détails des cibles ODD */}
              {indicData.odds_targets && indicData.odds_targets.length > 0 && (
                <div className="mt-3">
                  <h4 className="mb-3" style={{ fontSize: '1rem' }}>
                    <i className="bi bi-bullseye me-2" style={{ color: indicData.primaryColor }}></i>
                    Cibles ODD associées
                  </h4>
                  <div className="d-flex flex-column gap-2">
                    {indicData.odds_targets.map((target) => (
                      <div
                        key={target}
                        className="d-flex align-items-start gap-2 p-2 bg-white"
                        style={{
                          borderLeft: `3px solid ${indicData.primaryColor}`,
                          borderRadius: '0 8px 8px 0'
                        }}
                      >
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 fw-bold"
                          style={{
                            width: '36px',
                            height: '36px',
                            backgroundColor: `${indicData.primaryColor}15`,
                            color: indicData.primaryColor,
                            fontSize: '0.75rem'
                          }}
                        >
                          {target}
                        </div>
                        <p className="mb-0 flex-grow-1" style={{ lineHeight: '1.5', fontSize: '0.85rem' }}>
                          {odds_targets[target]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Suivi macroéconomique */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h4 className="section__title mb-4">Suivi macroéconomique</h4>

              <div className="bg-white rounded shadow-sm p-4">
                <h3 className="h5 mb-4">
                  <i className="bi bi-graph-up me-2 text-primary"></i>
                  Empreinte de la production française
                </h3>
                <TrendChart
                  indic={indic.toUpperCase()}
                  country="FRA"
                  industry="TOTAL"
                  aggregate="PRD"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
