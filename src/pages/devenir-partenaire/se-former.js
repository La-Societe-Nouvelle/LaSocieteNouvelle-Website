import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DevenirPartenaire_ExpertComptable = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Formations</title>

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
              <h2 className="h1">Se former sur les enjeux sociaux et environnementaux</h2>
              <h3>Vous souhaitez accompagner des entreprises sur les enjeux de durabilité ?</h3>
              <p>
                Vous trouverez au sein de cette page, un ensemble de liens internes et externes
                pour monter en compétences sur les thématiques
                liés aux enjeux sociaux et environnementaux et sur les indicateurs que nous
                proposons.
              </p>
              <ul>
                <li>Liens vers des centres documentaires</li>
                <li>Liens vers des formations</li>
              </ul>
              <p>
                A noter que La Société Nouvelle n'est pas un organisme de formation, et
                nous n'a pas vocation à construire et proposer des offres
                de formation. Pour être accompagner, n'hésitez pas à vous rapprocher d'acteurs
                compétents sur le sujet, dont certains sont listés ci-dessous.
              </p>
            </Col>
            <Col className="text-end">
              <Image
                src="/illustrations/training-illu.svg"
                alt="Illustration lecture fec"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
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
      </section>
      <section>
        <Container>
          <h2 className="h1 mb-4">Formations identifiées</h2>
          <Row className="mb-3">
            <Col className="text-center d-flex align-items-stretch" lg={6}>
              <div className="border p-3 m-1 d-flex flex-column justify-content-between">
                <div>
                  <h3>ENOES : FORMATION RSE</h3>
                  <p>INTEGRER LA RSE DANS LA STRATEGIE DE L’ENTREPRISE</p>
                </div>
                <div className="text-start flex-grow-1">
                  <p>
                    Créée en 2019 par l’ENOES sous la direction de Thierry Carlier, 
                    ce parcours de 77H vous aide à repérer les enjeux majeurs de la 
                    Responsabilité Sociétale de l’entreprise et vous donne les clés de 
                    la mise en œuvre.
                  </p>
                  <p>
                    Public : Expert-Comptable, Commissaires aux comptes, collaborateurs 
                    expérimentés 
                  </p>
                  <p>
                    Contenu :
                    <ul className="mt-1">
                      <li>Appropriation du contexte et des principes de la RSE (3jours)</li>
                      <li>Utiliser les méthodes et techniques de la RSE (4 jours)</li>
                      <li>Mise en œuvre de la RSE dans l’accompagnement du client (4 jours)</li>
                    </ul>
                  </p>
                  <p>
                    Evaluation : Quizz et Grand Jury : présentation d’un projet RSE
                  </p>
                  <p>
                    Formateurs : Orianne Champon, Jean-Baptiste Cottenceau, Sarah Guereau, Mélanie Blandin, Marielle Mathieu
                  </p>
                </div>
                <Button className="btn-outline-primary mx-auto" 
                  target="_blank"
                  href="https://enoes.com/entreprise-et-alternance/formation-continue/cycle-de-formation-bonnes-pratiques-rse-en-conduite-du-changement/">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col className="text-center d-flex align-items-stretch" lg={6}>
              <div className="border p-3 m-1 d-flex flex-column justify-content-between">
                <div>
                  <h3>ODYSSEE DU COLIBRI</h3>
                  <p>OSER LA RSE CHEZ LES EXPERTS-COMPTABLES</p>
                </div>
                <div className="text-start d-flex flex-column flex-grow-1">
                  <p>
                    Créée en 2023 par Orianne Champon, Odyssée du Colibri est une agence 
                    qui accompagne la transformation des métiers du Chiffre grâce à la 
                    Responsabilité Sociétale
                  </p>
                  <p>
                    L'agence intervient dans différents domaines :
                    <ul className="mt-1">
                      <li>Conseil en stratégie : état des lieux, vision et plan d’action</li>
                      <li>Accompagnement : coaching individuel, collectif et aide au pilotage de projet RSE</li>
                      <li>Formation : création de parcours d’accompagnement pour vos équipes, intervention dans des écoles</li>
                      <li>Etudes et prospectives : programme de recherche sur l’acculturation des professionnels du chiffre sur les enjeux de durabilité</li>
                    </ul>
                  </p>
                  <p>
                    Contact : Orianne Champon, 06.17.25.17.63, orianne.champon@odyssee-colibri.com
                  </p>
                </div>
                <Button className="btn-outline-primary mx-auto" 
                  target="_blank"
                  href="https://www.linkedin.com/company/odyssee-du-colibri">
                  En savoir plus
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center d-flex align-items-stretch" lg={6}>
              <div className="border p-3 m-1 d-flex flex-column justify-content-between">
                <div>
                  <h3>ATOUT RSE @EXPERTS-COMPTABLES</h3>
                  <p>
                    L’ENGAGEMENT POUR RENFORCER LA PERFORMANCE DE VOTRE CABINET
                  </p>
                </div>
                <div className="text-start d-flex flex-column flex-grow-1">
                  <p>
                    Objectifs : Identifier les atouts RSE gagnants de votre cabinet comptable 
                    et activer concrètement des solutions opérationnelles et valorisantes.
                  </p>
                  <p>
                    Approche : Un accompagnement à partir de ce que vous êtes et ce que vous 
                    faites. Avant tout de l’observation, de la mise en cohérence et de la 
                    valorisation. La RSE est une démarche de progrès et de création de valeur 
                    « gagnant-gagnant » pas une révolution, ni du mécénat.
                  </p>
                  <p>
                   Offre : Accompagner concrètement, à la carte et à domicile, des TPE/PME et 
                   les cabinets comptables sur les enjeux de la RSE et du développement durable
                  </p>
                  {/* <p>
                    Programme :
                    <ul className="mt-1">
                    <li>Une masterclass et une séance de travail collective dédiée à l’initiation des participants aux enjeux des cabinets d’expertise comptable</li>
                    <li>Un diagnostic de l’existant RSE et des axes prioritaires à travailler</li>
                    <li>La structuration de la démarche RSE et d’un plan d’action opérationnel</li>
                    <li>Un accompagnement sur le positionnement RSE des cabinets et le développement de nouvelles offres de conseil</li>
                    <li>Des conseils pour bien communiquer sur sa démarche</li>
                    </ul>
                  </p> */}
                </div>
                <Button className="btn-outline-primary mx-auto" 
                  target="_blank"
                  href="https://croissancebleue.com/prestations-rse/">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col className="text-center justify-content-between d-flex align-self-stretch" lg={6}>
              <div className="border p-3 m-1 d-flex flex-column justify-content-between">
                <div>
                  <h3>FORMATION WAOU</h3>
                  <p>
                    STRATEGIE RSE ET DURABILITE
                  </p>
                </div>
                <div className="text-start d-flex flex-column flex-grow-1">
                  <p>
                    Parcours en 3 étapes afin de vous permettre d’intégrer la RSE dans vos pratiques professionnelles pour améliorer la performance globale de vos clients et la pérennité de leurs activités :
                    <ul className="mt-1">
                      <li>Etape 1 – Sensibiliser et former les équipes des cabinets</li>
                      <li>Etape 2 – Produire un rapport intégré en alliant financier et extra financier</li>
                      <li>Etape 3 – Développer l’offre marketing et vous accompagner à son déploiement.</li>
                    </ul>
                  </p>
                </div>
                <Button className="btn-outline-primary mx-auto" 
                  target="_blank"
                  href="https://waou.expert/waou-pour-qui/waou-pour-expert-comptable/">
                  En savoir plus
                </Button>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            <i>Vous proposez une formation : n'hésitez pas à nous contacter !</i>
          </div>
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
                <Button className="btn-secondary mx-auto" target="_blank" href="https://lasocietenouvelle.org/LSN_Guide-Mission_v1-0-1.pdf">
                  Télécharger le guide de mission
                </Button>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  );
};

export default DevenirPartenaire_ExpertComptable;