'use client';

import { Col, Container, Row, Form, Button, Modal, Accordion } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

export default function AppelPartenariat() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic (email sending)
    console.log('Form submitted:', formData);
    setShowModal(false);
  };

  return (
    <div className="appel-partenariat-page">
      {/* ===== HERO SECTION ===== */}
      <section className="partnership-hero">
        <Container>
          <Row className="align-items-center mb-5">
            {/* Colonne gauche - Texte */}
            <Col lg={8}>
              <div className="partnership-hero-content">
                <p className="partnership-hero-label">
                  Appel à partenariat 2026
                </p>

                <h2 className="partnership-hero-title">
                  Soutenez nos travaux pour l'année 2026
                </h2>

                <p className="partnership-hero-subtitle">
                  <b>En soutenant nos travaux,</b> vous contribuez à la
                  production et à la diffusion de ressources libres et gratuites
                  essentielle pour la transition écologique et sociale.
                  <br />
                  Votre soutien contribue à enrichir les systèmes comptables
                  pour outiller l'ensemble des entreprises, et notamment les
                  TPE/PME, dans le suivi des externalités de leurs activités ;
                  et pour apporter de la transparence sur celles qui
                  construisent une économie durable.
                </p>

                {/* CTA Buttons */}
                <div className="partnership-hero-actions">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="partnership-cta-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Télécharger la fiche partenaire
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="partnership-cta-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Compléter le formulaire en ligne
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                  {/* <Button
                    href="#impact"
                    variant="outline-primary"
                    size="lg"
                    className="partnership-cta-secondary"
                  >
                    En savoir plus
                    <i className="bi bi-chevron-down ms-2"></i>
                  </Button> */}
                </div>
              </div>
            </Col>

            {/* Colonne droite - Illustration */}
            <Col lg={4} className="d-none d-lg-block">
              <div className="partnership-hero-illustration">
                <Image
                  src="/illustrations/showing-support.svg"
                  alt="Collaboration et partenariat"
                  width={600}
                  height={500}
                  className="img-fluid"
                  priority
                />
              </div>
            </Col>
          </Row>

          {/* Mini cards - Types de soutien */}
          {/* <Row className="partnership-hero-cards">
            <Col md={4}>
              <div className="partnership-card">
                <div className="partnership-card-icon">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <h4 className="partnership-card-title">Soutien financier</h4>
                <p className="partnership-card-text">
                  Contribuez au financement de nos travaux de recherche,
                  développement et diffusion.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="partnership-card">
                <div className="partnership-card-icon">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <h4 className="partnership-card-title">
                  Partenariat stratégique
                </h4>
                <p className="partnership-card-text">
                  Co-construisez avec nous les ressources et outils de demain.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="partnership-card">
                <div className="partnership-card-icon">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4 className="partnership-card-title">Relais et visibilité</h4>
                <p className="partnership-card-text">
                  Amplifiez notre impact en relayant nos travaux auprès de vos
                  réseaux.
                </p>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>

      {/* ===== SECTION 2 : PRÉSENTATION LSN & ÉQUIPE ===== */}
      <section className="section section--secondary presentation-team-section">
        <Container>
          {/* Présentation LSN */}
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="presentation-lsn-content">
                <h3 className="section__title section__title--center">
                  Qui sommes nous ?
                </h3>
                <div className="presentation-lsn-text">
                  <p>
                    La Société Nouvelle est une structure créée spécifiquement
                    pour mettre en œuvre un{" "}
                    <strong>
                      système d'information national sur les impacts des
                      entreprises (SINESE)
                    </strong>
                    . Nous développons et administrons des ressources open data
                    et open source visant à mesurer et analyser l'empreinte
                    sociale et environnementale des activités économiques à
                    partir des données comptables.
                  </p>
                  <p>
                    Portée par une logique d'intérêt général, La Société
                    Nouvelle conçoit des référentiels, des données statistiques
                    et des outils accessibles à tous, afin d'éclairer les
                    décisions économiques et publiques et de contribuer à la
                    structuration d'une information robuste au service de la
                    transition écologique et sociale.
                  </p>
                  <p className="presentation-lsn-text--incomplete">
                    <em>
                      La structure se définit comme une société commerciale à
                      but non lucratif...
                    </em>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Équipe */}
          <div className="team-subsection">
            <div className="text-center mb-5">
              <h4 className="team-subsection__title">L'équipe</h4>
            </div>
            <Row className="g-4 justify-content-center">
              {/* Member 1 */}
              <Col lg={4} md={6}>
                <div className="team-card">
                  <div className="team-card__image">
                    <Image
                      src="/illustrations/team-member-1.svg"
                      alt="Photo"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="team-card__content">
                    <h5 className="team-card__name">Prénom Nom</h5>
                    <p className="team-card__role">Rôle / Fonction</p>
                  </div>
                </div>
              </Col>

              {/* Member 2 */}
              <Col lg={4} md={6}>
                <div className="team-card">
                  <div className="team-card__image">
                    <Image
                      src="/illustrations/team-member-2.svg"
                      alt="Photo  2"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="team-card__content">
                    <h5 className="team-card__name">Prénom Nom</h5>
                    <p className="team-card__role">Rôle / Fonction</p>
                  </div>
                </div>
              </Col>

              {/* Member 3 */}
              <Col lg={4} md={6}>
                <div className="team-card">
                  <div className="team-card__image">
                    <Image
                      src="/illustrations/team-member-3.svg"
                      alt="Photo  3"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="team-card__content">
                    <h5 className="team-card__name">Prénom Nom</h5>
                    <p className="team-card__role">Rôle / Fonction</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ===== SECTION 3 : ACTIVITÉS FINANCÉES ===== */}
      <section className="section activities-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h3 className="section__title section__title--center mb-4">
              Ce que permet votre contribution
            </h3>
            <p className="section-subtitle">
              Produire des données statistiques, développer des outils open
              source et collaborer avec les institutions.
            </p>
          </div>

          <Row className="g-4">
            {/* Activity 3 */}
            <Col lg={4} md={6}>
              <div className="activity-card">
                <div className="activity-card__icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h4 className="activity-card__title">
                  Recherche en statistiques publiques
                </h4>
                <p className="activity-card__text">
                  Votre contribution permet d'engager des travaux de recherche
                  pour améliorer les méthodes de calcul d'empreintes
                  macroéconomiques, telles que pour la prise en compte du
                  capital fixe ou la régionalisation.
                </p>
              </div>
            </Col>

            {/* Activity 1 */}
            <Col lg={4} md={6}>
              <div className="activity-card">
                <div className="activity-card__icon">
                  <i className="bi bi-database"></i>
                </div>
                <h4 className="activity-card__title">
                  Production de <br></br> données statistiques
                </h4>
                <p className="activity-card__text">
                  Votre contribution permet l'amélioration des données
                  statistiques que nous produisons et mettons librement à
                  disposition (moyennes sectorielles, facteurs d'impacts
                  monétaires, etc.), notamment au niveau de la granularité.
                </p>
              </div>
            </Col>

            {/* Activity 2 */}
            <Col lg={4} md={6}>
              <div className="activity-card">
                <div className="activity-card__icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h4 className="activity-card__title">
                  Développement d'outils open source
                </h4>
                <p className="activity-card__text">
                  Votre contribution permet le développement et la maintenance
                  de scripts open source permettant estimer et d'analyser les
                  impacts des entreprises à partir des données comptables et
                  sociales.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 5 : IMPACT & USAGES ===== */}
      <section
        className="section section--secondary impact-section"
        id="impact"
      >
        <Container>
          {/* ===== IMPACT & USAGES : TITRE PRINCIPAL ===== */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">
                Qui bénéficie de nos ressources ?
              </h3>
            </Col>
          </Row>

          {/* ===== IMPACT & USAGES : TEXTE EXPLICATIF ===== */}
          <Row className="justify-content-center mb-4">
            <Col lg={10}>
              <div className="impact-text-block">
                <p>
                  Vous ! Nos ressources sont aujourd'hui largement mobilisées
                  par une diversité d'acteurs&nbsp;: cabinets comptables,
                  éditeurs de solutions, initiatives autour de la comptabilité
                  carbone, chercheurs, universités et organismes
                  institutionnels.
                </p>
                <p>
                  Nos ressources interviennent au sein de la plateforme Impact
                  durabilité ou du baromètre Image PME.
                </p>
                {/* <p>
                  <strong>
                    La profession comptable occupe une place centrale.
                  </strong>{" "}
                  Les cabinets s'appuient sur Metriz et nos données statistiques
                  pour enrichir les données comptables de leurs clients et
                  produire des estimations d'empreinte directement exploitables.
                </p> */}
              </div>
            </Col>
          </Row>

          {/* ===== EXEMPLES D'USAGE ===== */}
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <h4 className="usage-examples-title">Applications concrètes</h4>
              <Row className="g-3 usage-examples-grid">
                <Col xs={6} md={4}>
                  <div className="usage-card">
                    <div className="usage-card__icon">
                      <i className="bi bi-leaf"></i>
                    </div>
                    <div className="usage-card__title">Impact durabilité</div>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="usage-card">
                    <div className="usage-card__icon">
                      <i className="bi bi-speedometer2"></i>
                    </div>
                    <div className="usage-card__title">Baromètre Image PME</div>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* ===== IMPACT & USAGES : CHIFFRES CLÉS ===== */}
          {/* <Row className="justify-content-center mb-4">
            <Col lg={10}>
              <h4 className="usage-examples-title">En chiffres</h4>
            </Col>
          </Row>

          <div className="impact-stats-hero">
            <Row className="g-4">
              <Col sm={6} lg={3}>
                <div className="impact-stat-big">
                  <div className="impact-stat-big__value">2 153</div>
                  <div className="impact-stat-big__label">
                    Unités légales analysées
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div className="impact-stat-big">
                  <div className="impact-stat-big__value">6</div>
                  <div className="impact-stat-big__label">
                    Solutions actives
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div className="impact-stat-big">
                  <div className="impact-stat-big__value">XXX</div>
                  <div className="impact-stat-big__label">Requêtes API</div>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div className="impact-stat-big">
                  <div className="impact-stat-big__value">XXX</div>
                  <div className="impact-stat-big__label">Téléchargements</div>
                </div>
              </Col>
            </Row>
          </div> */}

          {/* Sous-titre types d'utilisateurs */}
          {/* <div className="text-center mb-4">
            <h4 className="impact-section__subtitle">
              Qui utilise nos ressources ?
            </h4>
          </div> */}

          {/* Types d'utilisateurs - grille */}
          {/* <Row className="justify-content-center g-3">
            <Col xs={6} sm={6} md={3}>
              <div className="user-card">
                <div className="user-card__icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="user-card__title">Cabinets Comptables</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="user-card">
                <div className="user-card__icon">
                  <i className="bi bi-gear"></i>
                </div>
                <div className="user-card__title">Éditeurs de Solutions</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="user-card">
                <div className="user-card__icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="user-card__title">Initiatives Carbone</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="user-card">
                <div className="user-card__icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <div className="user-card__title">Chercheurs</div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>

      {/* ===== SECTION 6 : POURQUOI CONTRIBUER ===== */}
      <section className="section why-section">
        <Container>
          {/* Titre */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">
                Pourquoi ce mode de financement ?
              </h3>
            </Col>
          </Row>

          {/* Texte introductif */}
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="why-intro-text">
                {/* <p>
                  Le choix de l'open data et de l'open source garantit à tous un
                  accès libre, pérenne et non propriétaire aux données, méthodes
                  et outils nécessaires à la mesure des impacts des entreprises.
                </p> */}
                {/* <p>
                  Les contributions des partenaires permettent d'assurer la
                  continuité des travaux, d'investir dans la recherche et le
                  développement, et de renforcer cette infrastructure ouverte
                  dont bénéficient l'ensemble des utilisateurs, en particulier
                  les TPE et PME.
                </p> */}
                <p>
                  La structuration de l'information extra-financière à l'échelle
                  de chaque entreprise suppose une participation de l'ensemble
                  des acteurs de la comptabilité (cabinets, éditeurs, etc.).
                  Cette participation n'est possible que sur la base de
                  ressources et de méthodes communes, accessibles à tous et non
                  propriétaires, pour éviter tout blocage lié à la dépendance à
                  un acteur privé concurrent ou ayant un but lucratif.
                </p>
                <p>
                  L'open data et l'open source constituent ainsi la condition
                  nécessaire à une approche collaborative, durable et acceptable
                  par tous.
                </p>
                <p>
                  Ce choix implique cependant une approche différente dans le
                  financement du développement et de la maintenance des
                  ressources communes. Nous cherchons à auto-financer au maximum
                  nos activités via des prestations commerciales (études
                  statistiques, développements informatiques, production de
                  données, etc.) mais pour aller plus loin et plus vite nous
                  faisons également appel à des sponsors, engagés et souvent
                  directement bénéficiaires de nos travaux.
                </p>
              </div>
            </Col>
          </Row>

          {/* Arguments en cartes */}
          <Row className="g-4">
            <Col lg={4}>
              <div className="why-argument-card">
                <div className="why-argument-card__icon">
                  <i className="bi bi-unlock"></i>
                </div>
                <div className="why-argument-card__content">
                  <h4 className="why-argument-card__title">
                    Accessibilité universelle
                  </h4>
                  <p className="why-argument-card__text">
                    Garantir un accès libre aux données et outils pour tous les
                    acteurs économiques
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="why-argument-card">
                <div className="why-argument-card__icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="why-argument-card__content">
                  <h4 className="why-argument-card__title">
                    Information d'intérêt général
                  </h4>
                  <p className="why-argument-card__text">
                    Éviter toute captation privée d'une information d'intérêt
                    général
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="why-argument-card">
                <div className="why-argument-card__icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <div className="why-argument-card__content">
                  <h4 className="why-argument-card__title">
                    Diffusion massive
                  </h4>
                  <p className="why-argument-card__text">
                    Permettre une diffusion massive auprès des acteurs
                    économiques
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Paragraphe additionnel */}
          {/* <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <div className="why-additional-text">
                <h4 className="why-additional-text__title">
                  [Titre à définir]
                </h4>
                <p>
                  La structuration de l'information extra-financière à l'échelle
                  de chaque entreprise suppose une participation de l'ensemble
                  des acteurs de la comptabilité (cabinets, éditeurs, etc.).
                  Cette coopération n'est possible que sur la base de ressources
                  et de méthodes communes, partagées et non propriétaires.
                  L'open data et l'open source permettent d'éviter toute
                  dépendance à un acteur privé, toute asymétrie d'information ou
                  de pouvoir. Ils constituent ainsi la condition nécessaire à
                  une approche collaborative, durable et acceptable par
                  l'ensemble des parties prenantes.
                </p>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>

      {/* ===== SECTION 7 : MODALITÉS ===== */}
      {/* <section className="section section--secondary modalites-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">Modalités</h3>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <h4 className="contact-card__title">Formulaire</h4>

                <Button
                  variant="primary"
                  className="contact-card__button"
                  onClick={() => setShowModal(true)}
                >
                  Remplir le formulaire
                  <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </div>
            </Col>

            <Col md={4}>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <h4 className="contact-card__title">Email</h4>

                <a
                  href="mailto:contact@lasocietenouvelle.org"
                  className="contact-card__link"
                >
                  contact@lasocietenouvelle.org
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>

            <Col md={4}>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <i className="bi bi-discord"></i>
                </div>
                <h4 className="contact-card__title">Discord</h4>

                <a
                  href="https://discord.gg/lasocietenouvelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                >
                  Rejoindre Discord
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* ===== SECTION : AVANTAGES PARTENAIRES ===== */}
      {/* <section className="section avantages-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">Avantages partenaires</h3>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Impact économique</h5>
                  <p className="avantage-card__text">
                    Participez à la transformation vers un modèle durable
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-key"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Accès privilégié</h5>
                  <p className="avantage-card__text">
                    Outils et accompagnement personnalisé prioritaires
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-megaphone"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Visibilité accrue</h5>
                  <p className="avantage-card__text">
                    Mise en avant sur notre site et communications
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Réseau engagé</h5>
                  <p className="avantage-card__text">
                    Rejoignez des partenaires partageant vos valeurs
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Événements exclusifs</h5>
                  <p className="avantage-card__text">
                    Webinaires et ateliers réservés aux sponsors
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Accompagnement</h5>
                  <p className="avantage-card__text">
                    Support technique adapté à vos besoins
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* ===== SECTION 7 : SOUTENIR AUTREMENT ===== */}
      <section className="section section--secondary support-alternatives-section">
        <Container>
          {/* Titre */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">Nous soutenir autrement</h3>
              <p className="section__subtitle">
                Contribuer financièrement n'est pas la seule manière de soutenir
                nos travaux !
                <br />
                Vous pouvez nous aider et devenir partenaire de bien des
                manières.
              </p>
            </Col>
          </Row>

          {/* Cartes d'alternatives */}
          <Row className="g-4">
            {/* Pour les experts-comptables */}
            <Col lg={6}>
              <div className="support-alt-card">
                <div className="support-alt-card__icon">
                  <i className="bi bi-calculator"></i>
                </div>
                <div className="support-alt-card__content">
                  <h4 className="support-alt-card__title">
                    Experts-comptables
                  </h4>
                  <p className="support-alt-card__text">
                    Produisez et présentez les indicateurs à vos clients en
                    utilisant Metriz et nos données statistiques. Participez
                    activement à la diffusion de l'information extra-financière.
                  </p>
                  <a
                    href="https://metriz.lasocietenouvelle.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-alt-card__link"
                  >
                    Accéder à Metriz
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>

            {/* Pour les entreprises */}
            <Col lg={6}>
              <div className="support-alt-card">
                <div className="support-alt-card__icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="support-alt-card__content">
                  <h4 className="support-alt-card__title">Entreprises</h4>
                  <p className="support-alt-card__text">
                    Mesurez et publiez vos impacts sociaux et environnementaux.
                    Notre équipe peut vous accompagner dans cette démarche de
                    transparence et d'engagement.
                  </p>
                  <a
                    href="mailto:contact@lasocietenouvelle.org?subject=Accompagnement entreprise"
                    className="support-alt-card__link"
                  >
                    Nous solliciter
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>

            {/* Suivez-nous sur LinkedIn */}
            <Col lg={6}>
              <div className="support-alt-card">
                <div className="support-alt-card__icon">
                  <i className="bi bi-linkedin"></i>
                </div>
                <div className="support-alt-card__content">
                  <h4 className="support-alt-card__title">
                    Relayez notre appel
                  </h4>
                  <p className="support-alt-card__text">
                    Suivez-nous sur LinkedIn et relayez cet appel à partenariat
                    auprès de votre réseau. Votre visibilité contribue à faire
                    connaître notre mission.
                  </p>
                  <a
                    href="https://www.linkedin.com/company/la-societe-nouvelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-alt-card__link"
                  >
                    Suivre sur LinkedIn
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>

            {/* Contribuer au code */}
            <Col lg={6}>
              <div className="support-alt-card">
                <div className="support-alt-card__icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="support-alt-card__content">
                  <h4 className="support-alt-card__title">Développeurs</h4>
                  <p className="support-alt-card__text">
                    Participez au développement en contribuant au code source de
                    nos outils open source. Rejoignez notre communauté sur
                    GitHub et Discord.
                  </p>
                  <a
                    href="https://github.com/La-Societe-Nouvelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-alt-card__link"
                  >
                    Voir sur GitHub
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 8 : FAQ ===== */}
      <section className="section faq-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h3 className="section__title section__title--center">
              Questions fréquentes
            </h3>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion flush className="faq-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Que signifie concrètement devenir partenaire ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Nous appelons partenaires les structures qui contribuent, de
                    manière directe ou indirecte, à la mise en oeuvre du système
                    d'information national sur les impacts des entreprises, que
                    nous portons. Cette contribution peut être financière ou
                    opérationnelle (mise en place du service auprès de ses
                    clients, appui statistique, intégration des données, etc.).
                    <br />
                    Plus particulièrement, les partenaires "sponsors" nous
                    permettent de financer des travaux de R&D et d'améliorer les
                    ressources ouvertes que nous mettons à disposition (données,
                    outils, référentiels).
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>S'agit-il d'un don ?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      La contribution correspond à un soutien financier de type
                      partenariat / sponsoring, et non à un don ouvrant droit à
                      des avantages fiscaux. Elle s'inscrit dans une logique de
                      financement collectif d'un projet d'intérêt général, dont
                      les ressources sont ouvertes et accessibles à tous.
                    </p>
                    <p className="mb-0">
                      La Société Nouvelle n'étant pas reconnue comme organisme
                      d'intérêt général au sens fiscal, la contribution n'est
                      pas éligible à une déduction d'impôt.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Être partenaire donne-t-il accès à des services
                    supplémentaires ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Non, le partenariat ne conditionne aucunement l'accès aux
                      ressources, qui restent ouvertes et accessibles à tous.
                    </p>
                    <p className="mb-0">
                      L'équipe de La Société Nouvelle reste cependant davantage
                      disponible auprès des structures partenaires, et offre un
                      appui prioritairement à celles-ci, par exemple pour le
                      traitement de dossier lors de la période fiscale par
                      exemple.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    À quoi sert concrètement la contribution financière ?
                  </Accordion.Header>
                  <Accordion.Body>
                    La contribution financière nous permet d'améliorer les
                    données que nous mettons à disposition, de développer et
                    maintenir les ressources informatiques associées (Portail,
                    API, Metriz, Site web, etc.), d'engager des travaux de
                    recherche, et de mettre à disposition des ressources
                    complémentaires (documentation, kit de mission, etc.). Tous
                    nos travaux sont rendus publics et libres d'exploitation.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Pourquoi soutenir financièrement un projet dont les
                    ressources sont accessibles à tous ?
                  </Accordion.Header>
                  <Accordion.Body>
                    L'accessibilité (gratuité) des ressources ne signifie pas
                    l'absence de coût. Les données, les outils et les
                    référentiels ouverts nécessitent un travail continu de
                    production, de maintenance, d'amélioration et de diffusion.
                    La contribution permet de garantir un cadre commun fiable,
                    dont chacun bénéficie aujourd'hui ou pourra bénéficier
                    demain, sans dépendance à un acteur privé.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Si je ne contribue pas, puis-je continuer à utiliser les
                    ressources ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Oui. L'accès aux ressources n'est pas conditionné à une
                    contribution financière ou autre. Le partenariat est un choix volontaire, pas une obligation.
                  </Accordion.Body>
                </Accordion.Item>

                {/* <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    Pourquoi ne pas réserver certaines ressources aux
                    partenaires ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Réserver des ressources créerait une dépendance, des
                      asymétries d'information et des risques de remise en cause
                      de la légitimité des résultats. Le choix de l'ouverture
                      vise précisément à garantir la coopération, la confiance
                      et l'acceptabilité du cadre par l'ensemble des acteurs.
                    </p>
                    <p className="mb-0">
                      <em>
                        Précision : si vous souhaitez disposer de ressources
                        spécifiques pour vos activités, vous pouvez nous
                        solliciter, mais cette démarche rentre dans le cadre de
                        nos prestations commerciales, et non dans l'initiative
                        globale que nous portons. Vous pouvez dans ce cas être
                        propriétaire des résultats, et choisir l'usage des
                        ressources développées pour vous.
                      </em>
                    </p>
                  </Accordion.Body>
                </Accordion.Item> */}

                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    Quel est le montant de la contribution ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Le montant de la contribution est déterminé selon votre chiffre d'affaires. 
                    La grille est disponible au sein de la fiche partenaire ou du formulaire.
                    Il reste tout à fait possible de proposer un montant différent ou d'échanger
                    sur les modalités, en fonction de votre situation et de vos
                    capacités.
                  </Accordion.Body>
                </Accordion.Item>                

                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    Les ressources développées resteront-elles publiques et ouvertes ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Oui, l'ensemble des ressources que nous produisons sont et resteront
                    publiques, ouvertes et accessibles à tous, conformément aux principes 
                    fondateurs de La Société Nouvelle.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    Quelle est la démarche pour devenir partenaire ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pour devenir partenaire, il vous suiffit de compléter le formulaire
                    à votre disposition, ou simplement de prendre contact avec nous. Nous revenons ensuite vers vous
                    pour formaliser le partenariat et commencer à travailler
                    ensemble.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION FINALE : CTA ===== */}
      <section className="section section--primary final-cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h3 className="final-cta__title">Prêt à nous rejoindre ?</h3>
              <p className="final-cta__text">
                Ensemble, construisons une économie plus transparente et
                durable.
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setShowModal(true)}
              >
                Devenir partenaire 2026
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== MODAL FORMULAIRE ===== */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Devenir partenaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">
            Remplissez ce formulaire et nous vous recontacterons sous 48h pour
            échanger sur les modalités de partenariat.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom et prénom *</Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Votre nom complet"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="votre@email.com"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Organisation *</Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
                placeholder="Nom de votre entreprise / institution"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type de structure *</Form.Label>
              <Form.Select
                required
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option value="">Sélectionnez...</option>
                <option value="entreprise">Entreprise</option>
                <option value="institution">Institution publique</option>
                <option value="ong">ONG / Association</option>
                <option value="fondation">Fondation</option>
                <option value="cabinet">Cabinet comptable</option>
                <option value="autre">Autre</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Parlez-nous de votre intérêt pour le partenariat, vos attentes..."
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Envoyer ma demande
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
