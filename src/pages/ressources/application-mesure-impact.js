import React from "react";
import { Col, Container, Image, Row, Button, Ratio } from "react-bootstrap";
import { DocButton } from "../../components/buttons/DocButton";
import { MetrizButton } from "../../components/buttons/MetrizButton";
import PageHeader from "../../components/PageHeader";

const Metriz = () => {
  return (
    <>
      <PageHeader
        title={"Application Web Metriz"}
        prev={"ressources"}
        prevTitle={"Ressources"}
        path={"ressources/application-mesure-impact"}
        hasBreadcrumb={true}
      />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>
                Un outil libre et gratuit pour mesurer l'impact des entreprises
              </h3>
              <p>
                L'application web METRIZ est un outil <b>libre et gratuit</b>{" "}
                développé par La Société Nouvelle pour permettre la mesure des
                indicateurs de <strong>l'Empreinte Sociétale</strong>.
              </p>
              <p>
                L'application permet de faire le lien entre le{" "}
                <b>fichier d'écritures comptables</b> (FEC), les données
                disponibles pour <b>les fournisseurs</b> et les impacts directs
                de l'entreprise.
              </p>
              <p>
                Le calcul se fait "en local" au sein du navigateur web pour
                garantir la <strong>sécurité des données</strong>. Le code
                source de l'application est public pour une complète
                transparence.
              </p>
              <p>
                L'application est distribuée sous <b>licence libre </b>CeCILL.
              </p>
              <div className="mt-4 text-end">
                <MetrizButton />
                <DocButton margin={"ms-2"} />
              </div>
            </Col>
            <Col className="text-end">
              <Image
                fluid
                src="/images/application-mesure-impact.png"
                alt="Illustration Application mesure impact"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="steps bg-light-secondary">
        <Container>
          <h3 className="mb-5 text-center ">Comment fonctionne l'Application ?</h3>
          <Row>
            <Col>
              <Row>
                  <div className=" d-flex bg-white rounded align-items-center p-3 shadow-sm mb-3">
                    <div className="icon text-secondary me-2 text-secondary me-2">
                      <i className="bi bi-upload"></i>
                    </div>
                    <p className="mb-0">Importez votre Fichier d'Ecritures Comptables (FEC)</p>
                  </div>
                  <div className=" d-flex bg-white rounded align-items-center p-3 shadow-sm mb-3">
                    <div className="icon text-secondary me-2">
                      <i className="bi bi-archive"></i>
                    </div>
                    <p className="mb-0">
                      Saisissez les Etats initiaux de l'empreinte des stocks et
                      immobilisations
                    </p>
                  </div>
                  <div className=" d-flex bg-white rounded align-items-center p-3 shadow-sm mb-3">
                    <div className="icon text-secondary me-2">
                      <i className="bi bi-arrow-repeat"></i>
                    </div>
                    <p className="mb-0">Récupérez les empreintes des fournisseurs</p>
                  </div>
                  <div className=" d-flex bg-white rounded align-items-center p-3 shadow-sm mb-3">
                    <div className="icon text-secondary me-2">
                      <i className="bi bi-calculator"></i>
                    </div>
                    <p className="mb-0">
                      Evaluez et Déclarez les impacts directs de l'entreprise
                    </p>
                  </div>
                  <div className=" d-flex bg-white rounded align-items-center p-3 shadow-sm mb-3">
                    <div className="icon text-secondary me-2">
                      <i className="bi bi-download"></i>
                    </div>
                    <p className="mb-0">
                      Téléchargez les livrables : Rapport par indicateur,
                      tableaux comparatifs, ...
                    </p>
                  </div>
                  <Button
              variant="secondary"
              href="https://docs.lasocietenouvelle.org/application-web/tutorial"
              target="_blank"
              title="Accéder au tutoriel de l'application"
            >
              Consulter le tutoriel
            </Button>
              </Row>
            </Col>
            <Col>
              <div className="bordered border-light p-3 bg-white rounded">
                <video 
                poster="/videos/miniature-metriz.jpg"
                controls style={{ width: "100%", height: "auto" }}>
                  <source src="/videos/tuto-metriz.mp4" />
                </video>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
      <section>
        <Container>
          <h3>Confidentialité des données</h3>
          <p>
            Le traitement des données se fait en « côté client » au sein de la
            page web (les scripts sont importés lors du chargement de la page)
            de manière anonyme. Les données chargées restent dans un état
            éphémère qui se réinitialise en cas de rafraîchissement de la page
            (F5). Cette disposition implique qu'une sauvegarde doit être
            enregistrée sur votre ordinateur et réimportée si vous souhaitez
            reprendre a posteriori une évaluation en cours.
          </p>
          <p>
            Les flux externes se limitent aux requêtes émises à l'API La Société
            Nouvelle pour l'obtention des données relatives aux fournisseurs.
            Pour une totale transparence, le code source est librement
            accessible.
          </p>
        </Container>
      </section>
      <section className="bg-light text-center">
        <Container>
          <h3>Bénéficier d'une version personnalisée</h3>
          <p>
            Pour aller plus loin et faciliter la production des livrables, il
            est possible de bénéficier d'une version propre (adaptation des
            imports de fichiers, personnalisation des livrables) et d'un support
            technique, n'hésitez pas à nous contacter.
          </p>
          <Button variant="secondary" href="/contact">
            Contactez-nous
          </Button>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>Licence libre CeCILL</h3>
              <p>
                L'application est distribuée sous la licence libre CeCILL. Elle
                comprend notamment :
              </p>
              <ul>
                <li>Droit d'utilisation sans restriction;</li>
                <li>
                  Droit d'adapter, d'arranger ou d'apporter toute autre
                  modification;
                </li>
                <li>
                  Droit de diffuser, de transmettre et de communiquer
                  l'application web au public, ainsi que le droit de mettre sur
                  le marché à titre onéreux ou gratuit, un ou des exemplaires;
                </li>
              </ul>
              <p>
                La licence offre une grande liberté dans l'exploitation de
                l'outil et du code et une préservation de cette licence pour les
                modifications apportées.
              </p>
              <a
                className="btn btn-primary"
                href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-METRIZ-WebApp"
                target="_blank"
                title="Accéder au répertoire GitHub"
              >
                <i className="bi bi-github"></i> Accéder au code source
              </a>
            </Col>
            <Col className="text-end">
              <Image
                src="/illustrations/code-open-source-cecill.svg"
                alt="Illustration pour l'open source"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Metriz;
