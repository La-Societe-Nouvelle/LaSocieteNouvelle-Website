import React from "react";
import {
  Accordion,
  Col,
  Container,
  Image,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Foire aux questions </title>
      </Helmet>
      <PageHeader
        title={"Foire Aux Questions"}
        path={"faq"}
        hasBreadcrumbs={false}
      />

      <section>
        <Container>
          <p>
            Si vous avez des questions sur nos missions ou nos services, notre
            FAQ peut vous aider. Nous avons recensé les questions les plus
            fréquentes et leurs réponses pour vous offrir une assistance rapide.
            Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à
            nous contacter en utilisant <a href="/contact" title="Contact" className="text-secondary">le formulaire de contact</a> .
          </p>

          <Tabs defaultActiveKey="qg" className="mt-5 panel-indicateurs" fill>
            <Tab eventKey="qg" title="Questions générales">
              <div className="m-4">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Qu'est-ce que l'empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      L'empreinte sociétale est un panel d'indicateurs exprimant
                      les impacts sociaux et environnementaux de la production
                      vendue d'une entreprise sur 12 dimensions sociales et
                      environnementales.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Pourquoi mesurer l'empreinte sociétale de ses activités
                        ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      L'Empreinte Sociétale traduit la capacité de l'entreprise
                      à produire de la valeur, des biens/services, en limitant
                      ses impacts négatifs ou en maximisant ses impacts
                      positifs. Sur chacune des dimensions mesurées, elle permet
                      de comprendre l'origine de ses impacts, de se situer par
                      rapport à sa branche et d'aligner sa trajectoire avec les
                      objectifs nationaux à atteindre. Elle constitue ainsi un
                      outil de suivi, de pilotage et de valorisation de sa
                      performance extra-financière.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Pourquoi publier votre empreinte sociale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      La publication de votre empreinte sociale vous permet de
                      faire preuve de transparence sur l’empreinte de vos
                      activités. Elle confirme votre engagement pour la
                      construction d’une économie durable, justifie que vous
                      agissez à la hauteur des objectifs et permet aux acteurs
                      de votre marché de vous identifier parmi les entreprises
                      porteuses de la transition. Auprès de vos clients, elle
                      leur permet d’estimer leurs impacts amont en travaillant
                      avec vous ; et renforce ainsi vos relations commerciales
                      avec eux.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quels sont les indicateurs utilisés au sein de
                        l'empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      L'empreinte sociétale se compose de 12 indicateurs, dont 6
                      socio-économiques et 6 environnementaux. (Accessibles ici)
                      Ils ont été choisis au regard de leur importance pour une
                      société soutenable, de leur pertinence pour l’entreprise
                      et de leur utilité pour le consommateur final. Chaque
                      indicateur est mis en lien avec les Objectifs de
                      Développement Durable (ODD) de l'ONU.
                      <br></br>
                      Le panel d'indicateurs actuel a été constitué par nos
                      soins. La création d’un comité de gouvernance est
                      souhaitée pour 2024 avec différents acteurs de l'économie
                      et du développement durable. Il sera en charge du choix
                      des indicateurs et de la méthodologie associée pour la
                      mesure des impacts directs.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quelle est la particularité de la méthodologie de mesure
                        des indicateurs ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        La méthodologie vise à rendre compte des impacts d’un
                        euro de production vendue en s’appuyant sur une
                        traçabilité des flux financiers. La production est
                        décomposée en valeur ajoutée nette, consommations
                        intermédiaires et consommations de capital fixe
                        (dotations aux amortissements sur immobilisations).
                      </p>
                      <p>
                        Les impacts des consommations sont obtenus à partir des
                        empreintes de la production des fournisseurs et les
                        impacts de la valeur ajoutée nette correspondent aux
                        impacts directs de l’entreprise sur son périmètre
                        opérationnel.
                      </p>
                      <p>
                        Pour son application, l’outil reprend donc les écritures
                        comptables pour récupérer les mouvements financiers
                        nécessaires (production, consommations, etc.), récupère
                        les empreintes de la production des fournisseurs
                        (disponibles au sein de notre base de données ouverte)
                        via leur numéro siren et permet l’évaluation et la
                        déclaration des impacts directs, pour in fine produire
                        les indicateurs de l’Empreinte Sociétale.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quels sont les tarifs lorsque l’on mesure notre
                        empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        La mesure de l’empreinte de votre production est 100%
                        gratuite. Seule la publication (volontaire) de votre
                        empreinte au sein de la base de données ouverte sera
                        sousmise à un coût de formalité administrative à partir
                        du 1er janvier 2024.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quels sont les tarifs lorsque l’on publie notre
                        empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        La publication correspond à la mise à jour des valeurs
                        concernant votre unité légale au sein de la base de
                        données ouverte. La tarification vise à s’appliquer à
                        partir du 1er janvier 2024. Les tarifs actuellement
                        envisagés sont :
                      </p>
                      <ul>
                        <li> 50 € pour les sociétés</li>
                        <li>
                          {" "}
                          25 € pour les sociétés unipersonnelles (EURL, etc.)
                        </li>
                        <li>
                          {" "}
                          10 € pour les autres structures (associations, etc.)
                        </li>
                      </ul>
                      <p>
                        Ces coûts permettront d’assurer la maintenance et
                        l’administration de la base de données ouverte et de
                        l’API et les travaux statistiques nécessaires à
                        l’amélioration des données.
                      </p>
                      <p>
                        Ce mode de financement nous permet de garantir un accès
                        libre aux données et à l’outil de mesure de
                        l’application Metriz.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quel est notre business model ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Le projet n’a pas été initié dans un but lucratif. Notre
                        première volonté est de déployer au maximum
                        l’information au sujet des impacts socioenvironnementaux
                        des entreprises, et de céder ce rôle aux pouvoirs
                        publics.
                      </p>
                      <p>
                        L’accès libre à nos outils et à nos travaux est un
                        engagement inflexible : la base de données est et
                        restera ouverte, l’outil est restera libre et open
                        source. La pérennité de la structure vise à être assurer
                        par la mise en place des frais de publication. La
                        Société Nouvelle bénéficie actuellement de revenus issus
                        via des contrats de partenariats avec des cabinets
                        comptables, pour la mise en place du service pour leurs
                        clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Puis-je modifier les informations une fois publiées ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Une fois publiées, vos données sont parfaitement
                        modifiables. Il vous suffit de prendre contact avec
                        nous, via le formulaire de contact{" "}
                        <a
                          href="/contact"
                          title="Formulaire de contact"
                          className="text-secondary fw-bold"
                        >
                          {" "}
                          ici{" "}
                        </a>{" "}
                        ou par mail via l’adresse :{" "}
                        <a
                          href="mailto:admin@lasocietenouvelle.org"
                          className="text-secondary fw-bold"
                        >
                          admin@lasocietenouvelle.org
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quand mesurer mon empreinte et à quelle fréquence ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Il convient de mesurer votre Empreinte Sociétale
                        annuellement, en fin d’exercice fiscal dès la
                        finalisation de votre Fichier d’Ecritures Comptables
                        (FEC). Chaque année, vous pourrez ainsi observer
                        l’évolution de votre performance dans le temps et vous
                        comparer aux trajectoires cibles définies par les
                        objectifs nationaux.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Me situer par rapport à ma branche est-il suffisant ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="">
                    <Accordion.Header as="h4">
                      <span className="fw-bold"></span>
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="qt" title="Questions techniques"></Tab>
            <Tab eventKey="qc" title="Questions cabinets comptables"></Tab>
            <Tab eventKey="qe" title="Questions entreprises"></Tab>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default Faq;
