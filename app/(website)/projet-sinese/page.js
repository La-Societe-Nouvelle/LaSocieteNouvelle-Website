'use client';

import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";


export default function ProjetSinese() {
  const stats = [
    {
      icon: "building",
      value: "+ 5 millions",
      label: "d'entreprises référencées et modélisées"
    },
    {
      icon: "database",
      value: "84 150",
      label: "données extra-financières déjà disponibles"
    },
    {
      icon: "graph-up-arrow",
      value: "+ 500 000",
      label: "requêtes reçues en 2024 via notre API Publique"
    }
  ];

  return (
    <>
      <PageHeader
        title="Projet SINESE"
        subtitle="Système d'Information National sur l'Empreinte Sociétale des Entreprises"
        icon="database"
      />


      {/* Section Stats */}
      <section className="key-figures-section">
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col md={4} key={index}>
                <div className={`key-figure-card ${index % 3 === 1 ? 'variant-secondary' : ''}`}>
                  <div className="key-figure-icon">
                    <i className={`bi bi-${stat.icon}`}></i>
                  </div>
                  <div className="key-figure-value">
                    <span className="value-number">{stat.value}</span>
                  </div>
                  <p className="key-figure-title">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Section Introduction */}
      <section className="section ">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="section__title">
                Un système de comptabilité extra-financière collaboratif
              </h3>
              <div className="section__content">
                <p>
                  <strong>SINESE</strong> (Système d'Information National sur l'Empreinte Sociétale des Entreprises) est un
                  système d'information visant à permettre à chaque entreprise de mesurer et rendre compte
                  des externalités associées à sa production.
                </p>
                <p>
                  La démarche repose sur une approche collaborative : chaque entreprise récupère l'empreinte
                  sociétale de ses fournisseurs pour estimer ses <strong>impacts indirects</strong>, et met à disposition de
                  ses clients sa propre empreinte pour qu'ils puissent à leur tour estimer <strong>leurs impacts
                    indirects</strong>.
                </p>
                <p>
                  L'Empreinte Sociétale constitue le panel de <strong>dimensions sociales et environnementales</strong> concernées
                  par ce système d'information.
                </p>
              </div>
              <div className="section__actions">
                <Link href="/indicateurs" className="btn btn-secondary">
                  L'Empreinte Sociétale
                  <i className="ms-2 bi bi-arrow-right"></i>
                </Link>
                <Link
                  href="https://www.sinese.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Les données des entreprises
                  <i className="ms-2 bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <div className="section__illustration">
                <Image
                  src="/illustrations/sinese-illu-section.svg"
                  alt="Illustration Application mesure impact"
                  width={500}
                  height={400}
                  className="img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Section Méthodologie */}
      <section className="section section--secondary">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-1">
              <div className="section__illustration">
                <Image
                  src="/illustrations/methodology-learning.svg"
                  alt="Illustration Méthodologie"
                  width={500}
                  height={400}
                  className="img"
                />
              </div>
            </Col>
            <Col lg={6} className="order-lg-2">
              <h3 className="section__title">
                Une méthodologie ouverte et accessible à tous
              </h3>
              <div className="section__content">
                <p>
                  La méthodologie de mesure est publique et libre d'exploitation afin de garantir
                  une <strong>transparence et une accessibilité à l'ensemble des acteurs économiques</strong>.
                </p>
                <p>
                  Par cette démarche, nous permettons aux entreprises, experts-comptables, chercheurs
                  et institutions de s'approprier ces indicateurs et de les intégrer dans leurs propres pratiques,
                  assurant ainsi <b>une adoption plus large et une montée en maturité collective</b>.
                </p>
                <p>
                  Notre objectif, via cette approche, est de <b>favoriser la généralisation de la mesure de
                    l'empreinte sociétale</b>, essentielle pour obtenir une véritable traçabilité des impacts
                  le long des chaines de valeur.
                </p>
                <p>
                  Chaque entreprise peut réaliser elle-même la mesure de son empreinte sociétale, ou faire appel
                  à un prestataire extérieur, indépendant de La Société Nouvelle.
                </p>
              </div>
              <div className="section__actions">
                <Link
                  href="https://docs.lasocietenouvelle.org/empreinte-societale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Accéder à la documentation <i className="ms-2 bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Metriz */}
      <section className="section">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={6}>
              <Image
                className="img"
                src="/images/metriz/application-mesure-impact.png"
                alt="Illustration Application mesure impact"
                width={600}
                height={450}
                style={{ width: '80%', height: 'auto', maxWidth: '500px' }}
              />
            </Col>
            <Col lg={6}>
              <h3 className="section__title">
                Mesurez votre empreinte sociétale avec METRIZ
              </h3>
              <div className="section__content">
                <p>
                  <strong>METRIZ</strong> est une solution gratuite mise à disposition par La Société Nouvelle
                  pour permettre aux entreprises de mesurer leur empreinte sociétale.
                </p>
                <p>
                  L'application s'interface avec les principaux logiciels comptables et permet d'<b>obtenir
                    automatiquement</b> les données de vos fournisseurs pour estimer vos impacts indirects.
                </p>
                <p>
                  Elle vous permet également de <strong> publier votre empreinte sociétale</strong> pour la rendre accessible
                  à vos clients et partenaires, favorisant ainsi la <strong>transparence</strong> le long de la chaîne de valeur.
                </p>
              </div>
              <div className="section__actions">
                <Link
                  href="https://partners.metriz.lasocietenouvelle.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary x"
                >
                  Accéder à METRIZ
                  <i className="ms-2 bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section API */}
      <section className="section section--secondary">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <div className="section__illustration">
                <Image
                  src="/illustrations/api-illustration.svg"
                  alt="Illustration API"
                  width={500}
                  height={400}
                  className="img"
                />
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <h3 className="section__title">
                Intégrez les données dans vos outils via notre API Publique
              </h3>
              <div className="section__content">
                <p>
                  L'<strong>API Publique</strong> permet à chaque logiciel comptable ou outil de gestion
                  d'<b>intégrer la mesure de l'empreinte sociétale</b> directement dans ses fonctionnalités.
                </p>
                <p>
                  Elle donne accès aux données extra-financières de plus de <b>5 millions d'entreprises
                    françaises</b>, permettant un suivi automatique de l'empreinte des achats et des investissements.
                </p>
                <p>
                  L'API est <b>gratuite et ouverte à tous les développeurs</b> souhaitant intégrer ces données
                  dans leurs applications ou services.
                </p>
              </div>
              <div className="section__actions">
                <Link
                  href="https://api.lasocietenouvelle.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  API SINESE
                  <i className="ms-2 bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Open Data */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="section__title">
                Une initiative Open Data et Open Source
              </h3>
              <div className="section__content">
                <p>
                  L'initiative a pour objectif d'apporter de la transparence sur l'empreinte de la production
                  des entreprises françaises et de rendre les données extra-financières accessibles à tous.
                </p>
                <p>
                  La Société Nouvelle administre <strong>une base de données ouverte</strong>, synchronisée avec le répertoire SIRENE,
                  pour y centraliser les empreintes sociétales. Cette démarche vise à démocratiser l'accès à l'information extra-financière et à encourager
                  une prise de décision éclairée, aussi bien pour les entreprises que pour les consommateurs
                </p>
                <p>
                  Pour garantir cette accessibilité, les données sont mises à disposition sous la licence ouverte
                  Etalab, qui autorise leur réutilisation et leur diffusion, tout en assurant un cadre de transparence.
                </p>
              </div>
            </Col>
            <Col lg={4} className="text-center mt-4 mt-lg-0">
              <div className="section__logo-wrapper">
                <Image
                  src="/icons/logo-licence-etalab.gif"
                  alt="Illustration Licence Etalab"
                  width={400}
                  height={200}
                  className="section__logo"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
