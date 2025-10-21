"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function OpenSection() {
  return (
    <section className="section open-section">
      <Container>
        <div className="section-split">
          <div className="section__illustration">
            <Image
              src="/icons/logo-licence-etalab.gif"
              alt="Illustration Licence Etalab"
              width={400}
              height={200}
              className="section__logo"
            />  
            
          </div>  
          <div className="section-split__content">
            <h2 className="section__title">Un projet ouvert et transparent</h2>
            <p className="open-intro">
              Notre engagement pour un système d'information accessible à tous
            </p>

            <div className="feature-list">
              <div className="feature-list-item">
                <h3 className="feature-list-item-title">Open Data</h3>
                <p className="feature-list-item-text">
                  Toutes les données agrégées sont accessibles librement via notre API publique et notre portail de données statistiques.
                </p>
                <div className="feature-list-item-links">
                  <Link href="https://api.lasocietenouvelle.org/" target="_blank">
                    <i className="bi bi-braces"></i>
                    API publique
                  </Link>
                  <Link href="/databrowser">
                    <i className="bi bi-table"></i>
                    Portail de données
                  </Link>
                </div>
              </div>

              <div className="feature-list-item">
                <h3 className="feature-list-item-title">Méthodologie publique</h3>
                <p className="feature-list-item-text">
                  Nos méthodologies de calcul sont documentées et accessibles à tous pour garantir sa transparence et sa reproductibilité.
                </p>
                <div className="feature-list-item-links">
                  <Link href="/docs/empreinte-societale">
                    <i className="bi bi-file-text"></i>
                    Documentation
                  </Link>
                  <Link href="/categorie/fiches-methodologiques">
                    <i className="bi bi-journal-text"></i>
                    Fiches méthodologiques
                  </Link>
                </div>
              </div>

              <div className="feature-list-item">
                <h3 className="feature-list-item-title">Open Source</h3>
                <p className="feature-list-item-text">
                  Notre code source est disponible sur GitHub. Contribuez ou réutilisez nos outils librement.
                </p>
                <div className="feature-list-item-links">
                  <Link href="https://github.com/La-Societe-Nouvelle/" target="_blank">
                    <i className="bi bi-github"></i>
                    Dépôt GitHub
                  </Link>
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
