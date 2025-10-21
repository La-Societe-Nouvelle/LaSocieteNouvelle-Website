import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "La Société Nouvelle | Entreprises",
  description: "Pilotez et valorisez votre performance extra-financière. Mesurez les impacts de votre valeur ajoutée.",
};

const features = [
  {
    icon: "bi-graph-up-arrow",
    title: "Performance mesurable",
    description: "Obtenez des indicateurs chiffrés sur vos impacts sociaux et environnementaux"
  },
  {
    icon: "bi-globe",
    title: "Transparence renforcée",
    description: "Communiquez sur votre engagement avec des données vérifiables et traçables"
  },
  {
    icon: "bi-shield-check",
    title: "Conformité facilitée",
    description: "Répondez aux exigences réglementaires et aux attentes de vos parties prenantes"
  }
];

export default function Entreprises() {
  return (
    <div className="entreprises-page">
      {/* Section Hero */}

      <PageHeader
        title="Entreprises"
        subtitle="Pilotez et valorisez votre performance extra-financière"
        icon="building"
      />

      <section className="section section--secondary">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="section-header text-center mb-4 mb-md-5">
                <h3 className="section__title">Pilotez et valorisez votre performance extra-financière  </h3>
              </div>
              <p >
                Climat, inégalités sociales, raréfaction des ressources
                naturelles... Les entreprises ont un rôle majeur dans la
                construction d'une <strong>société durable</strong>. Il est désormais
                incontournable pour une entreprise de prendre en compte ces
                enjeux clefs si elle veut assurer sa pérennité.
              </p>
              <p >
                <strong>Mesurer les impacts de sa valeur ajoutée et de sa valeur
                  produite</strong> permet d'évaluer sa capacité à produire de la valeur en
                <strong> limitant ses impacts négatifs</strong>, de se positionner vis-à-vis de sa
                branche d'activités et des objectifs de développement durable
                fixés.
              </p>
              <p >
                La publication des indicateurs à l'échelle de votre chiffre
                d'affaires <strong>valorise votre performance</strong> auprès de vos clients,
                leur performance faisant intervenir la vôtre.
              </p>
              <p >
                La démarche vous permet d'être <strong>transparent</strong> sur l'empreinte que
                vous laissez sur la société et l'environnement, et de prouver
                que vos activités s'inscrivent dans une trajectoire visant à
                atteindre une <strong>économie soutenable</strong>.
              </p>
            </Col>
            <Col lg={5} className="text-center">
              <Image
                src="/illustrations/entreprise-illu.svg"
                alt="Illustration pour les entreprises avec représentation des données"
                width={450}
                height={400}
                className="hero-image"
                priority
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section METRIZ */}
      <section className="section ">
        <Container>
          <div className="section-header text-center mb-4 mb-md-5">
            <h3 className="section__title section__title--center ">
              Mesurer vos indicateurs grâce à notre application web
            </h3>

            <p className="section-subtitle">
              Une application web Open Source est à votre disposition pour mesurer
              ces indicateurs. Elle permet de faire le lien entre votre FEC
              (Fichier d'Ecritures Comptables), les données disponibles relatives
              à vos fournisseurs et vos impacts directs pour produire
              automatiquement des livrables téléchargeables.
            </p>
          </div>



          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} lg={4}>
                <div className="cta-card cta-card-secondary">
                  <div className="cta-card-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="cta-card-title">{feature.title}</h4>
                  <p className="cta-card-description">{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Link href="https://partners.metriz.lasocietenouvelle.org/" target="_blank" className="btn btn-secondary btn-lg">
              Accéder à Metriz
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </Container>
      </section>

      {/* Section Principe */}
      <section className="highlight-section mb-5">

        <Container>
          <div className="highlight-section__content">

            <Row className="align-items-center">
              <Col lg={7}>
                <h4 className="highlight-section__title">Principe de calcul</h4>
                <p className="highlight-section__text">
                  Du fait des consommations intermédiaires et de capital fixe, la
                  valeur produite d'une entreprise fait intervenir celle d'autres
                  entreprises. La mesure des indicateurs fait donc appel aux
                  empreintes sociétales des fournisseurs pour estimer les impacts
                  de ces flux sortants.
                </p>
                <p className="principe-text">
                  Le modèle des indicateurs suit ainsi les principes suivants :
                </p>
                <ul className="principe-list">
                  <li>
                    Les impacts liés à la valeur ajoutée nette (production réduite
                    des consommations) correspondent aux impacts directs de
                    l'entreprise sur son périmètre opérationnel
                  </li>
                  <li>
                    Les impacts liés aux flux économiques sortants (consommations
                    intermédiaires et consommations de capital fixe) sont obtenus
                    via l'empreinte sociétale des fournisseurs
                  </li>
                </ul>
                <p className="principe-text">
                  Le modèle permet ainsi de mettre en place une traçabilité le
                  long des chaînes de valeurs. L'empreinte sociétale d'une
                  entreprise dépend de celle de ses fournisseurs et impacte celle
                  de ses clients.
                </p>
              </Col>

              <Col lg={5} className="text-center mt-4 mt-lg-0">
                <div className="highlight-section__illustration">
                  <Image
                    src="/images/graphique-donut.png"
                    alt="Graphique Principe de calculs"
                    width={450}
                    height={400}
                  />
                </div>
              </Col>

            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}
