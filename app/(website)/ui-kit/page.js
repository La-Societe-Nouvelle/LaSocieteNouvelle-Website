import PageHeader from "@/components/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: "La Société Nouvelle | UI Kit - Composants réutilisables",
  description: "Guide de style et composants réutilisables pour assurer la cohérence visuelle du site.",
};

export default function UIKit() {
  return (
    <>
      <PageHeader
        title="UI Kit - Guide de Style"
        subtitle="Tous les composants et styles réutilisables du site"
        icon="palette"
      />

      {/* ====================================== */}
      {/* SECTION 1: TYPOGRAPHY & SECTIONS */}
      {/* ====================================== */}
      <section className="section">
        <Container>
          <h3 className="section__title">
            Titres et Sections
          </h3>
          <div className="section__content">
            <p>
              Les sections utilisent la classe <code>.section</code> avec un titre <code>.section__title</code>
              et un contenu <code>.section__content</code>. Le titre peut être centré avec le modificateur
              <code>.section__title--center</code>.
            </p>
            <p>
              Pour alterner les backgrounds, utiliser <code>.section</code> (blanc) et <code>.section bg-light</code>
              (fond gris clair). Les sections CTA utilisent <code>.highlight-section</code>.
            </p>
          </div>

          {/* Exemple de titre centré */}
          <div className="mt-5">
            <h3 className="section__title section__title--center">
              Exemple de titre centré
            </h3>
            <p className="text-center">
              Ce titre utilise le modificateur <code>--center</code>
            </p>
          </div>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 2: VISUAL BOXES */}
      {/* ====================================== */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Visual Boxes - Boîtes d'introduction
          </h3>

          <Row className="g-4">
            {/* API Style Visual Box */}
            <Col lg={6}>
              <div className="api-visual-box">
                <i className="bi bi-database"></i>
                <p className="api-visual-text">Boîte visuelle style API</p>
                <div className="api-visual-badges">
                  <span className="api-badge">Badge 1</span>
                  <span className="api-badge">Badge 2</span>
                  <span className="api-badge">Badge 3</span>
                </div>
              </div>
              <p className="text-center mt-3 small">
                <code>.api-visual-box</code> avec <code>.api-badge</code>
              </p>
            </Col>

            {/* Stats Style Visual Box */}
            <Col lg={6}>
              <div className="stats-visual-box">
                <i className="bi bi-bar-chart"></i>
                <p className="stats-visual-text">Boîte visuelle style Stats</p>
                <div className="stats-visual-badges">
                  <span className="stat-badge">Info 1</span>
                  <span className="stat-badge">Info 2</span>
                  <span className="stat-badge">Info 3</span>
                </div>
              </div>
              <p className="text-center mt-3 small">
                <code>.stats-visual-box</code> avec <code>.stat-badge</code>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 3: BENEFIT CARDS */}
      {/* ====================================== */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Cards avec icône circulaire
          </h3>

          <Row className="g-4">
            {/* API Benefit Style */}
            <Col md={6} lg={3}>
              <div className="api-benefit">
                <div className="api-benefit-icon">
                  <i className="bi bi-unlock"></i>
                </div>
                <h4 className="api-benefit-title">Titre de l'avantage</h4>
                <p className="api-benefit-text">
                  Description de l'avantage ou de la fonctionnalité proposée.
                  Style avec hover et transition.
                </p>
              </div>
              <p className="text-center mt-2 small"><code>.api-benefit</code></p>
            </Col>

            {/* Methodology Step Style */}
            <Col md={6} lg={3}>
              <div className="methodology-step">
                <div className="methodology-step-number">1</div>
                <h4 className="methodology-step-title">Titre de l'étape</h4>
                <p className="methodology-step-text">
                  Description de l'étape dans un processus méthodologique
                  ou un workflow.
                </p>
              </div>
              <p className="text-center mt-2 small"><code>.methodology-step</code></p>
            </Col>

            {/* Use Case Style */}
            <Col md={6} lg={3}>
              <div className="use-case">
                <div className="use-case-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h4 className="use-case-title">Cas d'usage</h4>
                <p className="use-case-description">
                  Description d'un cas d'usage spécifique avec une icône
                  carrée arrondie.
                </p>
              </div>
              <p className="text-center mt-2 small"><code>.use-case</code></p>
            </Col>

            {/* Indicator Category Style */}
            <Col md={6} lg={3}>
              <div className="indicator-category">
                <div className="indicator-category-header social">
                  <i className="bi bi-people"></i>
                  <h4>Catégorie</h4>
                </div>
                <ul className="indicator-category-list">
                  <li><a href="#">Élément 1</a></li>
                  <li><a href="#">Élément 2</a></li>
                  <li><a href="#">Élément 3</a></li>
                  <li><a href="#">Élément 4</a></li>
                </ul>
              </div>
              <p className="text-center mt-2 small">
                <code>.indicator-category</code><br/>
                Variantes: <code>.social</code>, <code>.environmental</code>, <code>.economic</code>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 4: RESOURCE CARDS */}
      {/* ====================================== */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Cards Ressources avec bouton
          </h3>

          <Row className="g-4">
            {/* API Resource Style */}
            <Col lg={4}>
              <div className="api-resource">
                <div className="api-resource-icon">
                  <i className="bi bi-book"></i>
                </div>
                <h4 className="api-resource-title">Titre de la ressource</h4>
                <p className="api-resource-description">
                  Description de la ressource disponible. Ce composant utilise
                  flexbox pour pousser le bouton en bas.
                </p>
                <Link href="#" className="btn btn-primary w-100">
                  <i className="bi bi-arrow-right me-2"></i>
                  Accéder
                </Link>
              </div>
              <p className="text-center mt-2 small"><code>.api-resource</code></p>
            </Col>

            {/* Access Method Style */}
            <Col lg={4}>
              <div className="access-method">
                <div className="access-method-icon">
                  <i className="bi bi-display"></i>
                </div>
                <h4 className="access-method-title">Méthode d'accès</h4>
                <p className="access-method-description">
                  Description de la méthode ou de l'outil pour accéder aux données.
                  Peut inclure du code inline.
                </p>
                <Link href="#" className="btn btn-primary w-100">
                  Découvrir
                </Link>
              </div>
              <p className="text-center mt-2 small"><code>.access-method</code></p>
            </Col>

            {/* Research Output Style */}
            <Col lg={4}>
              <div className="research-output">
                <div className="research-output-header">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h4>Production</h4>
                </div>
                <div className="research-output-body">
                  <p>
                    Description de la production statistique ou recherche disponible.
                  </p>
                  <ul className="research-output-list">
                    <li>Caractéristique 1</li>
                    <li>Caractéristique 2</li>
                    <li>Caractéristique 3</li>
                    <li>Caractéristique 4</li>
                  </ul>
                </div>
                <div className="research-output-footer">
                  <Link href="#" className="btn btn-outline-primary w-100">
                    Explorer
                  </Link>
                </div>
              </div>
              <p className="text-center mt-2 small"><code>.research-output</code></p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 5: VISUAL ICONS GROUPS */}
      {/* ====================================== */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Groupes d'icônes décoratives
          </h3>

          <Row className="g-4">
            {/* Mission Visual */}
            <Col lg={6}>
              <div className="mission-visual">
                <div className="mission-icon"><i className="bi bi-shield-check"></i></div>
                <div className="mission-icon"><i className="bi bi-globe"></i></div>
                <div className="mission-icon"><i className="bi bi-graph-up-arrow"></i></div>
              </div>
              <p className="text-center mt-3 small"><code>.mission-visual</code></p>
            </Col>

            {/* Publications Visual */}
            <Col lg={6}>
              <div className="publications-visual">
                <div className="pub-icon"><i className="bi bi-file-earmark-text"></i></div>
                <div className="pub-icon"><i className="bi bi-file-earmark-bar-graph"></i></div>
                <div className="pub-icon"><i className="bi bi-file-earmark-ruled"></i></div>
              </div>
              <p className="text-center mt-3 small"><code>.publications-visual</code></p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 6: BUTTONS & ACTIONS */}
      {/* ====================================== */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Boutons et Actions
          </h3>

          <div className="text-center">
            <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
              <button className="btn btn-primary">
                <i className="bi bi-check-circle me-2"></i>
                Bouton Primary
              </button>
              <button className="btn btn-outline-primary">
                Bouton Outline Primary
              </button>
              <button className="btn btn-secondary">
                Bouton Secondary
              </button>
              <button className="btn btn-outline-secondary">
                Bouton Outline Secondary
              </button>
            </div>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn btn-primary btn-lg">
                <i className="bi bi-download me-2"></i>
                Bouton Large
              </button>
              <button className="btn btn-primary">
                Bouton Normal
              </button>
              <button className="btn btn-primary btn-sm">
                Bouton Small
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 7: HIGHLIGHT SECTION (CTA) */}
      {/* ====================================== */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content text-center">
            <h3 className="highlight-section__title">
              Section CTA / Highlight
            </h3>
            <p className="highlight-section__text">
              Cette section utilise la classe <code>.highlight-section</code> pour mettre
              en avant un appel à l'action ou une information importante. Elle est généralement
              placée en fin de page avec un fond coloré distinctif.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link href="#" className="btn btn-primary btn-lg">
                <i className="bi bi-envelope me-2"></i>
                Action Principale
              </Link>
              <Link href="#" className="btn btn-outline-primary btn-lg">
                <i className="bi bi-info-circle me-2"></i>
                Action Secondaire
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 8: COLOR PALETTE */}
      {/* ====================================== */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Palette de couleurs
          </h3>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div style={{
                background: '#191558',
                padding: '3rem 2rem',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h5>Primary</h5>
                <code style={{ color: 'white' }}>#191558</code>
                <p className="mt-2 mb-0 small">$primary</p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div style={{
                background: '#F76C6C',
                padding: '3rem 2rem',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h5>Secondary</h5>
                <code style={{ color: 'white' }}>#F76C6C</code>
                <p className="mt-2 mb-0 small">$secondary</p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div style={{
                background: '#6C8EEF',
                padding: '3rem 2rem',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h5>Accent</h5>
                <code style={{ color: 'white' }}>#6C8EEF</code>
                <p className="mt-2 mb-0 small">$accent</p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div style={{
                background: '#f0f0f8',
                padding: '3rem 2rem',
                borderRadius: '16px',
                color: '#191558',
                textAlign: 'center',
                border: '2px solid #e0e0e8'
              }}>
                <h5>Light</h5>
                <code style={{ color: '#191558' }}>#f0f0f8</code>
                <p className="mt-2 mb-0 small">$light</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 9: USAGE GUIDELINES */}
      {/* ====================================== */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-4">
            Guide d'utilisation
          </h3>

          <div className="section__content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h4 className="h5 mt-4 mb-3">Structure de page recommandée</h4>
            <ol>
              <li>
                <strong>PageHeader</strong> - En-tête de page avec titre, sous-titre et icône
              </li>
              <li>
                <strong>Section Introduction</strong> - <code>.section</code> avec texte + visual box
              </li>
              <li>
                <strong>Section Features</strong> - <code>.section bg-light</code> avec cards d'avantages
              </li>
              <li>
                <strong>Section Resources/Détails</strong> - <code>.section</code> avec resource cards
              </li>
              <li>
                <strong>Section Mission/About</strong> - <code>.section bg-light</code> avec texte + icônes
              </li>
              <li>
                <strong>Highlight Section (CTA)</strong> - <code>.highlight-section</code> en fin de page
              </li>
            </ol>

            <h4 className="h5 mt-5 mb-3">Bonnes pratiques</h4>
            <ul>
              <li>Alterner les backgrounds blanc et gris clair (<code>.bg-light</code>) pour créer du rythme</li>
              <li>Utiliser les icônes Bootstrap Icons cohérentes avec le thème</li>
              <li>Respecter les espacements définis dans les variables SCSS</li>
              <li>Utiliser <code>.section__title--center</code> pour les titres de sections avec plusieurs colonnes</li>
              <li>Privilégier les grilles Bootstrap (<code>.g-4</code>) pour les espacements entre cards</li>
              <li>Utiliser les classes <code>.w-100</code> sur les boutons dans les cards pour une largeur uniforme</li>
            </ul>

            <h4 className="h5 mt-5 mb-3">Variables CSS personnalisées</h4>
            <p>Toutes les variables sont définies dans <code>styles/custom.scss</code> :</p>
            <ul className="small">
              <li><code>$card-border-radius-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code></li>
              <li><code>$section-padding-sm</code>, <code>-md</code>, <code>-lg</code></li>
              <li><code>$card-padding-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code></li>
              <li><code>$btn-padding-sm</code>, <code>-md</code>, <code>-lg</code></li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ====================================== */}
      {/* SECTION 10: COMPONENT REFERENCE */}
      {/* ====================================== */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center mb-4">
            Référence des composants
          </h3>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Composant</th>
                  <th>Classes CSS</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Visual Box</td>
                  <td><code>.api-visual-box</code> ou <code>.stats-visual-box</code></td>
                  <td>Boîte d'intro avec icône et badges</td>
                </tr>
                <tr>
                  <td>Benefit Card</td>
                  <td><code>.api-benefit</code></td>
                  <td>Carte avantage avec icône circulaire</td>
                </tr>
                <tr>
                  <td>Methodology Step</td>
                  <td><code>.methodology-step</code></td>
                  <td>Étape numérotée dans un processus</td>
                </tr>
                <tr>
                  <td>Use Case</td>
                  <td><code>.use-case</code></td>
                  <td>Cas d'usage avec icône carrée</td>
                </tr>
                <tr>
                  <td>Category Card</td>
                  <td><code>.indicator-category</code></td>
                  <td>Carte avec header coloré et liste</td>
                </tr>
                <tr>
                  <td>Resource Card</td>
                  <td><code>.api-resource</code> ou <code>.access-method</code></td>
                  <td>Carte ressource avec bouton en bas</td>
                </tr>
                <tr>
                  <td>Research Output</td>
                  <td><code>.research-output</code></td>
                  <td>Production avec header/body/footer</td>
                </tr>
                <tr>
                  <td>Icon Groups</td>
                  <td><code>.mission-visual</code> ou <code>.publications-visual</code></td>
                  <td>Groupe d'icônes décoratives</td>
                </tr>
                <tr>
                  <td>Highlight CTA</td>
                  <td><code>.highlight-section</code></td>
                  <td>Section CTA en fin de page</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
