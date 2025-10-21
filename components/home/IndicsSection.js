import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function IndicsSection() {
  return (
    <section className="highlight-section">
      <Container>
        <div className="highlight-section__content">
          <Row className="align-items-center">
            <Col lg={7}>
              <h2 className="highlight-section__title">
                Qu'est-ce que l'Empreinte Sociétale ?
              </h2>

              <p className="highlight-section__text">
                L'Empreinte Sociétale est un{" "}
                <strong>
                  panel de 12 indicateurs sociaux et environnementaux
                </strong>{" "}
                qui mesurent les externalités de la production sur des
                dimensions clés liées aux Objectifs de Développement Durable.
              </p>

              <div className="highlight-section__links">
                <Link href="/indicateurs" className="btn btn-primary">
                  Découvrir les 12 indicateurs
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <a
                  href="https://www.agenda-2030.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  En savoir plus sur l'Agenda 2030
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>

            <Col lg={5} className="text-center mt-4 mt-lg-0">
              <div className="highlight-section__illustration">
                <Image
                  src="/images/F-SDG-Poster 2019_without UN emblem_WEB.png"
                  alt="Empreinte Sociétale"
                  width={350}
                  height={350}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
