'use client';

import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import metaData from "@/lib/metaData.json";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path || pathname?.startsWith(path + "/");

  // Grouper les indicateurs par section
  const indicateursSocioEco = metaData["indics-es"].indics.map(code => ({
    code,
    ...metaData[code]
  }));
  const indicateursEnv = metaData["indics-env"].indics.map(code => ({
    code,
    ...metaData[code]
  }));


  return (
    <header className="header">
      <div className="header-brand">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/" className="brand-logo">
              <Image
                src="/logo-La-Societe-Nouvelle.svg"
                height={65}
                width={213}
                alt="La Société Nouvelle"
                className="section__logo"
              />
            </Link>
            <div className="header-title-section">
              <h1 className="website-title">
                La Société Nouvelle
              </h1>
              <p className="website-subtitle">
                Système d'Information national sur les impacts des entreprises
              </p>
            </div>
            <div className="header-actions">
              <NavDropdown
                title={
                  <>
                    <i className="bi bi-grid-3x2-gap"></i>
                    Accès rapide
                  </>
                }
                id="quick-access-dropdown"
                className="quick-access-dropdown"
                align="end"
              >
                <NavDropdown.Item
                  href="https://partners.metriz.lasocietenouvelle.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Application METRIZ
                  </span>
                  <i className="bi bi-box-arrow-up-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://sinese.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Répertoire SINESE
                  </span>
                  <i className="bi bi-box-arrow-up-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Container>
      </div>

      <div className="navigation-bar">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav>
                <Nav.Link
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Accueil
                </Nav.Link>

                <Nav.Item className={isActive("/projet-sinese") || isActive("/statistics") ? "dropdown active" : "dropdown"}>
                  <NavDropdown
                    title="Le projet"
                    id="sinese-dropdown"
                  >
                    <NavDropdown.Item href="/projet-sinese">
                      Notre approche
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/a-propos">
                      Qui sommes-nous ?
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/statistics">
                      Statistiques d'usage
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>

                <Nav.Item className={isActive("/indicateurs") ? "dropdown active" : "dropdown"}>
                  <NavDropdown
                    title="Panel d'indicateurs"
                    id="indicateurs-dropdown"
                  >
                    <NavDropdown.Item href="/indicateurs">
                      <i className="bi bi-grid-3x3-gap me-2"></i>
                      Vue d'ensemble
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-people me-2"></i>
                      Indicateurs socio-économiques
                    </NavDropdown.ItemText>
                    {indicateursSocioEco.map((indic) => (
                      <NavDropdown.Item
                        key={indic.code}
                        href={`/indicateurs/${indic.code}`}
                        className="dropdown-subsection"
                      >
                        {indic.libelle}
                      </NavDropdown.Item>
                    ))}

                    <NavDropdown.Divider />

                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-globe2 me-2"></i>
                      Indicateurs environnementaux
                    </NavDropdown.ItemText>
                    {indicateursEnv.map((indic) => (
                      <NavDropdown.Item
                        key={indic.code}
                        href={`/indicateurs/${indic.code}`}
                        className="dropdown-subsection"
                      >
                        {indic.libelle}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav.Item>

                <Nav.Link
                  href="/nos-services"
                  className={isActive("/nos-services") ? "active" : ""}
                >
                  Services
                </Nav.Link>

                <Nav.Item className={isActive("/devenir-partenaire") ? "dropdown active" : "dropdown"}>
                  <NavDropdown
                    title="Contribuer"
                    id="contribuer-dropdown"
                  >
                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-graph-up me-2"></i>
                      Mesurer et publier
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="/devenir-partenaire/expert-comptable" className="dropdown-subsection">
                      Experts-comptables
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/devenir-partenaire/entreprises" className="dropdown-subsection">
                      Entreprises
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-database me-2"></i>
                      Exploiter les données
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="/devenir-partenaire/chercheurs-experts" className="dropdown-subsection">
                      Chercheurs & Experts
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-code-slash me-2"></i>
                      Développer
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="https://lasocietenouvelle.readme.io/reference/getting-started-with-your-api" target="_blank" className="dropdown-subsection">
                      Utilisateurs de l'API publique
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/La-Societe-Nouvelle/" target="_blank" className="dropdown-subsection">
                      Contributeurs open source
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-heart me-2"></i>
                      Soutenir
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="/devenir-partenaire/sponsors" className="dropdown-subsection">
                      Sponsors & Partenaires
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>

                <Nav.Item className={isActive("/ressources") ? "dropdown active" : "dropdown"}>
                  <NavDropdown
                    title="Ressources"
                    id="ressources-dropdown"
                  >
                    <NavDropdown.Item href="/ressources/application-mesure-impact">
                      <i className="bi bi-calculator me-2"></i>
                      Metriz - Application de mesure
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ressources/repertoire-sinese">
                      <i className="bi bi-globe me-2"></i>
                      Répertoire SINESE
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ressources/travaux-statistiques">
                      <i className="bi bi-table me-2"></i>
                     Travaux statistiques
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ressources/api-publique">
                      <i className="bi bi-braces me-2"></i>
                      API publique
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://docs.lasocietenouvelle.org" target="_blank">
                      <i className="bi bi-book me-2"></i>
                      Documentation
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>

                <Nav.Item className={isActive("/blog") || isActive("/podcast") || isActive("/infographies") || isActive("/categorie") ? "dropdown active" : "dropdown"}>
                  <NavDropdown
                    title="Nos publications"
                    id="publications-dropdown"
                  >
                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-newspaper me-2"></i>
                      Actualités & Médias
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="/blog" className="dropdown-subsection">
                      Blog
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/podcast" className="dropdown-subsection">
                      Podcast
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.ItemText className="dropdown-section__title">
                      <i className="bi bi-file-text me-2"></i>
                      Études & Ressources
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="/categorie/notes-analyse" className="dropdown-subsection">
                      Notes d'analyse
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie/fiches-methodologiques" className="dropdown-subsection">
                      Fiches méthodologiques
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/infographies" className="dropdown-subsection">
                      Infographies
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
