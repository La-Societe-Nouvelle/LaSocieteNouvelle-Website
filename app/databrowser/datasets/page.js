import { Container } from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: "Empreintes macroéconomiques - Jeux de données | La Société Nouvelle",
  description: "Consultez les données statistiques sur les empreintes des activités économiques françaises : données historiques, tendances et trajectoires cibles.",
  openGraph: {
    url: "https://lasocietenouvelle.org/databrowser/datasets",
  },
};

const datasets = [
  {
    category: "Données historiques",
    description: "Empreintes des activités économiques françaises sur plusieurs années",
    icon: "clock-history",
    color: "primary",
    items: [
      {
        id: "macro_fpt",
        title: "Empreintes des industries",
        subtitle: "NACE Rév.2 A64",
        description: "Données historiques par industrie selon la nomenclature NACE niveau A64",
        code: "macro_fpt",
        metrics: ["12 indicateurs", "64 industries", "Séries historiques"]
      },
      {
        id: "macro_fpt_a88",
        title: "Empreintes des divisions",
        subtitle: "NACE Rév.2 A88",
        description: "Données historiques par division économique selon la nomenclature NACE niveau A88",
        code: "macro_fpt_a88",
        metrics: ["12 indicateurs", "88 divisions", "Séries historiques"]
      },
      {
        id: "macro_fpt_a38",
        title: "Empreintes des branches",
        subtitle: "NACE Rév.2 A38",
        description: "Données historiques par branche d'activité selon la nomenclature NACE niveau A38",
        code: "macro_fpt_a38",
        metrics: ["12 indicateurs", "38 branches", "Séries historiques"]
      }
    ]
  },
  {
    category: "Empreintes tendancielles",
    description: "Projections et tendances futures des empreintes",
    icon: "graph-up-arrow",
    color: "trend",
    items: [
      {
        id: "macro_fpt_tgt",
        title: "Empreintes tendancielles",
        subtitle: "NACE Rév.2 A88",
        description: "Projections tendancielles des empreintes des activités économiques",
        code: "macro_fpt_tgt",
        metrics: ["12 indicateurs", "88 divisions", "Projections"]
      }
    ]
  },
  {
    category: "Trajectoires cibles",
    description: "Objectifs sectoriels pour la transition écologique et sociale",
    icon: "bullseye",
    color: "target",
    items: [
      {
        id: "macro_fpt_target",
        title: "Trajectoires cibles sectorielles",
        subtitle: "NACE Rév.2 A88",
        description: "Objectifs cibles par secteur pour assurer la compatibilité avec la transition",
        code: "macro_fpt_target",
        metrics: ["12 indicateurs", "88 divisions", "Cibles 2030"]
      }
    ]
  }
];

export default function Datasets() {
  return (
    <div className="datasets-page">
      <section className="datasets-hero">
        <Container>
          <div className="hero-content">
            <h2 className="page-title">Empreintes macroéconomiques</h2>
            <p className="page-description">
              Accédez aux jeux de données statistiques sur les empreintes sociales et
              environnementales des activités économiques françaises.
            </p>
          </div>
        </Container>
      </section>

      <section className="datasets-content">
        <Container>
          {datasets.map((category, index) => (
            <div key={index} className="dataset-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className={`bi bi-${category.icon}`}></i>
                </div>
                <div className="category-info">
                  <h2 className="category-title">{category.category}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="datasets-grid">
                {category.items.map((dataset) => (
                  <Link
                    key={dataset.id}
                    href={`/databrowser/dataset/${dataset.id}`}
                    className={`dataset-card ${category.color}`}
                  >
                    <div className="card-header">
                      <div className="dataset-icon">
                        <i className="bi bi-database-fill"></i>
                      </div>
                      <div className="dataset-code">{dataset.code}</div>
                    </div>
                    <h3 className="dataset-title">{dataset.title}</h3>
                    <p className="dataset-subtitle">{dataset.subtitle}</p>
                    <p className="dataset-description">{dataset.description}</p>
                    <div className="dataset-metrics">
                      {dataset.metrics.map((metric, idx) => (
                        <span key={idx} className="metric-badge">
                          {metric}
                        </span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <span className="view-link">
                        Consulter les données
                        <i className="bi bi-arrow-right ms-2"></i>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="datasets-info">
        <Container>
          <div className="info-card">
            <div className="info-icon">
              <i className="bi bi-info-circle"></i>
            </div>
            <div className="info-content">
              <h3>À propos des nomenclatures NACE</h3>
              <p>
                La nomenclature NACE (Nomenclature statistique des Activités économiques dans la Communauté Européenne)
                est utilisée pour classer les activités économiques. Nos données sont disponibles selon trois niveaux
                de détail : A38 (branches), A64 (industries) et A88 (divisions).
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}