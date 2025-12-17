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
                <p className="partnership-hero-label">Appel à partenariat 2026</p>

                <h2 className="partnership-hero-title">
                  Participez à la transformation de l'économie vers plus de durabilité
                </h2>

                <p className="partnership-hero-subtitle">
                  <b>En soutenant nos travaux,</b> vous contribuez à la production et à la diffusion d'une information nationale essentielle pour la transition écologique et sociale, au service de l'ensemble des acteurs économiques et, en particulier, des TPE et PME. Votre soutien permet de poursuivre la capacité, la diffusion et l'accessibilité des ressources ouvertes, utilisées par de nombreux professionnels, chercheurs et institutions.
                </p>

                {/* CTA Buttons */}
                <div className="partnership-hero-actions">
                  <Button
                    variant="primary"
                    size="lg"
                    className="partnership-cta-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Devenir partenaire
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                  <Button
                    href="#impact"
                    variant="outline-primary"
                    size="lg"
                    className="partnership-cta-secondary"
                  >
                    En savoir plus
                    <i className="bi bi-chevron-down ms-2"></i>
                  </Button>
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
          <Row className="partnership-hero-cards">
            <Col md={4}>
              <div className="partnership-card">
                <div className="partnership-card-icon">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <h4 className="partnership-card-title">Soutien financier</h4>
                <p className="partnership-card-text">
                  Contribuez au financement de nos travaux de recherche, développement et diffusion.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="partnership-card">
                <div className="partnership-card-icon">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <h4 className="partnership-card-title">Partenariat stratégique</h4>
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
                  Amplifiez notre impact en relayant nos travaux auprès de vos réseaux.
                </p>
              </div>
            </Col>
          </Row>
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
                  La structure porteuse
                </h3>
                <div className="presentation-lsn-text">
                  <p>
                    La Société Nouvelle est une structure créée spécifiquement pour mettre en œuvre un <strong>système d'information national sur les impacts des entreprises (SINESE)</strong>. Nous développons et administrons des ressources open data et open source visant à mesurer et analyser l'empreinte sociale et environnementale des activités économiques à partir des données comptables.
                  </p>
                  <p>
                    Portée par une logique d'intérêt général, La Société Nouvelle conçoit des référentiels, des données statistiques et des outils accessibles à tous, afin d'éclairer les décisions économiques et publiques et de contribuer à la structuration d'une information robuste au service de la transition écologique et sociale.
                  </p>
                  <p className="presentation-lsn-text--incomplete">
                    <em>La structure se définit comme une société commerciale à but non lucratif...</em>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Équipe */}
          <div className="team-subsection">
            <div className="text-center mb-5">
              <h4 className="team-subsection__title">
                L'équipe
              </h4>

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
              Produire des données statistiques, développer des outils open source et collaborer avec les institutions.
            </p>
          </div>

          <Row className="g-4">
            {/* Activity 1 */}
            <Col lg={4} md={6}>
              <div className="activity-card">
                <div className="activity-card__icon">
                  <i className="bi bi-database"></i>
                </div>
                <h4 className="activity-card__title">Production de <br></br> données statistiques</h4>
                <p className="activity-card__text">
                  Production et mise à jour de données statistiques sectorielles permettant d'estimer les impacts sociaux et environnementaux des activités économiques. Ces ressources constituent une infrastructure ouverte, conçue pour être utilisée, reprise et diffusée largement.
                </p>
              </div>
            </Col>

            {/* Activity 2 */}
            <Col lg={4} md={6}>
              <div className="activity-card">
                <div className="activity-card__icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h4 className="activity-card__title">Développement d'outils open source</h4>
                <p className="activity-card__text">
                  Conception et maintenance d'outils open source permettant d'estimer et d'analyser les impacts des entreprises à partir des données comptables. Accessibles à tous pour favoriser l'adoption des méthodologies.
                </p>
              </div>
            </Col>

            {/* Activity 3 */}
            <Col lg={4} md={6}>
              <div className="activity-card">
                <div className="activity-card__icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h4 className="activity-card__title">Recherche & diffusion <br /> scientifique</h4>
                <p className="activity-card__text">
                  Collaborations avec des acteurs universitaires et institutionnels (CNOEC, CITEPA, Bpifrance) pour produire et diffuser des contributions scientifiques, statistiques et méthodologiques au service de la transition.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 5 : IMPACT & USAGES ===== */}
      <section className="section section--secondary impact-section" id="impact">
        <Container>
          {/* ===== IMPACT & USAGES : TITRE PRINCIPAL ===== */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">
                L'utilisation de nos ressources
              </h3>
            </Col>
          </Row>

          {/* ===== IMPACT & USAGES : TEXTE EXPLICATIF ===== */}
          <Row className="justify-content-center mb-4">
            <Col lg={10}>
              <div className="impact-text-block">
                <p>
                  Nos ressources sont aujourd'hui largement mobilisées par une diversité d'acteurs&nbsp;: cabinets comptables, éditeurs de solutions, initiatives autour de la comptabilité carbone, chercheurs, universités et organismes institutionnels.
                </p>
                <p>
                  <strong>La profession comptable occupe une place centrale.</strong> Les cabinets s'appuient sur Metriz et nos données statistiques pour enrichir les données comptables de leurs clients et produire des estimations d'empreinte directement exploitables.
                </p>
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
          <Row className="justify-content-center mb-4">
            <Col lg={10}>
              <h4 className="usage-examples-title">En chiffres</h4>
            </Col>
          </Row>

          <div className="impact-stats-hero">
            <Row className="g-4">
              <Col sm={6} lg={3}>
                <div className="impact-stat-big">
                  <div className="impact-stat-big__value">2 153</div>
                  <div className="impact-stat-big__label">Unités légales analysées</div>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div className="impact-stat-big">
                  <div className="impact-stat-big__value">6</div>
                  <div className="impact-stat-big__label">Solutions actives</div>
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
          </div>

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
                Pourquoi votre contribution est importante ?
              </h3>
            </Col>
          </Row>

          {/* Texte introductif */}
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="why-intro-text">
                <p>
                  Le choix de l'open data et de l'open source garantit à tous un accès libre, pérenne et non propriétaire aux données, méthodes et outils nécessaires à la mesure des impacts des entreprises. Ce choix implique toutefois une <strong>responsabilité collective</strong>. Sans modèle fermé ni captation de valeur, la capacité à maintenir, améliorer et diffuser ces ressources repose directement sur le soutien d'acteurs engagés.
                </p>
                <p>
                  Les contributions des partenaires permettent d'assurer la continuité des travaux, d'investir dans la recherche et le développement, et de renforcer cette infrastructure ouverte dont bénéficient l'ensemble des utilisateurs, en particulier les TPE et PME.
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
                  <h4 className="why-argument-card__title">Accessibilité universelle</h4>
                  <p className="why-argument-card__text">
                    Garantir un accès libre aux données et outils pour tous les acteurs économiques
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
                  <h4 className="why-argument-card__title">Information d'intérêt général</h4>
                  <p className="why-argument-card__text">
                    Éviter toute captation privée d'une information d'intérêt général
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
                  <h4 className="why-argument-card__title">Diffusion massive</h4>
                  <p className="why-argument-card__text">
                    Permettre une diffusion massive auprès des acteurs économiques
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Paragraphe additionnel */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <div className="why-additional-text">
                <h4 className="why-additional-text__title">
                  [Titre à définir]
                </h4>
                <p>
                  La structuration de l'information extra-financière à l'échelle de chaque entreprise suppose une participation de l'ensemble des acteurs de la comptabilité (cabinets, éditeurs, etc.). Cette coopération n'est possible que sur la base de ressources et de méthodes communes, partagées et non propriétaires. L'open data et l'open source permettent d'éviter toute dépendance à un acteur privé, toute asymétrie d'information ou de pouvoir. Ils constituent ainsi la condition nécessaire à une approche collaborative, durable et acceptable par l'ensemble des parties prenantes.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 7 : MODALITÉS ===== */}
      <section className="section section--secondary modalites-section">
        <Container>
          {/* Titre */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">
                Modalités
              </h3>
            </Col>
          </Row>

          {/* Moyens de contact */}
          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="contact-card">
                <div className="contact-card__icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <h4 className="contact-card__title">Formulaire</h4>
                <p className="contact-card__text">
                  Remplissez le formulaire et nous vous contacterons sous 48h
                </p>
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
                <p className="contact-card__text">
                  Écrivez-nous directement pour toute question
                </p>
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
                <p className="contact-card__text">
                  Rejoignez notre communauté sur Discord
                </p>
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
      </section>

      {/* ===== SECTION : AVANTAGES PARTENAIRES ===== */}
      <section className="section avantages-section">
        <Container>
          {/* Titre */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">
                Avantages partenaires
              </h3>
            </Col>
          </Row>

          {/* Avantages */}
          <Row className="g-4 justify-content-center">
            <Col sm={6} lg={4}>
              <div className="avantage-card">
                <div className="avantage-card__icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div className="avantage-card__content">
                  <h5 className="avantage-card__title">Impact économique</h5>
                  <p className="avantage-card__text">Participez à la transformation vers un modèle durable</p>
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
                  <p className="avantage-card__text">Outils et accompagnement personnalisé prioritaires</p>
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
                  <p className="avantage-card__text">Mise en avant sur notre site et communications</p>
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
                  <p className="avantage-card__text">Rejoignez des partenaires partageant vos valeurs</p>
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
                  <p className="avantage-card__text">Webinaires et ateliers réservés aux sponsors</p>
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
                  <p className="avantage-card__text">Support technique adapté à vos besoins</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 7 : SOUTENIR AUTREMENT ===== */}
      <section className="section section--secondary support-alternatives-section">
        <Container>
          {/* Titre */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title">
                Soutenir autrement le projet
              </h3>
              <p className="section__subtitle">
                Votre contribution peut prendre différentes formes selon votre profil et vos capacités
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
                  <h4 className="support-alt-card__title">Experts-comptables</h4>
                  <p className="support-alt-card__text">
                    Produisez et présentez les indicateurs à vos clients en utilisant Metriz et nos données statistiques. Participez activement à la diffusion de l'information extra-financière.
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
                    Mesurez et publiez vos impacts sociaux et environnementaux. Notre équipe peut vous accompagner dans cette démarche de transparence et d'engagement.
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
                  <h4 className="support-alt-card__title">Relayez notre appel</h4>
                  <p className="support-alt-card__text">
                    Suivez-nous sur LinkedIn et relayez cet appel à partenariat auprès de votre réseau. Votre visibilité contribue à faire connaître notre mission.
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
                    Participez au développement en contribuant au code source de nos outils open source. Rejoignez notre communauté sur GitHub et Discord.
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
            <p className="section-subtitle">
              Tout ce que vous devez savoir sur le partenariat
            </p>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion flush className="faq-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Que signifie concrètement devenir partenaire ?</Accordion.Header>
                  <Accordion.Body>
                    Devenir partenaire signifie apporter un soutien, qu'il soit financier ou d'une autre nature, aux travaux portés par La Société Nouvelle. Ce soutien vise à contribuer à la production, à la maintenance et à l'amélioration de ressources ouvertes (données, outils, référentiels) utilisées par de nombreux acteurs mais également à la mesure de l'Empreinte Sociétale auprès d'entreprises. Il s'agit d'un engagement en faveur d'un cadre commun d'intérêt général autour des enjeux de durabilité.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>S'agit-il d'un don ?</Accordion.Header>
                  <Accordion.Body>
                    <p>La contribution prend la forme d'un <strong>soutien financier</strong> assimilable à un sponsoring, et non à un don philanthropique au sens strict. Elle s'inscrit dans une logique de <strong>financement collectif d'un commun</strong>, utilisé ou susceptible d'être utilisé par les partenaires eux-mêmes.</p>
                    <p className="mb-0">La Société Nouvelle n'étant pas une association, la contribution ne donne pas droit à une déduction d'impôt.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Le partenariat donne-t-il accès à des services supplémentaires ?</Accordion.Header>
                  <Accordion.Body>
                    <p>Non. Le partenariat ne conditionne pas l'accès aux ressources, qui restent ouvertes et accessibles à tous. Il peut en revanche permettre de participer plus directement aux échanges autour des travaux, de leurs orientations et de leur amélioration continue.</p>
                    <p className="mb-0">L'équipe de La Société Nouvelle reste cependant davantage disponible auprès des structures partenaires et offre parfois un appui lors de la période fiscale par exemple, pour le traitement de dossiers.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>En quoi mon soutien est-il réellement utile ? À quoi sert concrètement la contribution financière ?</Accordion.Header>
                  <Accordion.Body>
                    La contribution financière permet de maintenir et de renforcer une infrastructure ouverte : production et mise à jour des données, maintenance des outils open source, amélioration des référentiels, travaux de recherche et documentation. Sans ce soutien, la capacité à faire évoluer et à fiabiliser ces ressources serait fortement limitée.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Est-ce que ces travaux sont déjà utilisés aujourd'hui ?</Accordion.Header>
                  <Accordion.Body>
                    Oui. Les données, outils et référentiels produits sont déjà utilisés par des <strong>cabinets comptables, éditeurs, chercheurs, universités et acteurs institutionnels</strong>. Il est très probable que vous en bénéficiez déjà, directement ou indirectement, via des données, outils, ou des publications.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>Quel est l'impact pour les TPE/PME ?</Accordion.Header>
                  <Accordion.Body>
                    Les travaux visent en priorité à fournir une information <strong>accessible, exploitable et adaptée</strong> aux réalités des TPE et PME. Les outils et données produits leur permettent de mieux comprendre leurs impacts, de se situer et d'identifier des leviers d'action, sans recourir à des dispositifs coûteux ou propriétaires.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>Pourquoi soutenir un projet dont les ressources restent accessibles à tous ?</Accordion.Header>
                  <Accordion.Body>
                    Parce que l'ouverture constitue précisément la condition de la collaboration et de la diffusion à grande échelle. Soutenir le projet permet d'assurer l'existence et la qualité d'un cadre commun, dont chacun bénéficie. Sans soutien collectif, un commun ouvert ne peut ni se maintenir ni progresser durablement.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>Si je ne contribue pas, puis-je continuer à utiliser les ressources ?</Accordion.Header>
                  <Accordion.Body>
                    Oui. L'accès aux ressources n'est pas conditionné à une contribution financière. Le partenariat repose sur un <strong>choix volontaire</strong>, pas sur une obligation.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>Pourquoi ne pas réserver certaines ressources aux partenaires ?</Accordion.Header>
                  <Accordion.Body>
                    <p>Réserver des ressources créerait une dépendance, des asymétries d'information et des risques de remise en cause de la légitimité des résultats. Le choix de l'ouverture vise précisément à garantir la coopération, la confiance et l'acceptabilité du cadre par l'ensemble des acteurs.</p>
                    <p className="mb-0"><em>Précision : si vous souhaitez disposer de ressources spécifiques pour vos activités, vous pouvez nous solliciter, mais cette démarche rentre dans le cadre de nos prestations commerciales, et non dans l'initiative globale que nous portons. Vous pouvez dans ce cas être propriétaire des résultats, et choisir l'usage des ressources développées pour vous.</em></p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>Comment est déterminé le montant de la contribution ? Est-il possible de proposer un montant différent ?</Accordion.Header>
                  <Accordion.Body>
                    Le montant de la contribution est proposé selon une logique d'adaptation à la structure du partenaire. Il est tout à fait possible de proposer un montant différent ou d'échanger sur les modalités, en fonction de votre situation et de vos capacités.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header>Les partenaires influencent-ils les orientations des travaux ?</Accordion.Header>
                  <Accordion.Body>
                    <p>Les partenaires peuvent participer aux échanges et aux réflexions collectives, mais <strong>aucun partenaire ne dispose d'un pouvoir de décision exclusif</strong>. Les orientations restent guidées par l'intérêt général, la cohérence méthodologique et la transparence.</p>
                    <p className="mb-0">Les partenaires, et structures non partenaires, peuvent rejoindre le comité de gouvernance autour de l'Empreinte Sociétale.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>Les données produites restent-elles publiques et ouvertes ?</Accordion.Header>
                  <Accordion.Body>
                    Oui. Les données et ressources produites dans le cadre du projet sont et resteront <strong>publiques, ouvertes et accessibles</strong>, conformément aux principes fondateurs de La Société Nouvelle.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>Comment devenir partenaire concrètement ?</Accordion.Header>
                  <Accordion.Body>
                    Il suffit de prendre connaissance de la <strong>fiche partenariat</strong> et de nous contacter via les coordonnées indiquées. Nous échangeons ensuite directement pour formaliser le partenariat.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>Quand débute le partenariat (année civile, glissante) ?</Accordion.Header>
                  <Accordion.Body>
                    Le partenariat est généralement établi sur une <strong>année civile</strong>, afin de faciliter le suivi et la lisibilité des soutiens.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>Peut-on devenir partenaire en cours d'année ?</Accordion.Header>
                  <Accordion.Body>
                    Oui. Il est possible de devenir partenaire à tout moment de l'année. Les modalités sont alors adaptées en conséquence.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                  <Accordion.Header>Les partenaires sont-ils mentionnés publiquement ?</Accordion.Header>
                  <Accordion.Body>
                    <p>Les partenaires peuvent être mentionnés publiquement <strong>s'ils le souhaitent</strong>. Cette reconnaissance reste sobre et institutionnelle.</p>
                    <p className="mb-0">Nous essayons de mettre en valeur nos partenaires, même si La Société Nouvelle n'a pas vocation à être un canal de communication.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="16">
                  <Accordion.Header>Existe-t-il une communication spécifique autour des partenaires ?</Accordion.Header>
                  <Accordion.Body>
                    Une communication collective et institutionnelle peut être réalisée autour des partenaires, sans hiérarchisation ni mise en avant commerciale.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="17">
                  <Accordion.Header>Pourquoi ce projet devrait-il être soutenu maintenant ?</Accordion.Header>
                  <Accordion.Body>
                    Les usages des données et outils augmentent, et les besoins d'affinement pour les TPE/PME deviennent plus pressants. Soutenir le projet aujourd'hui permet de consolider l'existant et de donner les moyens d'améliorer la qualité de l'information dans un contexte de transition accélérée.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="18">
                  <Accordion.Header>Pourquoi les pouvoirs publics ne portent pas ce projet ?</Accordion.Header>
                  <Accordion.Body>
                    Bonne question. Nous n'avons pas la réponse. En attendant, on a décidé de commencer nous-même, les enjeux sont trop importants à nos yeux pour attendre.
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
              <h3 className="final-cta__title">
                Prêt à nous rejoindre ?
              </h3>
              <p className="final-cta__text">
                Ensemble, construisons une économie plus transparente et durable.
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
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Devenir partenaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">
            Remplissez ce formulaire et nous vous recontacterons sous 48h pour échanger sur les modalités de partenariat.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom et prénom *</Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom complet"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre@email.com"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Organisation *</Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Nom de votre entreprise / institution"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type de structure *</Form.Label>
              <Form.Select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
