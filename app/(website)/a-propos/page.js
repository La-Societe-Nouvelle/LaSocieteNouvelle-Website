import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "A-Propos | La Société Nouvelle",
  description: "Notre mission est de fournir, de manière ouverte, les informations nécessaires pour que chaque entreprise puisse mesurer et rendre compte de l'empreinte sociétale de sa production.",
};

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section - Mission */}

      <PageHeader
        title="À propos"
        subtitle="Notre mission, notre vision et notre équipe"
        icon="people"
      />


      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="section__title">
                Notre mission
              </h3>
              <div className="section__content">
                <p>
                  Notre mission est de <b>fournir, de manière ouverte, les informations nécessaires
                    pour que chaque entreprise puisse mesurer et rendre compte de l'empreinte sociétale
                    de sa production</b>.
                </p>
                <p>
                  Elle s'inscrit dans la volonté de faire évoluer le modèle de gestion des entreprises
                  en intégrant aux éléments comptables une information sur leurs externalités sociales
                  et environnementales ; et sur un besoin de transparence pour l'ensemble des agents
                  économiques sur les impacts de leurs consommations.
                </p>
                <p>
                  Les documents, outils et autres éléments développés par La Société Nouvelle sont accessibles
                  et utilisables librement, y compris à des fins commerciales.
                </p>
                <p>
                  La base de données est, et restera toujours, ouverte.
                </p>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <div className="section__illustration">
                <Image
                  src="/images/equipe/photo-equipe.png"
                  alt="Photo d'équipe"
                  width={600}
                  height={500}
                  className="img"
                  priority
                />
              </div>
            </Col>
          </Row>

        </Container>
      </section>


      <section className="section">
        <Container>
          <div className="section-header text-center mb-4 mb-md-5">
            <h3 className="section__title section__title--center"> Nos activités</h3>
            <p className="section-subtitle">
              Nous développons et maintenons une base de données ouverte, un outil de mesure open source et menons des travaux statistiques.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4}>
              <Link href="/projet-sinese" className="cta-card-link">
                <div className="cta-card cta-card-primary">
                  <div className="cta-card-icon">
                    <i className="bi bi-database"></i>
                  </div>
                  <h3 className="cta-card-title">Administration d'une base de données ouverte</h3>
                  <p className="cta-card-text">
                    Nous centralisons les données mesurées et publiées des
                    entreprises pour permettre à tous de les exploiter librement
                    et facilement. Nous mettons également à disposition des jeux
                    de données statistiques macroéconomiques.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </Link>

            </Col>
            <Col lg={4}>
              <Link href="https://partners.metriz.lasocietenouvelle.org" className="cta-card-link">
                <div className="cta-card cta-card-primary">

                  <div className="cta-card-icon">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="cta-card-title">Développement d'un outil de mesure open source</h3>
                  <p className="cta-card-text">
                    Nous développons et maintenons une application web pour que
                    chacun puisse calculer les indicateurs et apprécier les
                    résultats. Nous proposons des contrats de support et
                    d'assistance technique aux acteurs qui le souhaitent.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </Link>

            </Col>
            <Col lg={4}>
              <Link href="/databrowser" className="cta-card-link">
                <div className="cta-card cta-card-primary">
                  <div className="cta-card-icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <h3 className="cta-card-title">Travaux statistiques</h3>

                  <p className="cta-card-text">
                    Nous menons des travaux statistiques pour estimer l'empreinte
                    sociétale de la production des branches et divisions
                    économiques françaises, anticiper leurs évolutions et formuler
                    des trajectoires cibles compatibles avec les objectifs
                    nationaux fixés.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>

                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Vision Section */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content">

            <h4 className="highlight-section__title">Notre Vision</h4>
            <div className="highlight-section__text">
              <p>
                L'économie actuelle présente l'extrême nécessité de se transformer
                : dérèglement climatique, inégalités sociales, destruction de la
                biodiversité… Nous devons assumer nos responsabilités vis-à-vis
                des impacts que nous générons ; et certains par l'ignorance dont
                ils ont été sujets, doivent faire l'objet de réponses immédiates.
              </p>
              <p>
                Notre conviction est <b>que chaque entreprise se doit de s'assurer
                  que la valeur qu'elle produit est compatible avec une économie
                  durable</b> ou s'inscrit dans une trajectoire visant à l'atteindre ;
                et que chaque entreprise se doit de faire preuve de transparence
                sur l'empreinte qu'elle laisse vis-à-vis de la société et de
                l'environnement.
              </p>
              <p>
                La transition vers une économie soutenable ne pourra se faire
                efficacement et de manière juste que si les <b>impacts des
                  entreprises sont liés à la valeur économique qu'elles créent</b>, et
                si leur performance ainsi mesurée est rendue publique.
              </p>
              <p>
                <b>Nous entreprenons donc la construction d'une base de données
                  ouverte centralisant les impacts de la valeur produite des
                  entreprises sur des enjeux sociaux et environnementaux clefs</b> et la
                mise en œuvre des ressources nécessaires à leur mesure. Notre
                enjeu n'est pas de développer une activité commerciale mais de
                faire évoluer les normes comptables pour enfin s'outiller pour la
                transition écologique et sociale et ainsi se donner les moyens
                d'agir.
              </p>
              <p>
                La Société Nouvelle n'est que la structure porteuse de cette
                initiative : l'ensemble de nos travaux sont à l'entière
                disposition des acteurs économiques, et notre volonté est de
                transférer nos activités aux pouvoirs publics.
              </p>

            </div>
          </div>
        </Container>
      </section>
      {/* Team Section */}
      <section className="section">
        <Container>

          <div className="section-header text-center mb-4 mb-md-5">
            <h5 className="section__title section__title--center"> L'équipe #engagée</h5>
            <p className="section-subtitle">
              Une équipe pluridisciplinaire d'experts engagés pour la transition des entreprises vers une économie plus durable.
            </p>
          </div>

          <Row className="mb-4 align-items-center justify-content-center">
            <Col lg={3}>
              <div className="team-member">
                <Image
                  src="/images/equipe/portrait-sylvain.png"
                  alt="Sylvain Humilière"
                  width={200}
                  height={200}
                  className="member-image"
                />
                <h6 className="member-name">Sylvain Humilière</h6>
                <p className="member-role">Partenariats</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="team-member">
                <Image
                  src="/images/equipe/portrait-laura.png"
                  alt="Laura Roost"
                  width={200}
                  height={200}
                  className="member-image"
                />
                <h6 className="member-name">Laura Roost</h6>
                <p className="member-role">Développement informatique</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="team-member">
                <Image
                  src="/images/equipe/portrait-joris.png"
                  alt="Joris Blain"
                  width={200}
                  height={200}
                  className="member-image"
                />
                <h6 className="member-name">Joris Blain</h6>
                <p className="member-role">Econométrie</p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  );
}