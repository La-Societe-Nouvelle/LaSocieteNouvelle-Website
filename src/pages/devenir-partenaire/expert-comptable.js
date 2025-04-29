import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DevenirPartenaire_ExpertComptable = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Expert comptable</title>

        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/devenir-partenaire/expert-comptable"
        />
        <meta
          property="og:description"
          content="Devenir partenaire - Expert Comptable"
        />
      </Helmet>

      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="h1">Expert comptable</h2>
              <h3>Vous êtes un acteur de la comptabilité ?</h3>
              <p>
                Face à l'urgence sociale et environnementale, il est désormais
                incontournable de compléter les informations comptables
                traditionnelles par des indicateurs de performance
                extra-financière.
              </p>
              <p>
                La pérennité d'une entreprise passe désormais par la prise en
                compte des défis sociaux et environnementaux. Chaque entreprise
                se doit de s'assurer que la valeur qu'elle produit est
                compatible avec la transition vers une économie soutenable.
              </p>
              <p>
                Les indicateurs sur lesquels nous travaillons fournissent un
                positionnement de l'entreprise au regard d'objectifs clefs de
                développement durable. Ils sont comparables par rapport à la
                branche d'activité de l'entreprise et à des trajectoires cibles
                et assurent un suivi annuel.
              </p>
              <p>
                Le complément comptable obtenu, vous permet ainsi d'enrichir vos
                livrables en fin d'exercice pour :
              </p>
              <ul>
                <li>
                  Sensibiliser vos clients aux enjeux de développement durable
                </li>
                <li>
                  Informer vos clients sur leurs performances sociales et
                  environnementales
                </li>
                <li>Valoriser leurs actions et leurs engagements sociétaux</li>
                <li>
                  In fine, leur permettre de pleinement contribuer à une
                  économie durable
                </li>
              </ul>
            </Col>
            <Col className="text-end">
              <Image
                src="/illustrations/lecture-fec.svg"
                alt="Illustration lecture fec"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-center">
        <blockquote className="blockquote">
          <p>
            "Toute compréhension de l'entreprise passe par sa comptabilité. Or
            les enjeux sociaux et environnementaux qui doivent être considérés
            en sont absents."
          </p>
          <footer>
            Rapport L'entreprise, objet d'intérêt général,
            <cite title="Source Title">
              Nicole NOTAT et Jean-Dominique SENARD, 2018
            </cite>
          </footer>
        </blockquote>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image
                alt="Illustration comparaison version simple version partenaire metriz application web"
                src="/illustrations/version-partenaire-cabinet-comptable.svg"
                fluid
              />
            </Col>
            <Col>
              <h3>Un outil de calcul sur mesure pour les partenaires</h3>
              <p>
                Devenez partenaire et bénéficiez d'une version spécifique à
                votre disposition. Vous disposerez également :
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check2"></i> Une maintenance évolutive
                </li>
                <li>
                  <i className="bi bi-check2"></i> Un support technique
                </li>
                <li>
                  <i className="bi bi-check2"></i> Des livrables personnalisés
                </li>
                <li>
                  <i className="bi bi-check2"></i> Un ajustement de l'outil à
                  vos fichiers internes
                </li>
              </ul>
              {/* <Button className="btn-outline-secondary me-3" href="https://partners.metriz.lasocietenouvelle.org/register" target="_blank">
                Demander un accès
              </Button> */}
              <Button className="btn-outline-primary " href="https://partners.metriz.lasocietenouvelle.org" target="_blank">
                Accéder à la version partenaire
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-secondary">
        <Container>
            <Row className="align-items-center">
              <Col className="justify-content-between d-flex flex-column align-self-stretch" lg={6}>
                <h2 className="h2">Documentation - Empreinte Sociétale</h2>
                <div className="text-start d-flex flex-column flex-grow-1 mb-2">
                  <p>
                    Un espace de documentation sur les indicateurs est à votre disposition.
                  </p>
                  <p>
                    Il regroupe l'ensemble des documentations et informations utiles relatives 
                    à l'Empreinte Sociétale de l'Entreprise et au système d'information et de 
                    comptabilité associé.
                  </p>
                  <p>
                    Il concerne :
                    <ul className="mt-1">
                      <li>Les indicateurs de l'Empreinte Sociétale</li>
                      <li>Les valeurs statistiques proposées par défaut à une unité légale</li>
                      <li>L'application web que nous mettons librement à disposition</li>
                      <li>Les données macroéconomiques issues de nos travaux statistiques</li>
                      <li>Les services disponibles de notre API publique</li>
                    </ul>
                  </p>
                </div>
                <Button className="btn-outline-secondary mx-auto" target="_blank" href="https://docs.lasocietenouvelle.org/">
                  Accéder à l'espace de documentation
                </Button>
              </Col>
              <Col className="justify-content-between d-flex flex-column align-self-stretch" lg={6}>
                <h2 className="h2">Guide de mission</h2>
                <div className="text-start d-flex flex-column flex-grow-1 mb-2">
                  <p>
                    Un guide de mission est mis à votre disposition.
                  </p>
                  <p>
                    Il vise à constituer un outil de travail à destination des professionnels 
                    de l’expertise comptable qui souhaitent mettre en oeuvre ce type de mission
                    (mesure de l'Empreinte Sociétale d'une entreprise).
                  </p>
                  <p>
                    Contenu :
                    <ul className="mt-1">
                      <li>Description de la mission</li>
                      <li>Cadre et Enjeux</li>
                      <li>Prérequis</li>
                      <li>Préparation de la mission</li>
                      <li>Réalisation de la mission</li>
                      <li>Fin de la mission</li>
                    </ul>
                  </p>
                </div>
                <Button className="btn-secondary mx-auto" target="_blank" href="https://lasocietenouvelle.org/Kit-de-mission_Empreinte-Societale.zip">
                  Télécharger le kit de mission
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="">
        <Container>
            <Row className="align-items-center">
              <Col className="text-end">
                <Image
                  src="/illustrations/capdurabilite-illu.png"
                  alt="Illustration espace cap'durabilité"
                  fluid
                />
              </Col>
              <Col lg={6}>
                <h2 className="h1">Vous êtes Expert-Comptable : Cap'Durabilité</h2>
                <p>
                  Espace de référence sur la Durabilité, créé par l'Ordre des experts-comptables.
                </p>
                <p>
                  Quatre niveaux
                </p>
                <ul>
                  <li>Je me sensibilise et je m'informe sur les enjeux sociétaux et environnementaux</li>
                  <li>J'accompagne dans leur démarche RSE et je développe de nouvelles missions</li>
                  <li>Je reporte et monte en compétences sur les informations extra-financières</li>
                  <li>J'innove dans ma manière de compter avec la comptabilité verte</li>
                </ul>
                <Button className="btn-outline-secondary me-3" target="_blank" href="https://capdurabilite.fr">
                  Accéder à l'espace Cap'durablité
                </Button>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5 mb-5">
            <h2 className="mb-5">Les cabinets engagés</h2>
            <div className="d-flex flex-row justify-content-around align-items-center">
              <div>
                <a href="https://www.compagnie-fiduciaire.com/" target="_blank" title="Accéder au site">
                  <Image
                    src="/partners/logo_compagnie-fiduciaire.png"
                    alt="Logo Rpdier"
                    style={{ height: "100px"}}
                  />
                </a>
              </div>
              <div>
                <a href="https://www.expert-comptable.io/" target="_blank" title="Accéder au site">
                  <Image
                    src="/partners/logo-rodier.png"
                    alt="Logo Rpdier"
                    style={{ height: "100px"}}
                  />
                </a>
              </div>
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
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center mt-3">
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
                <a href="https://cabinet-easi.fr/" target="_blank" title="Accéder au site">
                  <Image
                    src="/partners/logo-easi.jpg"
                    alt="Logo Rpdier"
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
      </section>
    </>
  );
};

export default DevenirPartenaire_ExpertComptable;