import React from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";

const Approche = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Projet SINESE</title>
      </Helmet>
      <PageHeader
        title={"Système d'Information National sur l'Empreinte Sociétale des Entreprises"}
        path={"projet-sinese"}
        hasBreadcrumbs={false}
      />
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <h2>Un système de comptabilité extra-financière collaboratif</h2>
              <p>
                SINESE (Système d'Information National sur l'Empreinte Sociétale des Entreprises) est un
                système d'information visant à permettre à chaque entreprise de mesurer et rendre compte
                des externalités associées à sa production.
              </p>
              <p>
                La démarche repose sur une approche collaborative : chaque entreprise récupère l'empreinte
                sociétale de ses fournisseurs pour estimer ses impacts indirects, et met à disposition de
                ses clients sa propre empreinte pour qu'ils puissent à leur tour estimer leurs impacts
                indirects.
              </p>
              <p>
                L'Empreinte Sociétale constitue le panel de dimensions sociales et environnementales concernées
                par ce système d'information.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline-primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="/indicateurs"
                >
                  L'Empreinte Sociétale
                </Button>
                <Button
                  variant="primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="https://www.sinese.fr/"
                  target="_blank"
                >
                  Les données des entreprises
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-end">
              <Image
                fluid
                src="/illustrations/metriz_illus.svg"
                alt="Illustration Application mesure impact"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h2>Où en sommes-nous ?</h2>
          <Row className="mb-4">
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/icons/icone-entreprises.png"
                  alt="Icone Entreprises"
                  className=""
                  style={{ height: "auto", width: "100px", margin: "auto" }}
                />
              </div>
              <div className="mb-2">
                <span className="h1">
                  <data value="v1">+ 5 millions</data>
                </span>
              </div>
              <p>d'entreprises référencées et modélisées</p>
            </Col>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/icons/icone-db.png"
                  alt="Icone Database"
                  className=""
                  style={{ height: "auto", width: "100px", margin: "auto" }}
                />
              </div>
              <div className="mb-2">
                <span className="h1">
                  <data value="v1">84 150</data>
                </span>
              </div>
              <p>données extra-financières déjà disponibles</p>             
            </Col>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/icons/icone-loading.png"
                  alt="Icone Chargement"
                  className=""
                  style={{ height: "auto", width: "100px", margin: "auto" }}
                />
              </div>
              <div className="mb-2">
                <span className="h1">
                  <data value="v1">+ 500 000</data>
                </span>
              </div>
              <p>requêtes reçues en 2024 via notre API Publique</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-stretch">
              <h2>Une méthodologie publique</h2>
              <div className="flex-grow-1">
                <p>
                  La méthodologie de mesure est publique et libre d'exploitation afin de garantir
                  une <strong>transparence et une accessibilité à l'ensemble des acteurs économiques</strong>.
                </p>
                <p>
                  Par cette démarche, nous permettons aux entreprises, experts-comptables, chercheurs 
                  et institutions de s'approprier ces indicateurs et de les intégrer dans leurs propres pratiques,
                  assurant ainsi une adoption plus large et une montée en maturité collective.
                </p>
                <p>
                  Notre objectif, via cette approche, est de favoriser la généralisation de la mesure de 
                  l'empreinte sociétale, essentielle pour obtenir une véritable traçabilité des impacts 
                  le long des chaines de valeur.
                </p>
                <p>
                  Chaque entreprise peut réaliser elle-même la mesure de son empreinte sociétale, ou faire appel
                  à un prestataire extérieur, indépendant de La Société Nouvelle.
                </p>
              </div>
              {/* <p>
                En complément de la méthodologie, l'ensemble des données externes nécessaires sont mises à 
                dispositions de manière ouverte via notre API Publique.
              </p> */}
              <div className="pt-2 text-center">
                <Button
                  variant="primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="https://docs.lasocietenouvelle.org/empreinte-societale"
                  target="_blank"
                >
                  Accéder à la documentation
                </Button>
              </div>
            </Col>
            <Col className="d-flex flex-column align-items-stretch">
              <h2>Solutions disponibles</h2>
              <div className="flex-grow-1">
                <p>
                  La mesure de l'empreinte sociétale vise à être intégrée au sein
                  des outils comptables.
                </p>
                {/* <p>
                  La philosophie des indicateurs repose également sur l'idée que la performance économique 
                  d'une entreprise ne peut plus être dissociée de ses externalités sociales et environnementales.
                </p> */}
                <p>
                  L'<strong>API Publique</strong> mise à disposition permet à chaque logiciel comptable existant de proposer
                  un suivi de l'empreinte des achats et des investissements, et ainsi la mesure et le suivi de l'empreinte sociétale. 
                </p>
                <p>
                  En complément, l'arrivée de la facture électronique falicitera le transfert de certaines informations (SIREN de l'entreprise, etc.)
                  entre entreprises, et permettra d'automatiser la production des indicateurs.
                </p>
                <p>
                Une <strong>solution gratuite "METRIZ" est mise à disposition</strong> par La Société Nouvelle, et permet d'ores-et-déjà de s'interfacer avec des logiciels comptables existants.
                </p>
              </div>
              <div className="pt-2 text-center">
                {/* <Button
                  variant="primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="https://docs.lasocietenouvelle.org/empreinte-societale"
                  target="_blank"
                >
                  API Publique
                </Button> */}
                <Button
                  variant="primary"
                  title="En savoir plus sur Metriz"
                  className="mx-2 rounded-0"
                  href="https://partners.metriz.lasocietenouvelle.org/"
                  target="_blank"
                >
                  Accéder à METRIZ
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mb-5">
        <Container>
          <h2>Une initiative Open Data</h2>
          <Row>
            <Col lg={8}>
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
            </Col>
            <Col lg={4} className="text-end">
              <Image
                src="/icons/logo-licence-etalab.gif"
                alt="Illustration Licence Etalab"
                className=""
                style={{maxHeight: "200px"}}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Approche;