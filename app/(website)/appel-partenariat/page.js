'use client';

import { Col, Container, Row, Form, Button, Modal, Accordion } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

export default function AppelPartenariat() {

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
                  production et à la diffusion de <strong>ressources libres et gratuites</strong> essentielle pour la <strong>transition écologique et sociale</strong>.
                  <br />
                  Votre soutien contribue à <strong>enrichir les systèmes comptables</strong> pour outiller l'ensemble des entreprises, et notamment les
                  <strong> TPE/PME</strong>, dans le suivi des externalités de leurs activités ;
                  et à <strong>apporter de la transparence</strong> sur celles qui
                  construisent une <strong>économie durable</strong>.
                </p>

                {/* CTA Buttons */}
                <div className="partnership-hero-actions">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    href="/docs/Fiche-Partenaire-2025.pdf"
                    target="_blank"
                  >
                    Télécharger la fiche partenaire
                    <i className="bi bi-download ms-2"></i>
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    href="/formulaire-partenariat"
                    target="_blank"
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
          {/* Titre principal centré */}
          <h3 className="section__title section__title--center">
            Qui sommes nous ?
          </h3>

          {/* Contenu en 2 colonnes */}
          <Row className="g-5 align-items-start">
            {/* Colonne gauche : Présentation LSN */}
            <Col lg={8}>
              <div className="presentation-lsn-content">
                <div className="presentation-lsn-text">
                  <h4 className="presentation-lsn-text__title">La structure</h4>
                  <p>
                    La Société Nouvelle est une structure créée en 2020, spécifiquement
                    dans le but de porter la mise en œuvre d'un{" "}
                    <strong>
                      système d'information national sur les impacts des
                      entreprises (SINESE)
                    </strong>
                    .
                  </p>
                  <p>
                    Nous développons et administrons des ressources <strong>open data
                      et open source</strong> visant à intégrer dans les systèmes comptables
                    la mesure et l'analyse de <strong>l'empreinte
                      sociale et environnementale de la production des entreprises</strong>,
                    avec une approche collaborative pour les externalités indirectes.
                  </p>
                  {/* <p>
                    Portée par une <strong>logique d'intérêt général</strong>, La Société
                    Nouvelle conçoit des référentiels, des données statistiques
                    et des outils <strong>accessibles à tous</strong>, afin d'éclairer les
                    décisions économiques et publiques et de contribuer à la
                    structuration d'une information robuste au service de la
                    transition écologique et sociale.
                  </p> */}

                  {/* <p className="presentation-lsn-text--incomplete">
                    <em>
                      La structure se définit comme une société commerciale à
                      but non lucratif...
                    </em>
                  </p> */}
                 <h4 className="presentation-lsn-text__title">Nos activités</h4>
                  <ul className="fs-6">
                    <li>Administration d'une base de données ouverte</li>
                    <li>Développement d'un outils de mesure open source</li>
                    <li>Réalisation de travaux statistiques</li>
                  </ul>

                </div>
              </div>
            </Col>

            {/* Colonne droite : Équipe */}
            <Col lg={4}>
              <div className="team-subsection">
                <h4 className="presentation-lsn-text__title">L'équipe</h4>

                <Row className="g-4">
                  {/* Member 1 */}
                  <Col md={12}>
                    <div className="team-card team-card--horizontal">
                      <div className="team-card__image">
                        <Image
                          src="/images/equipe/portrait-sylvain-2.jpg"
                          alt="Photo Sylvain Humiliere"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="team-card__content">
                        <h5 className="team-card__name">Sylvain Humiliere</h5>
                        <p className="team-card__role">Président - Fondateur</p>
                      </div>
                    </div>
                  </Col>

                  {/* Member 2 */}
                  <Col md={12}>
                    <div className="team-card team-card--horizontal">
                      <div className="team-card__image">
                        <Image
                          src="/images/equipe/portrait-laura-2.jpg"
                          alt="Photo Laura Roost"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="team-card__content">
                        <h5 className="team-card__name">Laura Roost</h5>
                        <p className="team-card__role">Développeuse Informatique</p>
                      </div>
                    </div>
                  </Col>

                  {/* Member 3 */}
                  <Col md={12}>
                    <div className="team-card team-card--horizontal">
                      <div className="team-card__image">
                        <Image
                          src="/images/equipe/portrait-joris-2.jpg"
                          alt="Photo Joris Blain"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="team-card__content">
                        <h5 className="team-card__name">Joris Blain</h5>
                        <p className="team-card__role">Economètre</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
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
              Votre contribution permet d'améliorer l'ensemble des ressources open data et open source.
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
                  Votre contribution permet d'engager des <strong>travaux de recherche</strong> pour améliorer les <strong>méthodes de calcul d'empreintes
                    macroéconomiques</strong>, telles que pour la prise en compte du
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
                  Votre contribution permet l'amélioration des <strong>données
                    statistiques</strong> que nous produisons et mettons <strong>librement à
                      disposition</strong> (moyennes sectorielles, facteurs d'impacts
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
                  Votre contribution permet le <strong>développement et la maintenance
                    de scripts open source</strong> permettant estimer et d'analyser les
                  impacts des entreprises à partir des <strong>données comptables et
                    sociales</strong>.
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
          <Row className="justify-content-center text-center ">
            <Col lg={8}>
              <h3 className="section__title section__title--center  ">
                Qui bénéficie de nos ressources ?
              </h3>
            </Col>
          </Row>

          {/* ===== IMPACT & USAGES : TEXTE EXPLICATIF ===== */}
          <Row className="justify-content-center mb-4">
            <Col lg={10}>
              <div className="impact-text-block text-center">
                <p>
                  <b >Vous !</b> Nos ressources sont aujourd'hui largement mobilisées
                  par une <strong>diversité d'acteurs</strong>&nbsp;: cabinets comptables,
                  éditeurs de solutions, initiatives autour de la comptabilité
                  carbone, chercheurs, universités et organismes
                  institutionnels.
                </p>
                {/* <p>
                  Nos ressources interviennent au sein de la plateforme <strong>Impact
                  durabilité</strong> ou du baromètre <strong>Image PME</strong>.
                </p> */}
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
          <Row className="justify-content-center mb-5 mt-5">
            <Col lg={10}>
              <h4 className="usage-examples-title">Initiatives et Applications faisant appel à nos ressources</h4>
              <Row className="g-3 usage-examples-grid">
                <Col xs={6} md={3}>
                  <div className="usage-card">
                    <Image
                      src="/logos/impact-durabilite-cnoec.png"
                      alt="Logo Impact durabilité"
                      width={200}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      title="Impact Durabilité"
                    />
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="usage-card">
                    <Image
                      src="/logos/image-pme.png"
                      alt="Logo Baromètre Image PME"
                      width={200}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      title="Baromètre Image PME"
                    />
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="usage-card">
                    <Image
                      src="/logos/enso-rse-logo.png"
                      alt="Logo Enso RSE"
                      width={200}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      title="Enso RSE"
                    />
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="usage-card">
                    <Image
                      src="/logos/logo_comptabilite-carbone-collaborative.png"
                      alt="Logo CCC"
                      width={200}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      title="CCC"
                    />
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

      {/* ===== SECTION 6 : POURQUOI  ===== */}
      <section className="section why-section">
        <Container>
          {/* Titre */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title section__title--center  ">
                Pourquoi ce mode de financement ?
              </h3>
            </Col>
          </Row>

          <Row >
            {/* Colonne gauche : Points clés  */}
            <Col lg={4}>
              <div className="why-arguments-list">
                <ul>
                  <li>
                    <i className="bi bi-unlock me-3"></i>
                    <strong>Garantir un accès libre aux données et outils pour tous les acteurs économiques</strong>
                  </li>
                  <li>
                    <i className="bi bi-shield-check me-3"></i>
                    <strong>Éviter toute captation privée d'une information d'intérêt général</strong>
                  </li>
                  <li>
                    <i className="bi bi-broadcast me-3"></i>
                    <strong>Permettre une diffusion massive auprès des acteurs économiques</strong>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Colonne droite : Texte introductif */}
            <Col lg={8}>
              <div className="why-content">
                <div className="why-intro-text">
                  <p>
                    La structuration de l'information extra-financière à l'échelle
                    de chaque entreprise suppose des <strong>ressources communes</strong> pour la mesure
                    et la transmission de données, et
                    des <strong>ressources accessibles à tous</strong> - open data et open source - pour éviter toute dépendance à
                    des acteurs privés.
                  </p>
                  <p>
                    Nous cherchons à auto-financer au maximum
                    nos activités via des prestations commerciales (études
                    statistiques, développements informatiques, production de
                    données, etc.) mais <strong>pour aller plus loin et plus vite nous
                    faisons également appel à des sponsors</strong>, ayant souvent un
                    intérêt direct vis-à-vis de nos travaux et du système d'information
                    mis en oeuvre.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 7 : MODALITÉS ===== */}
      {/* <section className="section section--secondary modalites-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h3 className="section__title section__title--center  ">Modalités</h3>
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
              <h3 className="section__title section__title--center  ">Avantages partenaires</h3>
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
              <h3 className="section__title section__title--center  ">Nous soutenir autrement</h3>
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
            <Col lg={4}>
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
                    utilisant <strong>Metriz</strong> et nos <strong>données statistiques</strong>. Participez
                    activement à la <strong>diffusion de l'information extra-financière</strong>.
                  </p>

                </div>
              </div>
            </Col>

            {/* Pour les entreprises */}
            <Col lg={4}>
              <div className="support-alt-card">
                <div className="support-alt-card__icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="support-alt-card__content">
                  <h4 className="support-alt-card__title">Entreprises</h4>
                  <p className="support-alt-card__text">
                    <strong>Mesurez et publiez</strong> vos <strong>impacts sociaux et environnementaux</strong>.
                    Notre équipe peut vous accompagner dans cette démarche de
                    transparence et d'engagement.
                  </p>

                </div>
              </div>
            </Col>



            {/* Contribuer au code */}
            <Col lg={4}>
              <div className="support-alt-card">
                <div className="support-alt-card__icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="support-alt-card__content">
                  <h4 className="support-alt-card__title">Développeurs</h4>
                  <p className="support-alt-card__text">
                    Participez au développement en <strong>contribuant au code source</strong> de
                    nos <strong>outils open source</strong>. Rejoignez notre communauté sur
                    <strong> GitHub et Discord</strong>.
                  </p>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====  CTA ===== */}
      <section className="section section--primary final-cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h3 className="final-cta__title">Prêt à nous rejoindre ?</h3>
              <p className="final-cta__text">
                Ensemble, construisons une économie plus transparente et
                durable.
              </p>
              <div className="final-cta__buttons">
                <Button
                  variant="secondary"
                  size="lg"
                  href="/formulaire-partenariat"
                  target="_blank"
                >
                  Devenir partenaire 2026
                  <i className="bi bi-arrow-right ms-2"></i>
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href="https://www.linkedin.com/company/la-societe-nouvelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Relayer notre appel
                  <i className="bi bi-linkedin ms-2"></i>
                </Button>
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
                    Nous appelons <strong>partenaires</strong> les structures qui contribuent, de
                    manière directe ou indirecte, à la mise en oeuvre du système
                    d'information national sur les impacts des entreprises, que
                    nous portons. Cette contribution peut être <strong>financière ou
                      opérationnelle</strong> (mise en place du service auprès de ses
                    clients, appui statistique, intégration des données, etc.).
                    <br />
                    Plus particulièrement, les partenaires <strong>"sponsors"</strong> nous
                    permettent de financer des <strong>travaux de R&D</strong> et d'améliorer les
                    ressources ouvertes que nous mettons à disposition (données,
                    outils, référentiels).
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>S'agit-il d'un don ?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      La contribution correspond à un <strong>soutien financier de type
                        partenariat / sponsoring</strong>, et non à un don ouvrant droit à
                      des avantages fiscaux. Elle s'inscrit dans une logique de
                      <strong> financement collectif d'un projet d'intérêt général</strong>, dont
                      les ressources sont <strong>ouvertes et accessibles à tous</strong>.
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
                      Non, le partenariat <strong>ne conditionne aucunement l'accès aux
                        ressources</strong>, qui restent <strong>ouvertes et accessibles à tous</strong>.
                    </p>
                    <p className="mb-0">
                      L'équipe de La Société Nouvelle reste cependant davantage
                      disponible auprès des structures partenaires, et offre un
                      <strong> appui prioritairement</strong> à celles-ci, par exemple pour le
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
                    La contribution financière nous permet d'<strong>améliorer les
                      données</strong> que nous mettons à disposition, de <strong>développer et
                        maintenir les ressources informatiques</strong> associées (Portail,
                    API, Metriz, Site web, etc.), d'<strong>engager des travaux de
                      recherche</strong>, et de mettre à disposition des ressources
                    complémentaires (documentation, kit de mission, etc.). <strong>Tous
                      nos travaux sont rendus publics et libres d'exploitation</strong>.
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
                    référentiels ouverts nécessitent un <strong>travail continu de
                      production, de maintenance, d'amélioration et de diffusion</strong>.
                    La contribution permet de garantir un <strong>cadre commun fiable</strong>,
                    dont chacun bénéficie aujourd'hui ou pourra bénéficier
                    demain, <strong>sans dépendance à un acteur privé</strong>.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Si je ne contribue pas, puis-je continuer à utiliser les
                    ressources ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Oui. <strong>L'accès aux ressources n'est pas conditionné</strong> à une
                    contribution financière ou autre. Le partenariat est un <strong>choix volontaire, pas une obligation</strong>.
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
                    Oui, <strong>l'ensemble des ressources</strong> que nous produisons sont et <strong>resteront
                      publiques, ouvertes et accessibles à tous</strong>, conformément aux principes
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

    </div>
  );
}
